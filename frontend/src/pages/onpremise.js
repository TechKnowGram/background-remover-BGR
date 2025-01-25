import React from 'react'

function Onpremise() {
  return (
    <div className="main-container">
      <section className="onprem-sec-01">
        <div className="wrap">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1">
              <h1 className="text-white mb-3">On-Premise Background Removal REST API</h1>
              <h5 className="text-white">BGR On-Premise is an AI-powered image and background removal tool
                designed to be hosted on your own server infrastructure, allowing you to process
                unlimited images without limitations.</h5>
              <ul>
                <li>Unlimited image processing</li>
                <li>Private &amp; Secure</li>
                <li>Completely White label</li>
                <li>High performance</li>
              </ul>
              <a href="javascript:void(0);" className="btn requestDemo">Schedule a demo</a>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
              <img src="static/images/onpremise/hero-img.png" alt="hero-img" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional sections can be added here */}

    </div>
  )
}

export default Onpremise