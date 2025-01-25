import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Cardealerships = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/upload');
  };

  return (
    <div>
      <div className="main-container">
        <section className="static-banner">
          <div className="container">
            <div className="heading-aside">
              <h1>
                <span>for Car Dealerships</span>
                Optimize your car photos to sell faster
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
              <img src="static/images/use-cases/car-dealership-top-image.png" alt="Car Photography with " />
            </div>
          </div>
        </section>
        
        <section className="static-content-01">
          <div className="container">
            <div className="static-row">
              <div className="static-img">
                <div className="twentytwenty-container basic" data-orientation="horizontal">
                  <img src="static/images/sample/png/demo-006.jpg" alt="Automobile Photography by " /> 
                  <img src="static/images/sample/jpg/demo-006.jpg" alt="Automobile Photography by " /> 
                </div>
              </div>
              <div className="static-content">
                <h2>Automated removal of backgrounds</h2>
                <p>Neutral-toned car photos sell better. Preparing them was once a two-day process. That's
                  not the case any longer!</p>
                <p>BGR provides high-quality cuts for classified ads in less than 5 seconds, 100%
                  automatically. It's free to start.</p>
                <Link to="/upload" className="button">Try it yourself<i className="fa fa-angle-double-right" /></Link>
              </div>
            </div>
            
            {/* Additional static rows can be added here following the same structure */}
            
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
    </div>
  )
}

export default Cardealerships