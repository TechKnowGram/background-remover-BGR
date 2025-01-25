import React from 'react'

function Enterprise() {
  return (
    <div>
      <div className="main-container">
        <section className="enterprise-banner">
          <div className="container">
            <div className="static-row row">
              <div className="col-xl-7 col-md-6 banner-text">
                <h1>
                  <span>BGR Enterprise Solutions</span>
                  Remove Image Backgrounds at Scale
                </h1>
                <p>Our enterprise-grade solutions help you speed up your photo-editing process, saving you time and money.</p>
                <a href="enterprise/contact" className="btn">Request a demo</a>
              </div>
              <div className="col-xl-5 col-md-6 banner-img">
                <img src="static/images/enterprise/banner-image.svg" alt="Enterprise banner image" />
              </div>
            </div>
          </div>
        </section>
        <section className="enterprise-section-02">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-4 col-md-5 image">
                <img src="static/images/enterprise/automated-image-processing.svg" alt="AI automated image processing" />
              </div>
              <div className="col-md-7">
                <h2>Streamline your operation with automated image processing</h2>
                <p>Open up a whole new world of creative possibilities with our versatile image cutout solutions that are 100% automatic and adapt to your workflow online or offline.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="enterprise-section-03">
          <div className="container">
            <h2>Enterprise benefits</h2>
            <ul>
              <li>
                <img src="static/images/enterprise/icon-consultations.svg" alt="Consultations icon" />
                <h5>Free Consultations</h5>
              </li>
              <li>
                <img src="static/images/enterprise/icon-api.svg" alt="Seamless API integration icon" />
                <h5>Seamless API Integration</h5>
              </li>
              <li>
                <img src="static/images/enterprise/icon-security.svg" alt="Security icon" />
                <h5>Enterprise Grade Security</h5>
              </li>
              <li>
                <img src="static/images/enterprise/icon-account-manager.svg" alt="Dedicated account icon" />
                <h5>Dedicated Account Manager</h5>
              </li>
              <li>
                <img src="static/images/enterprise/icon-uptime.svg" alt="Uptime icon" />
                <h5>99.9% uptime</h5>
              </li>
              <li>
                <img src="static/images/enterprise/icon-quality.svg" alt="Quality icon" />
                <h5>Quality Guarantee</h5>
              </li>
              <li>
                <img src="static/images/enterprise/icon-enterprise-plans.svg" alt="Customized plans icon" />
                <h5>Customized Enterprise Plans</h5>
              </li>
              <li>
                <img src="static/images/enterprise/multiple-API-keys.svg" alt="Customized plans icon" />
                <h5>Multiple API keys</h5>
              </li>
              <li>
                <img src="static/images/enterprise/overdraft.svg" alt="Customized plans icon" />
                <h5>Overdraft protection</h5>
              </li>
            </ul>
          </div>
        </section>
        <section className="trustedBy companies blackTheme">
          {/* Trusted by companies section */}
        </section>
        <section className="achivementsStatus">
          <div className="container">
            <ul>
              <li>
                <span>1M+</span>
                <h6>users over the world</h6>
              </li>
              <li>
                <span>10M+</span>
                <h6>backgrounds removed every month</h6>
              </li>
              <li>
                <span>100%</span>
                <h6>GDPR complaint</h6>
              </li>
            </ul>
          </div>
        </section>
        <section className="get-in-touch">
          <div className="container">
            <h2 className="text-white mb-3">Request a Demo</h2>
            <p className="text-white">BGR integrates into every part of your company that interacts with images — including marketing, design and more. Whether you have a question about one of our products or need help integrating it into your company's workflow, we're here to help. Everything is covered, from installation to benefits and beyond.</p>
            <a className="btn" href="enterprise/contact">Request a demo</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Enterprise;