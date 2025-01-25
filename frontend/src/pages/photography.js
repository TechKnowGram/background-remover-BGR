import React from 'react'
import { useNavigate } from 'react-router-dom';

const Photography = () => {
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
              <span>for Photographers</span>
              Shoot more photos and stop wasting time picking pixels
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
            <img src="static/images/use-cases/photography-top-image.png" alt="Learn Product Photography" />
          </div>
        </div>
      </section>

      <section className="static-content-01">
        <div className="container">
          {/* Content sections */}
          <div className="static-row">
            <div className="static-img">
              {/* Image content */}
            </div>
            <div className="static-content">
              <h2>Automatically remove backgrounds</h2>
              <p>For any professional photographer, removing backgrounds has always been a familiar but a very time consuming task.</p>
              <p>Why waste your time picking pixels when our artificial intelligence can help you complete the task in just 5 seconds or less?</p>
              <p>Now spend your time getting the perfect shots and leave all the repetitive work to us.</p>
              <a href="upload" className="button">Try it now<i className="fa fa-angle-double-right" /></a>
            </div>
          </div>
          {/* More content rows can be added here */}
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
    </div>
  )
}

export default Photography