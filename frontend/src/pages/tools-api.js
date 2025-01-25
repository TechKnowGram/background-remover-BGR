import React from 'react'

function Toolsapi() {
  return (
    <div className="main-container">
      <div className="plugins-api">
        <div className="container">
          <h1 className="text-center mt-5 ">Tools &amp; API</h1>
          <h5 className="text-center subheading">
            Automate your workflow with BGR
          </h5>
          <ul>
            <li>
              <a className="block" href="api">
                <img src="static/images/api.png" alt="api.svg" />
                <h5>Fast background removal API</h5>
                <span>
                  Read API Doc
                  <i className="fa fa-arrow-right" />
                </span>
              </a>
            </li>
            <li>
              <a className="block" href="background-remover-app">
                <img src="static/images/window-mac-linux.png" alt="api.svg" />
                <h5>Desktop application for windows / mac / linux</h5>
                <span>
                  Learn More
                  <i className="fa fa-arrow-right" />
                </span>
              </a>
            </li>
            <li>
              <a className="block" href="photoshop">
                <img src="static/images/photoshop-plugin.svg" alt="api.svg" />
                <h5>BGR for Photoshop</h5>
                <p>From CC 2018 and above</p>
                <span>
                  Learn More
                  <i className="fa fa-arrow-right" />
                </span>
              </a>
            </li>
            <li>
              <a className="block" href="onpremise">
                <img src="static/images/onpremise/flexible.svg" alt="api.svg" />
                <h5>BGR On Premise</h5>
                <span>
                  Learn More
                  <i className="fa fa-arrow-right" />
                </span>
              </a>
            </li>
            <li>
              <a
                className="block"
                href="https://wordpress.org/plugins/BGR-background-changer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="static/images/woocommerce.svg" alt="api.svg" />
                <h5>WooCommerce Plugin</h5>
                <span>
                  Learn More
                  <i className="fa fa-arrow-right" />
                </span>
              </a>
            </li>
            <li>
              <a className="block" href="infinity-app">
                <img
                  src="static/images/infinity-app/infinity-logo-icon.png"
                  alt="api.svg"
                />
                <h5>BGR Infinity</h5>
                <span>
                  Learn More
                  <i className="fa fa-arrow-right" />
                </span>
              </a>
            </li>
            {/* Add more list items for other tools as needed */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Toolsapi;