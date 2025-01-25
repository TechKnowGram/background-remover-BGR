import React from 'react'
import { useNavigate } from 'react-router-dom';

const Productphotoenhancer = () => {
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
          <h1>Product Photo Enhancer</h1>
          <h5>Optimize your product photos for free and boost your sales</h5>
          <div className="template-editer">
            <div className="background-options">
              {/* Background options content */}
            </div>
            <div className="editing-output" id="canvasContainer">
              <img src="" id="mainImageElement" className="d-block" />
              <div className="lds-ring" id="canvasProgressBar" style={{display: 'none'}}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="editing-option">
              <div className="whitebox templateImageElements" id="templateImageElements">
                <h6>Upload Image</h6>
                <div className="optionsBox">
                  <div className="img-thumbnails">
                    <img id="thumb_placeholder" src="static/images/design_templates/product_photo_optimizer/placeholder.png" alt="" />
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
              <div className="whitebox templateImageElements" id="templateShadowElements">
                <h6>Drop Shadow</h6>
                <div className="ranger">
                  <span>Range it as per your requirement</span>
                  <div className="range-wrap">
                    <input type="range" className="range" defaultValue={0} id="shadowSlider" />
                    <output className="bubble" />
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
    </div>
  )
}

export default Productphotoenhancer;