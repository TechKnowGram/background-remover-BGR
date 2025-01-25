import React from 'react'
import { useNavigate } from 'react-router-dom';

function Recipephotomaker() {
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
              <img src="static/images/design_templates/all_templates/back.svg" alt="Back" />
              Back to Design Maker
            </a>
          </div>
          <h1>Recipe Photo Maker</h1>
          <h5>Design food recipe cards online for free</h5>
          <div className="template-editer">
            <div className="background-options">
              {/* Background options content */}
            </div>
            <div className="editing-output" id="canvasContainer">
              <img src="" id="mainImageElement" className="d-block" />
            </div>
            <div className="editing-option">
              <div className="whitebox templateImageElements" id="templateImageElements">
                <h6>Upload Image</h6>
                <div className="optionsBox">
                  <div className="img-thumbnails">
                    <img id="thumb_placeholder" src="static/images/design_templates/recipe_photo_designer/placeholder.png" alt="Recipe card template" />
                  </div>
                  <div className="upload-image">
                    <button type="button" className="form-control" onClick={handleButtonClick}>Upload image</button>
                    <span className="drag">or drag a file</span>
                  </div>
                </div>
              </div>
              <div className="whitebox">
                <h6>Select A Plate</h6>
                <div className="imagebox" id="divPlateImage">
                  {/* Plate selection options */}
                </div>
              </div>
              <div className="save-share">
                <div className="download">
                  <a id="btnDownloadPreview" className="btn" href="javascript:void(0);">Download</a>
                  <a id="btnDownloadHD" className="btn btn-rev" href="javascript:void(0);">Download HD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="static-content-01">
        <div className="container">
          <div className="static-row">
            <div className="static-img">
              <img src="static/images/design_templates/all_templates/next/recipe/recipe-maker.jpg" alt="Recipe design templates" />
            </div>
            <div className="static-content">
              <h2>Design beautiful recipe cards online</h2>
              <p>When you try our online recipe card templates, your food shots will reach a whole new level of yummy. Take a photo and simply upload it to watch our AI automatically give you a wide selection of creative plates and backgrounds to choose from. If you are a food blogger, social media manager, or just an enthusiast of great food photography, our foodie design templates are for you!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Recipephotomaker