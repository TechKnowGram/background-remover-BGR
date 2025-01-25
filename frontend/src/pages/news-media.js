import React from 'react'
import { useNavigate } from 'react-router-dom';

const Newsmedia = () => {
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
              <span>for News &amp; Media</span>
              Publish newsworthy images instantly
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
            <img src="static/images/use-cases/media-top-image.png" alt="Background changing Tool" />
          </div>
        </div>
      </section>

      <section className="static-content-01">
        <div className="container">
          <div className="static-row">
            <div className="static-img">
              <div className="twentytwenty-container basic" data-orientation="horizontal">
                <img src="static/images/sample/png/demo-004.jpg" alt="Photo Editing for Media Professionals" /> 
                <img src="static/images/sample/jpg/demo-004.jpg" alt="Photo Editing for Media Professionals" /> 
              </div>
            </div>
            <div className="static-content">
              <h2>Automatic background removal</h2>
              <p>Using the right pictures can make or ruin a news story.</p>
              <p>Complex picture preparation is becoming more difficult as news and media cycles speed up.</p>
              <p>Introducing BGR's sophisticated artificial intelligence (AI), which removes subjects
                in photos from their backgrounds automatically!</p>
              <p>Editors and designers of visual content are now free to try new things and come up with
                designs that truly stand out for viewers.</p>
            </div>
          </div>
          
          {/* Additional static-row sections can be added here */}

        </div>
      </section>

      <section className="trustedBy companies blackTheme">
        <div className="wrap">
          <div className="marquee">
            <ul className="marquee-content">
              {/* Trusted by company logos */}
            </ul>
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
    </div>
  )
}

export default Newsmedia