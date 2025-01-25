import React from 'react'
import { useNavigate } from 'react-router-dom';

const Carimageeditor = () => {
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
          <h1>Automatic Car Photo Editor</h1>
          <h5>Create high quality professional car photos for free</h5>
          <div className="template-editer">
            <div className="editing-output" id="canvasContainer">
              <img src id="mainImageElement" className="d-block" />
            </div>
            <div className="editing-option">
              <div className="whitebox templateImageElements" id="templateImageElements">
                <h6>Upload car image</h6>
                <div className="collapse dont-collapse-lg" id="box2">
                  <div className="optionsBox">
                    <div className="img-thumbnails">
                      <img id="thumb_placeholder" src="static/images/design_templates/car_design_template/placeholder.png" alt="car branding design templates" />
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="static-content-01">
        <div className="container">
          <div className="static-row">
            <div className="static-img">
              <img src="static/images/design_templates/all_templates/next/car/car-photo-editing.jpg" alt="Design a car template with BGR" />
            </div>
            <div className="static-content">
              <h2>Create high quality designs for all your car photos</h2>
              <p>No need to pay for manual image editing services, our automatic design templates allow you to create stunning car ads in seconds! Ideal for automobiles, trucks, snowmobiles, all terrain vehicles, motorcycles and more.. Just upload your photo and choose from our colored backgrounds or optimized designs with perfect positioning. Insert your logo and you're done. There has never been an easier way to create ads and designs to grow your vehicle business!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Carimageeditor;