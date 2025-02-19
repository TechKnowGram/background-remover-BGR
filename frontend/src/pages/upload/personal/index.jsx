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
} from "./EditorUtils";

const ImageEditor = () => {
  // =====================
  // State Management
  // =====================

  const [selectedColor, setSelectedColor] = useState("#000"); // Stores the selected background color
  const [uploadedImages, setUploadedImages] = useState([]); // Stores uploaded images
  const [activeImageIndex, setActiveImageIndex] = useState(null); // Tracks the currently active image
  const [errorMessage, setErrorMessage] = useState(""); // Stores error messages
  const [processedImageUrl, setProcessedImageUrl] = useState(null); // Stores the processed image URL from the backend
  const fileInputRef = useRef(null); // Reference to the hidden file input

  const colors = getColorOptions(); // Fetch color options

  return (
    <EditorContainer>
      {/* Navigation Path */}
      <NavigationPath>
        <span>Home</span>
        <span>Background Remover</span>
        <span>Upload</span>
      </NavigationPath>

      <EditorLayout>
        <div>
          {/* Toolbar */}
          <Toolbar>
            <ToolButton>✏️</ToolButton>
            <ToolButton>✖️</ToolButton>
          </Toolbar>

          {/* Image Preview Section */}
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

          {/* Thumbnails Section */}
          {uploadedImages.length > 0 && (
            <ThumbnailsContainer>
              {uploadedImages.map((image, index) => (
                <ThumbnailImage
                  key={index}
                  src={image.url}
                  alt={`Thumbnail of ${image.name}`}
                  active={index === activeImageIndex}
                  onClick={() =>
                    handleThumbnailClick(index, setActiveImageIndex)
                  }
                />
              ))}
            </ThumbnailsContainer>
          )}

          {/* Color Palette Selection */}
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
          {/* Change Background Button */}
          <ActionButton
            onClick={() =>
              handleChangeBackground(
                uploadedImages,
                activeImageIndex,
                selectedColor,
                setProcessedImageUrl, // ✅ Updates processed image
                setErrorMessage
              )
            }
          >
            🖼️ Change Background
          </ActionButton>

          {/* Other Background Options */}
          <ActionButton>🤖 AI Background</ActionButton>
          <ActionButton>🌫️ Blur Background</ActionButton>

          {/* Download Buttons */}
          <ActionButton primary>⬇️ Download HD</ActionButton>
          <ImageDetails>HD Image · 1080 x 1080 px</ImageDetails>

          <ActionButton>⬇️ Download Preview</ActionButton>
          <ImageDetails>Preview Image · 500 x 500 px</ImageDetails>

          {/* Upload Button */}
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

          {/* Error Message for Upload Limit */}
          {errorMessage && (
            <UploadLimitMessage>{errorMessage}</UploadLimitMessage>
          )}

          {/* Hidden File Input */}
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
