
import React from 'react'

function Api() {
  return (
    <div className="api-integration">
      <div className="container">
        <div className="caption">
          <h1>Background Removal API</h1>
          <h4>Remove image background with just a single API call</h4>
          <figure>
            <img src="static/images/gif/EasyAPIIntegration.gif" alt="API Integration Demo" />
          </figure>
          <div className="main-api--text">
            curl -H 'API-KEY: YOUR_BGR_API_KEY'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;-F 'source_image_file=@source_image_path'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;-f https://api./v2.0/remove_image_background <br />
            &nbsp;&nbsp;&nbsp;&nbsp;-o output.png
          </div>
          <a href="login" className="btn my-4 check_click" r_url="/api">Get API Key</a>
          <p>Our AI will remove the background from any image that has a clear foreground and background.
            (tested with human, cars, animals, &amp; products)</p>
        </div>
      </div>
      
      <section className="section started">
        <div className="container">
          <h2 className="text-center">Check out our sample code</h2>
          <h4 className="text-center">Remove background from image file</h4>
          
          {/* Code samples and API documentation can be added here */}
          
          <div className="output-format">
            <h3>API Rate Limit</h3>
            <h5>You can instantly process up to 500 images per minute via the API, depending on the input image resolution.</h5>
            {/* Rate limit table can be added here */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Api

