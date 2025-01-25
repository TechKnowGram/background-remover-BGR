import React from 'react'
import { useNavigate } from 'react-router-dom';

const Personaluse = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/upload');
  };

  return (
    <div>
      <section className="static-banner">
        <div className="container">
          <div className="heading-aside">
            <h1>
              <span>for Personal use</span>
              Design high quality graphics - <strong>like a Pro!</strong>
            </h1>
            <div className="upload">
              <button type="button" className="upload-photo upload-image-file-btn" onClick={handleButtonClick}>
                <i className="fa fa-picture-o" />
                Upload File
              </button>
              <p>or drag and drop images<small>Paste image or Ctrl + V</small></p>
            </div>
          </div>
          <div className="image-aside">
            <img src="static/images/use-cases/image-1.svg" alt="Image" className="bg" />
            <img src="static/images/use-cases/personal-top-image.png" alt="Image Clean Background" />
          </div>
        </div>
      </section>

      <section className="static-content-01">
        <div className="container">
          {/* Content sections */}
        </div>
      </section>

      <section className="slz-frag-try">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h2>Remove image background automatically</h2>
              <h6>Upload image and get a clear transparent background</h6>
            </div>
            <div className="col-lg-7">
              <div className="upload">
                <button type="button" className="upload-photo upload-image-file-btn" onClick={handleButtonClick}>
                  <i className="fa fa-picture-o" />
                  Upload File
                </button>
                <p>or drag and drop images<small>Paste image or Ctrl + V</small></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="newsletter">
        {/* Newsletter section */}
      </div>
    </div>
  )
}

export default Personaluse