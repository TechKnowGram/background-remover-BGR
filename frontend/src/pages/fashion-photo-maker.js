import React from 'react'
import { useNavigate } from 'react-router-dom';

const Fashionphotomaker = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/upload');
  };

  return (
    <div>
      <section className="photo-optimizer">
        <div className="container">
          <div className="back">
            <a href="design-maker" title>
              <img src="static/images/design_templates/all_templates/back.svg" alt="icon-back.svg" />
              Back to Design Maker
            </a>
          </div>
          <h1>Fashion Photo Designer</h1>
          <h5>Create a fashion photo-shoot for free</h5>
          <div className="template-editer">
            <div className="background-options">
              {/* Background options content */}
            </div>
            <div className="editing-output" id="canvasContainer">
              <img src id="mainImageElement" className="d-block w-100" />
              {/* Loading spinner */}
            </div>
            <div className="editing-option">
              <div className="whitebox templateImageElements" id="templateImageElements">
                <h6>Upload Your Image</h6>
                <div className="optionsBox">
                  <div className="img-thumbnails">
                    <img id="thumb_placeholder" src="static/images/design_templates/fashion_photo/placeholder.png" alt="" />
                  </div>
                  <div className="upload-image">
                    <input type="file" id="uploadImage" accept="image/png, image/jpeg" style={{display: 'none'}} />
                    <button type="button" className="upload-photo upload-image-file-btn" onClick={handleButtonClick}>
                      <i className="fa fa-picture-o" />
                      Upload File
                    </button>
                    <span className="drag">or drag a file</span>
                  </div>
                </div>
              </div>
              <div className="save-share">
                {/* Save and share options */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="static-content-01">
        <div className="container">
          <div className="static-row">
            <div className="static-img">
              <img src="static/images/design_templates/all_templates/next/fashion/fashion.jpg" alt="BGR's design templates for fashion photos" />
            </div>
            <div className="static-content">
              <h2>Fashion photography made easy</h2>
              <p>The growth of online shopping has somewhat complicated the photoshoot process. Our new design templates solve all this and empower you to create your own optimized fashion shots with cool backgrounds for all your social media or online stores. Say goodbye to headaches and time-consuming editing, our AI will give you the results you need in just a few seconds.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Fashionphotomaker