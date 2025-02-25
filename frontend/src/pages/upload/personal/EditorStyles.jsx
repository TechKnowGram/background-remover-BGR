import styled from "styled-components";

/**
 * Main container for the image editor application
 * Provides responsive constraints and consistent padding
 */
export const EditorContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

/**
 * Breadcrumb navigation component
 * Shows the user's current location in the application
 */
export const NavigationPath = styled.div`
  color: #666;
  margin-bottom: 20px;

  span {
    &:after {
      content: ">";
      margin: 0 8px;
    }

    &:last-child:after {
      content: "";
    }
  }
`;

/**
 * Main layout grid for the editor
 * Two-column layout with the editor on the left and controls on the right
 */
export const EditorLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
`;

/**
 * Container for displaying the current image
 * Shows the active image or processed result
 */
export const ImagePreview = styled.div`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`;

/**
 * Container for image editing tools
 * Positioned above the image preview
 */
export const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 10px;
`;

/**
 * Individual tool button in the toolbar
 * Renders with hover effect for better UX
 */
export const ToolButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

/**
 * Container for uploaded image thumbnails
 * Displays all uploaded images in a grid
 */
export const ThumbnailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
`;

/**
 * Individual thumbnail image
 * Shows active state with blue border when selected
 * Includes subtle hover animation
 */
export const ThumbnailImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 3px solid ${(props) => (props.active ? "#3366ff" : "transparent")};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

/**
 * Container for background color selection options
 * Displays available colors in a flex layout
 */
export const ColorPalette = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

/**
 * Individual color selection button
 * Shows selected state with black border
 */
export const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.selected ? "#000" : "transparent")};
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

/**
 * Right sidebar containing actions and controls
 * Separated from the main editor area
 */
export const SidePanel = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
`;

/**
 * Action button used for primary and secondary actions
 * Supports primary/secondary styling and disabled states
 */
export const ActionButton = styled.button`
  width: 100%;
  padding: 12px;
  background: ${(props) => (props.primary ? "#3366ff" : "#f5f5f5")};
  color: ${(props) => (props.primary ? "white" : "#333")};
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: ${(props) => (props.primary ? "#a3beff" : "#eee")};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

/**
 * Container for displaying image metadata
 * Shows information about the currently selected image
 */
export const ImageDetails = styled.div`
  color: #666;
  text-align: center;
  margin-top: 10px;
  font-size: 0.9em;
`;

/**
 * Button for uploading new images
 * Features distinctive dashed border and disabled state
 */
export const UploadButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  background: #f5f5f5;
  color: #333;
  border: 2px dashed #ccc;
  border-radius: 8px;
  margin-top: 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  &:hover {
    background: ${(props) => (props.disabled ? "#f5f5f5" : "#eee")};
  }
`;

/**
 * Text inside the upload button
 * Styled to be more prominent
 */
export const UploadButtonText = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

/**
 * Hidden file input used for image uploads
 * Triggered by the UploadButton
 */
export const HiddenFileInput = styled.input`
  display: none;
`;

/**
 * Component for displaying error messages
 * Styled with red color and background for visibility
 */
export const UploadLimitMessage = styled.div`
  color: #d9534f;
  font-size: 0.9em;
  text-align: center;
  margin-top: 5px;
  padding: 5px;
  background: #f9f2f2;
  border-radius: 4px;
`;
