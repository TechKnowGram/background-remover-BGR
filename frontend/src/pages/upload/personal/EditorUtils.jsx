import axios from "axios";

/**
 * Base URL for API endpoints
 * Retrieved from environment variables
 */
const backendUrl = process.env.REACT_APP_BASE_URL;

// =====================
// Constants
// =====================

/**
 * Maximum number of images a user can upload
 * Used to enforce upload limits in the UI
 */
export const MAX_UPLOADS = 5;

// =====================
// Helper Functions
// =====================

/**
 * Returns an array of color options for background selection
 * Includes transparent option and a range of colors
 * @returns {Array} Array of color hex codes
 */
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

/**
 * Returns the number of uploads remaining as a formatted string
 * @param {number} uploadedImagesCount - Current number of uploaded images
 * @returns {string} Text indicating remaining uploads
 */
export const getRemainingUploadsText = (uploadedImagesCount) => {
  const remaining = MAX_UPLOADS - uploadedImagesCount;
  return remaining === 1
    ? "1 upload remaining"
    : `${remaining} uploads remaining`;
};

/**
 * Checks if the upload limit has been reached
 * @param {number} uploadedImagesCount - Current number of uploaded images
 * @returns {boolean} True if the limit is reached, false otherwise
 */
export const isUploadLimitReached = (uploadedImagesCount) => {
  return uploadedImagesCount >= MAX_UPLOADS;
};

/**
 * Creates an image object from a selected file
 * Generates a temporary URL for preview
 * @param {File} file - The file object from the file input
 * @returns {Object|null} Image object with metadata or null if no file
 */
export const createImageObject = (file) => {
  if (!file) return null;

  return {
    url: URL.createObjectURL(file), // Creates a temporary URL for preview
    name: file.name,
    type: file.type,
    size: file.size,
    lastModified: file.lastModified,
    file: file, // Add the actual file object here
  };
};

/**
 * Validates an image file based on type and size constraints
 * @param {File} file - The file to validate
 * @returns {Object} Validation result with valid flag and error message
 */
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

/**
 * Handles the upload button click event
 * Triggers the hidden file input click or shows error if limit reached
 * @param {Array} uploadedImages - Currently uploaded images
 * @param {Function} setErrorMessage - State setter for error messages
 * @param {Object} fileInputRef - React ref to the file input element
 */
export const handleUploadClick = (
  uploadedImages,
  setErrorMessage,
  fileInputRef
) => {
  if (!fileInputRef || !fileInputRef.current) {
    setErrorMessage("File input is not available.");
    return;
  }

  if (isUploadLimitReached(uploadedImages.length)) {
    setErrorMessage(`Maximum upload limit reached (${MAX_UPLOADS})`);
    setTimeout(() => setErrorMessage(""), 3000);
    return;
  }

  fileInputRef.current.click();
};

/**
 * Handles the file input change event when a user selects an image
 * Validates, creates image object, and updates state
 * @param {Event} event - The file input change event
 * @param {Array} uploadedImages - Currently uploaded images
 * @param {Function} setUploadedImages - State setter for uploaded images
 * @param {Function} setActiveImageIndex - State setter for active image index
 * @param {Function} setErrorMessage - State setter for error messages
 */
export const handleFileChange = (
  event,
  uploadedImages,
  setUploadedImages,
  setActiveImageIndex,
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
    setErrorMessage(`Maximum upload limit reached (${MAX_UPLOADS})`);
    setTimeout(() => {
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

/**
 * Handles thumbnail selection
 * Sets the active image index when a thumbnail is clicked
 * @param {number} index - Index of the clicked thumbnail
 * @param {Function} setActiveImageIndex - State setter for active image index
 */
export const handleThumbnailClick = (index, setActiveImageIndex) => {
  setActiveImageIndex(index);
};

// =====================
// API Call - Change Background
// =====================

/**
 * Sends the selected image file to the backend for processing
 * Updates the processed image preview with result
 * @param {Array} uploadedImages - Currently uploaded images
 * @param {number} activeImageIndex - Index of currently active image
 * @param {string} selectedColor - Selected background color hex code
 * @param {Function} setProcessedImageUrl - State setter for processed image URL
 * @param {Function} setErrorMessage - State setter for error messages
 * @returns {Promise<void>}
 */
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
    formData.append("files[]", image.file); // Send actual file
    // formData.append("color", selectedColor); // Send selected background color

    const response = await axios.post(`${backendUrl}/process`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Required for file uploads
      },
    });

    if (response.data.processed_images[0]) {
      setProcessedImageUrl(
        `${backendUrl}/static/processed/${response.data.processed_images[0]}`
      ); // Update the processed image preview
    } else {
      throw new Error(response.data.message || "Failed to change background");
    }
  } catch (error) {
    setErrorMessage(error.response?.data?.message || "Something went wrong");
    setTimeout(() => setErrorMessage(""), 3000);
  }
};

