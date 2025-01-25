import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const StyledUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation: ${fadeIn} 1s ease-in;
  padding: 2rem;
`;

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledHeading = styled.h2`
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  font-weight: 700;
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const StyledUploadSection = styled.section`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  padding: 3rem;
  width: 100%;
  max-width: 800px;
  backdrop-filter: blur(10px);
`;

const StyledUploadBox = styled.div`
  border: 3px dashed #764ba2;
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    transform: translateY(-5px);
  }
`;

const StyledFileInput = styled.input`
  display: none;
`;

const StyledFileLabel = styled.label`
  display: inline-block;
  padding: 15px 30px;
  background: linear-gradient(45deg, #9170ca, #4ECDC4);
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1rem;

  &:hover {
    background: linear-gradient(45deg, #4ECDC4, #9170ca);
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0,0,0,0.2);
  }
`;

const StyledMediaPreview = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const StyledMediaContent = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 15px 30px;
  background: linear-gradient(45deg, #9170ca, #4ECDC4);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 15px;
  font-size: 1rem;

  &:hover {
    background: linear-gradient(45deg, #4ECDC4, #9170ca);
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0,0,0,0.2);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const StyledLoadingBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1.5rem;
`;

const loadingAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const StyledLoadingProgress = styled.div`
  height: 100%;
  background: linear-gradient(45deg, #9170ca, #4ECDC4);
  animation: ${loadingAnimation} 2s linear infinite;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const UploadForm = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [backgroundOption, setBackgroundOption] = useState("image");
  const [hdAvailable, setHdAvailable] = useState(false);
  const [processedImage, setProcessedImage] = useState(null);
  const [processedVideo, setProcessedVideo] = useState(null);
  const fileInputRef = useRef(null);
  const backgroundFileRef = useRef(null);

  const hasTriggeredFileInput = useRef(false);

  const [showMedia, setShowMedia] = useState(false);
  const [isFirstUpload, setIsFirstUpload] = useState(true);
  const [backgroundUploaded, setBackgroundUploaded] = useState(false);
  const [error, setError] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (!hasTriggeredFileInput.current && fileInputRef.current) {
      fileInputRef.current.click();
      hasTriggeredFileInput.current = true;
    }
  }, []);

  useEffect(() => {
    if (file) {
      setShowMedia(true);
    }
  }, [file]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setProcessedImage(null);
      setProcessedVideo(null);
      setBackgroundUploaded(false);

      if (isFirstUpload) {
        handleSubmit(selectedFile);
        setIsFirstUpload(false);
      }
    }
  };

  const handleBackgroundUpload = (event) => {
    const backgroundFile = event.target.files[0];
    if (backgroundFile) {
      setBackgroundUploaded(true);
      console.log(`Background uploaded: ${backgroundFile.name}`);
      alert(`Background ${backgroundOption} selected: ${backgroundFile.name}`);
    }
  };

  const handleSubmit = async (selectedFile = file) => {
    setLoading(true);
    setProgress(0);
    setError(null);

    const formData = new FormData();
    formData.append("files[]", selectedFile);

    if (backgroundFileRef.current && backgroundFileRef.current.files[0]) {
      formData.append("background_image", backgroundFileRef.current.files[0]);
    }

    if (backgroundOption === "color") {
      formData.append("background_color", "#ffffff");
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/process`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`https error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Server response:", result);

      if (result.processed_images && result.processed_images.length > 0) {
        const newProcessedImage = `${process.env.REACT_APP_BASE_URL}/static/processed/${result.processed_images[0]}`;
        console.log("Processed image:", newProcessedImage);
        setProcessedImage(newProcessedImage);
      } else {
        console.log("No processed image received");
      }

      // Inside handleSubmit function, update the video handling:
      if (result.processed_video) {
        // Get the video name from the result directly
        const newProcessedVideo = `${process.env.REACT_APP_BASE_URL}/static/videos/${result.processed_video}`;
        console.log("Processed video:", newProcessedVideo);
        setProcessedVideo(newProcessedVideo);
      } else {
        console.log("No processed video received");
      }

      // In the render section where you show the video:
      {
        file && file.type.startsWith("video") && (
          <video
            controls
            src={processedVideo || preview}
            className="w-full h-full object-contain"
            preload="auto"
            controlsList="nodownload"
            onError={(e) => console.error("Video error:", e)}
          >
            Your browser does not support the video tag.
          </video>
        )
      }

      setHdAvailable(true);
      setBackgroundUploaded(false);
    } catch (error) {
      console.error("Error processing file:", error);
      setError("An error occurred while processing the file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const downloadUrl = file && file.type.startsWith("image") ? processedImage : processedVideo;
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'processed_file';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledUploadContainer>
        <StyledHeader>
          <StyledHeading>
            Create Magic with Your Media! ✨
          </StyledHeading>
        </StyledHeader>

        <StyledUploadSection>
          <StyledUploadBox>
            <StyledFileInput
              type="file"
              id="uploadMedia"
              accept="image/png, image/jpeg, video/mp4"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <StyledFileLabel htmlFor="uploadMedia">
              Choose Your Media
            </StyledFileLabel>

            {showMedia && (
              <StyledMediaPreview>
                <StyledMediaContent>
                  {file && file.type.startsWith("image") && (
                    <img src={processedImage || preview} alt="Media preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  )}
                  {file && file.type.startsWith("video") && (
                    <video controls src={processedVideo || preview} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  )}
                </StyledMediaContent>
              </StyledMediaPreview>
            )}

            {loading && (
              <StyledLoadingBar>
                <StyledLoadingProgress />
              </StyledLoadingBar>
            )}

            {error && <div style={{ color: '#9170ca', marginTop: '15px', fontWeight: '500' }}>{error}</div>}
          </StyledUploadBox>
        </StyledUploadSection>

        <StyledButtonContainer>
          <StyledFileInput
            type="file"
            id="backgroundUpload"
            accept="image/*,video/*"
            onChange={handleBackgroundUpload}
            ref={backgroundFileRef}
          />
          <StyledFileLabel htmlFor="backgroundUpload">
            Select Background 🖼️
          </StyledFileLabel>

          <StyledButton onClick={() => handleSubmit()} disabled={!backgroundUploaded}>
            Create Magic ✨
          </StyledButton>

          <StyledButton onClick={() => window.location.href = '/'}>
            Home 🏠
          </StyledButton>

          <StyledButton onClick={handleDownload} disabled={!processedImage && !processedVideo}>
            Download Result 📥
          </StyledButton>
        </StyledButtonContainer>
      </StyledUploadContainer>
    </>
  );
};

export default UploadForm;
