import React from 'react'
import { useNavigate } from 'react-router-dom';

const Advertising = () => {
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
              <span>for Advertising</span>
              Captivate your audience with eye catching visual content
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
            <img src="static/images/use-cases/advertiseing-top-image.png" alt="Best Pictures for Advertising by BGR" />
          </div>
        </div>
      </section>

      <section className="static-content-01">
        <div className="container">
          {/* Content sections */}
          {/* You can keep the existing static content sections here */}
        </div>
      </section>

      <section className="trustedBy companies blackTheme">
        <div className="wrap">
          <div className="marquee">
            {/* Trusted by companies logos */}
            {/* You can keep the existing marquee content here */}
          </div>
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
        <div className="container">
          <div className="box">
            <h2>Get updates</h2>
            <h6>Sign up to our newsletter to receive information about new products, special offers and updates.</h6>
            {/* Newsletter form can be added here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advertising