import React from 'react'

function Backgroundremoverapp() {
  return (
    <div className="main-container">
      <section className="slz-case-01">
        <div className="wrap">
          <h1>Background Remover App for <span>Windows / Mac / Linux</span></h1>
          <span className="subheading">Remove the backgrounds from as many files as you like by dragging them into the application window. As soon as you click "Start" you'll see the images being cut out automatically.</span>
          <a href="javascript:void(0);" className="btn" id="download-desktop-app">Download for Free</a>
          <video loop preload="false" autoPlay controls muted poster="static/images/background-remover-app/desktop-app.png">
            <source src="static/images/video/desktop-app.mp4" />
            <source src="static/images/video/desktop-app.ogg" />
          </video>
        </div>
      </section>
      <section className="slz-case-02 bg-light">
        <div className="container">
          <h2>Advantages of using the background eraser for PC</h2>
          <p>Our desktop app is compatible with Windows, Mac, and Linux operating systems and can be downloaded instantly.</p>
          <p>Take a look at all the benefits:</p>
          <ul>
            <li>
              <figure><img src="static/images/tools-api/icon-result.png" alt="icon-result" /></figure>
              <div className="slz-text">
                <h6>Remarkable results</h6>
                <span>Our computer vision algorithms, trained using the latest trends in AI technology, can handle any foreground subject, such as people, animals, cars, and products with exceptional accuracy.</span>
              </div>
            </li>
            <li>
              <figure><img src="static/images/tools-api/icon-speed.png" alt="icon-speed" /></figure>
              <div className="slz-text">
                <h6>Fast</h6>
                <span>Our app quickly and efficiently removes backgrounds from your images in just a few seconds, saving you an incredible amount of time and effort.</span>
              </div>
            </li>
            <li>
              <figure><img src="static/images/tools-api/icon-images.png" alt="icon-images" /></figure>
              <div className="slz-text">
                <h6>Bulk capabilities</h6>
                <span>Easily remove the backgrounds from as many files as you want by dragging them into the application window. Just click "Start" and watch as each image gets cut out perfectly, 100% automatically.</span>
              </div>
            </li>
            <li>
              <figure><img src="static/images/tools-api/icon-requirement.png" alt="icon-requirement" /></figure>
              <div className="slz-text">
                <h6>Customize your output</h6>
                <span>Choose from a transparent or colored background, or select a small or large image size to suit your needs. With just a few clicks, you can have these changes automatically apply to all your images.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="slz-case-03">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Astonishing Results</h2>
              <p>Get precise cut-outs powered by artificial intelligence that can be used to edit product photos, portraits, or anything else. Even hair and other difficult conditions, such as curved edges, are handled perfectly.</p>
              <a href="sample" className="button">See it yourself<i className="fa fa-angle-double-right" /></a>
            </div>
            <div className="col-lg-6">
              <img src="static/images/tools-api/stuning-result-2.png" alt="Best app to remove background from photo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Backgroundremoverapp