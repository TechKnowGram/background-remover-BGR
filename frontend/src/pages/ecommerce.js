import React from 'react'
import { useNavigate } from 'react-router-dom';

const Ecommerce = () => {
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
              <span>for E-Commerce</span>
              Increase your online sales with optimized images
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
            <img src="static/images/use-cases/ecommerce-top-image.png" alt="BGR's Photography For Ecommerce" />
          </div>
        </div>
      </section>

      <section className="static-content-01">
        <div className="container">
          <div className="static-row">
            <div className="static-img">
              <div className="twentytwenty-container basic" data-orientation="horizontal">
                <img src="static/images/sample/png/demo-002.jpg" alt="Ecommerce Photo Background" /> 
                <img src="static/images/sample/jpg/demo-002.jpg" alt="Ecommerce Photo Background" /> 
              </div>
            </div>
            <div className="static-content">
              <h2>Automatically remove image backgrounds in seconds</h2>
              <p>A picture is worth a thousand words, but a perfectly presented product photo is worth
                thousands of sales. But creating a professional product photo isn't as simple as pointing
                and shooting. Even with the most professional studio environments, creating clear, eye-catching
                photos of your products with a white background is really challenging.</p>
              <p>BGR will help you to save your valuable time and money to make your products shine
                against any clear photo background. Our AI does all the hard work for you so you can relax and
                focus on other important things in your business.</p>
            </div>
          </div>
          
          {/* Additional static-row sections can be added here */}

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

export default Ecommerce