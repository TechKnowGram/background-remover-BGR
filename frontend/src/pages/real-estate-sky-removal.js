import React from 'react';
import { useNavigate } from 'react-router-dom';

const Realestateskyremoval = () => {
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
          <h1>Real Estate Sky Removal</h1>
          <h5>Turn any cloudy sky to a blue sky for free</h5>
          <div className="template-editer">
            <div className="editing-output" id="canvasContainer">
              <img src="" id="mainImageElement" className="d-block" />
            </div>
            <div className="editing-option">
              <div className="whitebox templateImageElements" id="templateImageElements">
                <h6>Upload Image</h6>
                <div className="optionsBox">
                  <div className="img-thumbnails">
                    <img id="thumb_placeholder" src="static/images/design_templates/real_estate_template/placeholder.png" alt="" />
                  </div>
                  <div className="upload-image">
                    <button type="button" className="upload-photo upload-image-file-btn" onClick={handleButtonClick}>
                      <i className="fa fa-picture-o" />
                      Upload File
                    </button>
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
      <section className="static-content-01">
        <div className="container">
          <div className="static-row">
            <div className="static-img">
              <img src="static/images/design_templates/all_templates/next/real-estate/enhance-real-estate.jpg" alt="Sky removal for real estate images" />
            </div>
            <div className="static-content">
              <h2>Improve real estate photos quickly</h2>
              <p>When it comes to buying something as important as real estate, the quality of images must do justice to the actual property. Boring shots with a gloomy sky can really turn things off for a buyer. On the contrary, a shiny bright sky can convey positive emotion and ignite the imagination of living there. Our new AI design templates allow you to swap out that somber mood to something more pleasing like a sunny blue sky in just a few seconds.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realestateskyremoval;