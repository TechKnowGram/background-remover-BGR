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

const MAX_UPLOADS = 10; // Maximum number of images allowed

const ImageEditor = () => {
  const [selectedColor, setSelectedColor] = useState("#000");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [uploadLimitReached, setUploadLimitReached] = useState(false);
  const fileInputRef = useRef(null);

  const colors = [
    "transparent",
    "#000000",
    "#808080",
    "#00bfff",
    "#ff0000",
    "#ffc0cb",
    "#ffff00",
    "#ffa500",
    "#90ee90",
    "#800080",
  ];

  const handleUploadClick = () => {
    if (uploadedImages.length >= MAX_UPLOADS) {
      setUploadLimitReached(true);
      setTimeout(() => setUploadLimitReached(false), 3000); // Hide message after 3 seconds
      return;
    }
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && uploadedImages.length < MAX_UPLOADS) {
      const imageUrl = URL.createObjectURL(file);
      const newUploadedImages = [
        ...uploadedImages,
        {
          url: imageUrl,
          name: file.name,
        },
      ];
      setUploadedImages(newUploadedImages);
      setActiveImageIndex(newUploadedImages.length - 1);
    }
    // Reset file input to allow selecting the same file again
    event.target.value = "";
  };

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  const getRemainingUploadsText = () => {
    const remaining = MAX_UPLOADS - uploadedImages.length;
    return remaining === 1
      ? "1 upload remaining"
      : `${remaining} uploads remaining`;
  };

  return (
    <EditorContainer>
      <NavigationPath>
        <span>Home</span>
        <span>Background Remover</span>
        <span>Upload</span>
      </NavigationPath>

      <EditorLayout>
        <div>
          <Toolbar>
            <ToolButton>✏️</ToolButton>
            <ToolButton>✖️</ToolButton>
          </Toolbar>

          <ImagePreview>
            {activeImageIndex !== null && uploadedImages.length > 0 ? (
              <img
                src={uploadedImages[activeImageIndex].url}
                alt={`Preview of ${uploadedImages[activeImageIndex].name}`}
                style={{ maxWidth: "100%", maxHeight: "450px" }}
              />
            ) : (
              <p>No image selected</p>
            )}
          </ImagePreview>

          {uploadedImages.length > 0 && (
            <ThumbnailsContainer>
              {uploadedImages.map((image, index) => (
                <ThumbnailImage
                  key={index}
                  src={image.url}
                  alt={`Thumbnail of ${image.name}`}
                  active={index === activeImageIndex}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </ThumbnailsContainer>
          )}

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

        <SidePanel>
          <ActionButton>🖼️ Change Background</ActionButton>
          <ActionButton>🤖 AI Background</ActionButton>
          <ActionButton>🌫️ Blur Background</ActionButton>

          <ActionButton primary>⬇️ Download HD</ActionButton>
          <ImageDetails>HD Image · 1080 x 1080 px</ImageDetails>

          <ActionButton>⬇️ Download Preview</ActionButton>
          <ImageDetails>Preview Image · 500 x 500 px</ImageDetails>

          <UploadButton
            onClick={handleUploadClick}
            disabled={uploadedImages.length >= MAX_UPLOADS}
          >
            <UploadButtonText>+</UploadButtonText>
            Upload Image
            {uploadedImages.length < MAX_UPLOADS && (
              <span style={{ fontSize: "0.8em", marginLeft: "5px" }}>
                ({getRemainingUploadsText()})
              </span>
            )}
          </UploadButton>
          {uploadLimitReached && (
            <UploadLimitMessage>
              Maximum upload limit reached ({MAX_UPLOADS})
            </UploadLimitMessage>
          )}
          <HiddenFileInput
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
          />
        </SidePanel>
      </EditorLayout>
    </EditorContainer>
  );
};

export default ImageEditor;
