import React, { useState, useRef } from "react";
import {
  EditorContainer,
  NavigationPath,
  EditorLayout,
  ImagePreview,
  Toolbar,
  ToolButton,
  ColorPalette,
  ColorButton,
  SidePanel,
  ActionButton,
  ImageDetails,
  UploadButton,
  HiddenFileInput,
  UploadButtonText,
  ThumbnailsContainer,
  ThumbnailImage,
  UploadLimitMessage,
} from "./EditorStyles";
import {
  getColorOptions,
  getRemainingUploadsText,
  isUploadLimitReached,
  handleUploadClick,
  handleFileChange,
  handleThumbnailClick,
  handleChangeBackground,
  handleDownloadImage,
  handleBulkDownload, // Import the new bulk download function
} from "./EditorUtils";

/**
 * Main ImageEditor component
 * Provides UI for uploading, selecting, and processing images with background removal
 */
const ImageEditor = () => {
  // =====================
  // State Management
  // =====================

  /**
   * State for the currently selected background color
   * Default is black (#000)
   */
  const [selectedColor, setSelectedColor] = useState("#000");

  /**
   * State for storing all uploaded images
   * Each image is an object with url, name, type, size, etc.
   */
  const [uploadedImages, setUploadedImages] = useState([]);

  /**
   * State for tracking the index of the currently active/selected image
   * Null when no image is selected
   */
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  /**
   * State for storing error messages to display to the user
   * Empty string when no errors
   */
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * State for storing the URL of the processed image from the backend
   * Null when no processed image is available
   */
  const [processedImageUrl, setProcessedImageUrl] = useState(null);

  /**
   * State for tracking whether an image download is in progress
   * Used to prevent multiple simultaneous downloads
   */
  const [isDownloading, setIsDownloading] = useState(false);

  /**
   * State for tracking whether a bulk download is in progress
   * Used to prevent multiple simultaneous bulk downloads
   */
  const [isBulkDownloading, setIsBulkDownloading] = useState(false);

  /**
   * Reference to the hidden file input element
   * Used to programmatically trigger file selection dialog
   */
  const fileInputRef = useRef(null);

  /**
   * Get the available color options for background selection
   */
  const colors = getColorOptions();

  /**
   * Handle download button click
   * Sets loading state and calls the download handler
   */
  const onDownloadClick = async () => {
    if (isDownloading) return; // Prevent multiple clicks

    setIsDownloading(true);
    try {
      await handleDownloadImage(
        uploadedImages,
        activeImageIndex,
        processedImageUrl,
        setErrorMessage
      );
    } finally {
      setIsDownloading(false);
    }
  };

  /**
   * Handle bulk download button click
   * Sets loading state and calls the bulk download handler
   */
  const onBulkDownloadClick = async () => {
    if (isBulkDownloading) return; // Prevent multiple clicks

    setIsBulkDownloading(true);
    try {
      await handleBulkDownload(
        uploadedImages,
        setErrorMessage,
        setIsBulkDownloading
      );
    } finally {
      setIsBulkDownloading(false);
    }
  };

  return (
    <EditorContainer>
      {/* Navigation Path - Breadcrumb navigation */}
      <NavigationPath>
        <span>Home</span>
        <span>Background Remover</span>
        <span>Upload</span>
      </NavigationPath>

      <EditorLayout>
        <div>
          {/* Toolbar - Container for editing tools */}
          <Toolbar>
            <ToolButton>✏️</ToolButton>
            <ToolButton>✖️</ToolButton>
          </Toolbar>

          {/* Image Preview Section - Shows currently selected or processed image */}
          <ImagePreview>
            {processedImageUrl ? (
              <img
                src={processedImageUrl}
                alt="Processed Image"
                style={{ maxWidth: "100%", maxHeight: "450px" }}
              />
            ) : activeImageIndex !== null && uploadedImages.length > 0 ? (
              <img
                src={uploadedImages[activeImageIndex].url}
                alt={`Preview of ${uploadedImages[activeImageIndex].name}`}
                style={{ maxWidth: "100%", maxHeight: "450px" }}
              />
            ) : (
              <p>No image selected</p>
            )}
          </ImagePreview>

          {/* Thumbnails Section - Shows all uploaded images as thumbnails */}
          {uploadedImages.length > 0 && (
            <ThumbnailsContainer>
              {uploadedImages.map((image, index) => (
                <ThumbnailImage
                  key={index}
                  src={image.url}
                  alt={`Thumbnail of ${image.name}`}
                  active={index === activeImageIndex}
                  onClick={() => {
                    handleThumbnailClick(index, setActiveImageIndex);
                    setProcessedImageUrl(null); // Clear processed image when switching thumbnails
                  }}
                />
              ))}
            </ThumbnailsContainer>
          )}

          {/* Color Palette Selection - Available background colors */}
          <ColorPalette>
            {colors.map((color) => (
              <ColorButton
                key={color}
                color={color}
                selected={selectedColor === color}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </ColorPalette>
        </div>

        {/* Side Panel - Actions & Uploads */}
        <SidePanel>
          {/* Change Background Button - Primary action */}
          <ActionButton
            primary
            onClick={() =>
              handleChangeBackground(
                uploadedImages,
                activeImageIndex,
                selectedColor,
                setProcessedImageUrl,
                setErrorMessage
              )
            }
            disabled={activeImageIndex === null || uploadedImages.length === 0}
          >
            🖼️ Change Background
          </ActionButton>

          {/* Download Button - Export the current or processed image */}
          <ActionButton
            onClick={onDownloadClick}
            disabled={
              isDownloading ||
              !(
                processedImageUrl ||
                (activeImageIndex !== null && uploadedImages.length > 0)
              )
            }
          >
            {isDownloading ? "⏳ Downloading..." : "⬇️ Download Image"}
          </ActionButton>

          {/* Bulk Download Button - Send all images to backend and initiate download */}
          <ActionButton
            onClick={onBulkDownloadClick}
            disabled={isBulkDownloading || uploadedImages.length === 0}
          >
            {isBulkDownloading
              ? "⏳ Preparing Archive..."
              : "📦 Download All Images"}
          </ActionButton>

          {/* Image Details - Shows information about the current image */}
          <ImageDetails>
            {processedImageUrl
              ? "Processed Image"
              : activeImageIndex !== null && uploadedImages.length > 0
              ? `${uploadedImages[activeImageIndex].name}`
              : "No image selected"}
          </ImageDetails>

          {/* Upload Button - Triggers file selection dialog */}
          <UploadButton
            onClick={() =>
              handleUploadClick(uploadedImages, setErrorMessage, fileInputRef)
            }
            disabled={isUploadLimitReached(uploadedImages.length)}
          >
            <UploadButtonText>+</UploadButtonText>
            Upload Image
            {!isUploadLimitReached(uploadedImages.length) && (
              <span style={{ fontSize: "0.8em", marginLeft: "5px" }}>
                ({getRemainingUploadsText(uploadedImages.length)})
              </span>
            )}
          </UploadButton>

          {/* Error Message - Displays validation errors or API errors */}
          {errorMessage && (
            <UploadLimitMessage>{errorMessage}</UploadLimitMessage>
          )}

          {/* Hidden File Input - Triggered by the Upload Button */}
          <HiddenFileInput
            type="file"
            ref={fileInputRef}
            onChange={(event) =>
              handleFileChange(
                event,
                uploadedImages,
                setUploadedImages,
                setActiveImageIndex,
                setErrorMessage
              )
            }
            accept="image/*"
          />
        </SidePanel>
      </EditorLayout>
    </EditorContainer>
  );
};

export default ImageEditor;
