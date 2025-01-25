import React from 'react'

function Infinityapp() {
  return (
    <div className="main-container">
      <section className="infinity-sec-01">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <video loop preload="false" autoPlay tabIndex={0} playsInline muted poster="static/images/infinity-app/infinity-banner-poster.jpg">
                <source src="static/images/infinity-app/infinity-banner-video.mp4" />
              </video>
              <h1>Remove background from <span>unlimited images</span></h1>
            </div>
            <div className="col-lg-5">
              <h4>Background remover app</h4>
              <span className="subText">for Windows / Mac / Linux</span>
              <ul className="keyFeatures">
                <li>Process unlimited images</li>
                <li>HD cutouts upto 5mp</li>
                <li>Add custom background color or image</li>
              </ul>
              <h6>
                Try BGR Infinity Desktop App Today!
                <img src="static/images/infinity-app/arrow.png" alt="arrow" />
              </h6>
              <div className="dropdown infinityAppDropdown">
                <button type="button" className="btn" data-toggle="modal" data-target="#loginPopupModal">
                  Download now
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li>
                    <button className="dropdown-item btnInfinityAppWindows" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#FFFFFF" className="bi bi-windows" viewBox="0 0 16 16">
                        <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z" />
                      </svg>
                      <span>For Windows</span>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item btnInfinityAppMAC" type="button">
                      <img src="static/images/infinity-app/icon-mac.svg" alt="icon-mac" />
                      <span>For Mac</span>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item btnInfinityAppLinux" type="button">
                      <img src="static/images/infinity-app/icon-linux.svg" alt="icon-linux" />
                      <span>For Linux</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other sections can be added here */}

    </div>
  )
}

export default Infinityapp;