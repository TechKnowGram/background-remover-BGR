import axios from "axios";

// =====================
// Constants
// =====================

// Maximum number of images a user can upload
export const MAX_UPLOADS = 5;

// =====================
// Helper Functions
// =====================

// Returns an array of color options for background selection
export const getColorOptions = () => [
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

// Returns the number of uploads remaining
export const getRemainingUploadsText = (uploadedImagesCount) => {
  const remaining = MAX_UPLOADS - uploadedImagesCount;
  return remaining === 1
    ? "1 upload remaining"
    : `${remaining} uploads remaining`;
};

// Checks if the upload limit has been reached
export const isUploadLimitReached = (uploadedImagesCount) => {
  return uploadedImagesCount >= MAX_UPLOADS;
};

// Creates an image object from a selected file
export const createImageObject = (file) => {
  if (!file) return null;

  return {
    url: URL.createObjectURL(file), // Creates a temporary URL for preview
    name: file.name,
    type: file.type,
    size: file.size,
    lastModified: file.lastModified,
  };
};

// Validates an image file (type & size constraints)
export const validateImageFile = (file) => {
  if (!file.type.startsWith("image/")) {
    return { valid: false, message: "Only image files are allowed" };
  }

  if (file.size > 10 * 1024 * 1024) {
    // 10MB size limit
    return { valid: false, message: "Image size exceeds 10MB limit" };
  }

  return { valid: true };
};

// =====================
// Event Handlers
// =====================

// Handles the upload button click event
export const handleUploadClick = (
  uploadedImages,
  setUploadLimitReached,
  setErrorMessage,
  fileInputRef
) => {
  if (isUploadLimitReached(uploadedImages.length)) {
    setUploadLimitReached(true);
    setErrorMessage(`Maximum upload limit reached (${MAX_UPLOADS})`);
    setTimeout(() => {
      setUploadLimitReached(false);
      setErrorMessage("");
    }, 3000);
    return;
  }
  fileInputRef.current.click();
};

// Handles the file input change event when a user selects an image
export const handleFileChange = (
  event,
  uploadedImages,
  setUploadedImages,
  setActiveImageIndex,
  setUploadLimitReached,
  setErrorMessage
) => {
  const file = event.target.files[0];

  if (!file) return;

  // Validate the selected file
  const validation = validateImageFile(file);
  if (!validation.valid) {
    setErrorMessage(validation.message);
    setTimeout(() => setErrorMessage(""), 3000);
    return;
  }

  // Check if the upload limit is reached
  if (isUploadLimitReached(uploadedImages.length)) {
    setUploadLimitReached(true);
    setErrorMessage(`Maximum upload limit reached (${MAX_UPLOADS})`);
    setTimeout(() => {
      setUploadLimitReached(false);
      setErrorMessage("");
    }, 3000);
    return;
  }

  // Create an image object and update state
  const imageObject = createImageObject(file);
  if (imageObject) {
    const newUploadedImages = [...uploadedImages, imageObject];
    setUploadedImages(newUploadedImages);
    setActiveImageIndex(newUploadedImages.length - 1);
  }

  // Reset file input so the same file can be selected again if needed
  event.target.value = "";
};

// Handles thumbnail selection
export const handleThumbnailClick = (index, setActiveImageIndex) => {
  setActiveImageIndex(index);
};

// =====================
// API Call - Change Background
// =====================

// Sends the selected image file and color to the backend, updates the processed image preview
export const handleChangeBackground = async (
  uploadedImages,
  activeImageIndex,
  selectedColor,
  setProcessedImageUrl,
  setErrorMessage
) => {
  if (activeImageIndex === null || uploadedImages.length === 0) {
    setErrorMessage("No image selected");
    setTimeout(() => setErrorMessage(""), 3000);
    return;
  }

  const image = uploadedImages[activeImageIndex];

  try {
    // Create FormData to send the file
    const formData = new FormData();
    formData.append("image", image.file); // Send actual file
    formData.append("color", selectedColor); // Send selected background color

    const response = await axios.post(
      "https://your-backend-url.com/api/change-background",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      }
    );

    if (response.data.newImageUrl) {
      setProcessedImageUrl(response.data.newImageUrl); // Update the processed image preview
    } else {
      throw new Error(response.data.message || "Failed to change background");
    }
  } catch (error) {
    setErrorMessage(error.response?.data?.message || "Something went wrong");
    setTimeout(() => setErrorMessage(""), 3000);
  }
};
