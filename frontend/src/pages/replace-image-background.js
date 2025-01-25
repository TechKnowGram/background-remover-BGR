import React from 'react'
import { useNavigate } from 'react-router-dom';

function Replaceib() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/upload');
  };

  return (
    <div>
      <section className="photo-optimizer">
        <div className="container">
          <div className="back">
            <a href="design-maker">
              <img src="static/images/design_templates/all_templates/back.svg" alt="Back" />
              Back to Design Maker
            </a>
          </div>
          <h1>Replace Image Background</h1>
          <h5>Change any image background for free</h5>
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
                    <img id="thumb_placeholder" src="static/images/design_templates/change_image_background/placeholder-small.png" alt="" />
                  </div>
                  <div className="upload-image">
                    <button type="button" className="form-control" onClick={handleButtonClick}>Upload image</button>
                    <span className="drag">or drag a file</span>
                  </div>
                </div>
              </div>
              <div className="save-share">
                <div className="download">
                  <a id="btnDownloadPreview" className="btn disable" href="javascript:void(0);">Download</a>
                  <a id="btnDownloadHD" className="btn btn-rev disable" href="javascript:void(0);">
                    Download HD
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Replaceib;