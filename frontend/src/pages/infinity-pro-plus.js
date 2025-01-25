import React from 'react'

function Infinityproplus() {
  return (
    <div className="main-container">
      <section className="slz-infinity-03">
        <div className="wrap">
          <h1>Unlimited background remover desktop app for <span>Windows &amp; Linux</span></h1>
          <p>Get ready to 10X your business by automating tedious tasks. Download BGR infinity today and
            remove unlimited backgrounds.</p>
          <div className="buttons">
            <a href="javascript:void(0);" className="btn requestDemo">Schedule a Demo</a>
          </div>
          <video loop preload="false" autoPlay controls muted poster="static/images/background-remover-app/desktop-app.png">
            <source src="static/images/video/infinity-video.mp4" />
          </video>
        </div>
        <div className="deepBg" />
      </section>
      <section className="slz-infinity-06">
        <div className="container">
          <h2>Explore the power of BGR Infinity</h2>
          <ul>
            <li>
              <img src="static/images/infinity-app/pro-feature-01.svg" alt="Remove unlimited background" />
              <h5>Remove unlimited background</h5>
              <p>Seamlessly remove backgrounds, enhance images, and transform your visuals with unparalleled efficiency.</p>
            </li>
            <li>
              <img src="static/images/infinity-app/pro-feature-02.svg" alt="4k cut out" />
              <h5>4k cut out</h5>
              <p>Elevate your projects with crisp, clear cutouts that enhance the impact of your images.</p>
            </li>
            <li>
              <img src="static/images/infinity-app/pro-feature-03.svg" alt="Complete offline process" />
              <h5>Complete offline process</h5>
              <p>Enjoy full control over your image editing workflow, even being offline.</p>
            </li>
            {/* Add more features as needed */}
          </ul>
        </div>
      </section>
      <section className="slz-infinity-05">
        <div className="container">
          <h2>System Requirements</h2>
          <span className="subheading">The following hardware is recommended.</span>
          <ul>
            <li>
              <figure>
                <img src="static/images/infinity-app/icon-processor.png" alt="BGR infinity system processor" />
              </figure>
              <span>Processor</span>
              <p>Core i3 processor equivalent or higher</p>
            </li>
            <li>
              <figure>
                <img src="static/images/infinity-app/icon-ram.png" alt="BGR infinity system RAM" />
              </figure>
              <span>Memory</span>
              <p>8 GB (Recommended 16 GB or above)</p>
            </li>
            <li>
              <figure>
                <img src="static/images/infinity-app/icon-gpu.png" alt="BGR infinity system GPU" />
              </figure>
              <span>GPU <span>(Highly recommended)</span></span>
              <p>4 GB of dedicated VRAM with required drivers installed</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="onprem-sec-04 bg-light">
        <div className="container">
          <h2 className="text-center">Schedule a demo</h2>
          <div className="row align-items-center justify-content-between mt-5">
            <div className="col-lg-5">
              <h2><sup>$</sup>8000<span> /year</span></h2>
              <h6>All plans include</h6>
              <ul className="mt-4">
                <li>4K quality cutout</li>
                <li>Works 100% Offline</li>
                <li>Batch processing</li>
                <li>Connect multiple devices at the same time</li>
                <li>Custom integrations and development</li>
              </ul>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="calendly-inline-widget" data-url="https://calendly.com/support-1169/BGR-infinity-pro-plus" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Infinityproplus;