/**
 * Handles downloading the current image (either processed or original)
 * Creates a temporary download link and triggers download
 * @param {Array} uploadedImages - Currently uploaded images
 * @param {number} activeImageIndex - Index of currently active image
 * @param {string} processedImageUrl - URL of processed image if available
 * @param {Function} setErrorMessage - State setter for error messages
 * @returns {Promise<void>}
 */
export const handleDownloadImage = async (
  uploadedImages,
  activeImageIndex,
  processedImageUrl,
  setErrorMessage
) => {
  let downloadUrl;
  let fileName;
  let isRemoteUrl = false;

  // Determine which image to download
  if (processedImageUrl) {
    // If there's a processed image from backend
    downloadUrl = processedImageUrl;
    fileName = "processed-image.jpg";
    isRemoteUrl = true;
  } else if (activeImageIndex !== null && uploadedImages.length > 0) {
    // Otherwise download the selected uploaded image
    downloadUrl = uploadedImages[activeImageIndex].url;
    fileName = uploadedImages[activeImageIndex].name;
  } else {
    // No image to download
    setErrorMessage("No image available to download");
    setTimeout(() => setErrorMessage(""), 3000);
    return;
  }

  try {
    if (isRemoteUrl) {
      // For remote URLs (processed images from the backend), fetch the image first
      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error("Failed to fetch the image");

      const blob = await response.blob();
      downloadUrl = URL.createObjectURL(blob);
    }

    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the object URL if we created one
    if (isRemoteUrl) {
      URL.revokeObjectURL(downloadUrl);
    }
  } catch (error) {
    console.error("Download failed:", error);
    setErrorMessage("Failed to download the image");
    setTimeout(() => setErrorMessage(""), 3000);
  }
};

/**
 * Sends all uploaded images to the backend for processing and downloading
 * Backend will combine them and initiate a single file download
 * @param {Array} uploadedImages - All currently uploaded images
 * @param {Function} setErrorMessage - State setter for error messages
 * @param {Function} setIsBulkDownloading - State setter for tracking bulk download progress
 * @returns {Promise<void>}
 */
export const handleBulkDownload = async (
  uploadedImages,
  setErrorMessage,
  setIsBulkDownloading
) => {
  if (!uploadedImages || uploadedImages.length === 0) {
    setErrorMessage("No images available for bulk download");
    setTimeout(() => setErrorMessage(""), 3000);
    return;
  }

  try {
    // Create FormData to send all files
    const formData = new FormData();

    // Append all image files to the FormData
    uploadedImages.forEach((image, index) => {
      formData.append(`files[${index}]`, image.file);
    });

    const response = await axios({
      method: "post",
      url: `${backendUrl}/bulk-download`,
      data: formData,
      responseType: "blob", // Important: we want a binary response
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Create a download link for the returned file
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    // Get the filename from the response headers if available
    const contentDisposition = response.headers["content-disposition"];
    let filename = "all-images.zip";

    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename="(.+)"/);
      if (filenameMatch && filenameMatch.length > 1) {
        filename = filenameMatch[1];
      }
    }

    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Bulk download failed:", error);
    setErrorMessage(
      error.response?.data?.message || "Failed to download files"
    );
    setTimeout(() => setErrorMessage(""), 3000);
  }
};
