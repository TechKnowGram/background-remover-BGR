import React from 'react'

function Photoshop() {
  return (
    <div className="main-container">
      <section className="slz-case-01">
        <div className="wrap">
          <h1>BGR for Photoshop</h1>
          <span className="subheading">Remove Background in Photoshop Automatically with a Single Click</span>
          <a href="https://exchange.adobe.com/creativecloud.details.106524.BGR-for-adobe-photoshop" target="_blank" className="btn">Download for Free on Adobe Exchange</a>
          <img src="static/images/photoshop/accelerate-orkflow-photoshop.gif" alt="accelerate-workflow-photoshop" />
        </div>
      </section>
      
      <section className="slz-case-02 bg-light">
        <div className="container">
          <h2>Why you should use the BGR plugin in Photoshop</h2>
          <p>There are various advantages to integrating the BGR Photoshop plugin into your everyday workflow:</p>
          <ul>
            <li>
              <h6>Increased efficiency</h6>
              <p>Free yourself from the burden of monotonous manual work and focus on unleashing your creativity.</p>
            </li>
            <li>
              <h6>Impressive results</h6>
              <p>Optimize your workflow to save time without compromising quality, even in challenging areas like hair.</p>
            </li>
            <li>
              <h6>Effortless layer mask editing</h6>
              <p>Advance your layer masking skills with the added ease of deleting or restoring portions of an image with a single click.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="slz-case-03">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Ultra-Accurate cutouts</h2>
              <p>BGR uses artificial intelligence to provide high-quality, accurate cutouts of all natural and fine image elements with ease. No manual intervention needed.</p>
              <a href="sample" className="button">See it for yourself<i className="fa fa-angle-double-right" /></a>
            </div>
            <div className="col-lg-6">
              <img src="static/images/photoshop/stuning-result-8.jpg" alt="stunning-result" />
            </div>
          </div>
        </div>
      </section>

      <section className="slz-case-04 bg-light">
        <div className="container">
          <h2>How photoshop extension works?</h2>
          <span className="subheading">Remove image backgrounds in a flash with BGR. All you need to do is follow a few easy steps.</span>
          <ul>
            <li>
              <h6><a href="signup">Sign Up</a> at BGR</h6>
            </li>
            <li>
              <h6><a href="#">Download</a> the BGR extension</h6>
            </li>
            <li>
              <h6>Enter your <a href="api">API Key</a> in the extension</h6>
            </li>
          </ul>
          <p>Or you can go through the <a href="/help/adobe-photoshop/how-to-use-BGR-for-adobe-photoshop" target="_blank">Installation instructions and help</a> to understand better.</p>
        </div>
      </section>
    </div>
  )
}

export default Photoshop;