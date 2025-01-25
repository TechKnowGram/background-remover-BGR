import React from 'react'

function Unlimitedcutouts() {
  return (
    <div>
      <div className="main-container">
        <section className="unlimitedBgRemover">
          <div className="container">
            <h2>Unlock Limitless Creativity with BGR: Where Images Break Free!</h2>
            <div className="wrap">
              <aside>
                <img src="static/images/unlimited/unlimited-onprem.jpg" alt="unlimited-onprem.jpg" />
                <div className="content">
                  <h4>On-Prem REST API</h4>
                  <h6>Process unlimited number of images without any restriction from your own server.</h6>
                  <ul>
                    <li>Unlimited image processing</li>
                    <li>Private &amp; Secure</li>
                    <li>Completely White label</li>
                    <li>High performance</li>
                  </ul>
                  <a href="onpremise" className="btn">Learn more</a>
                </div>
              </aside>
              <aside>
                <img src="static/images/unlimited/unlimited-infinity.jpg" alt="unlimited-infinity.jpg" />
                <div className="content">
                  <h4>Infinity Pro</h4>
                  <h6>Unlimited background remover desktop app for Windows Mac &amp; Linux.</h6>
                  <ul className="keyFeatures">
                    <li>Process unlimited images</li>
                    <li>HD cutouts upto 5mp</li>
                    <li>Add custom background color or image</li>
                  </ul>
                  <a href="upload" className="btn animate">
                    Try now
                    <span className="gradient" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Unlimitedcutouts