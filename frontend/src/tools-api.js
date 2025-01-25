import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToolsAPI from './ToolsAPI';  // Import your ToolsAPI component
import './App.css';


const ToolsAPI = () => {
  return (
    <>
  {/* Header */}
  <meta charSet="utf-8" />
  <meta name="author" content="BGR" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
  />
  <meta
    name="csrf-token"
    content="ImM3ZmU1NmE4NTE1NjAzMmQ1MDlhNjkwYjdmNzMyZmE4MmY0N2YyOWIi.ZrHeLw.emPBPt2sKzm7YE6LtYBsdXaoj2I"
  />
  <title className="pageTitle">Plugins &amp; API – </title>
  <meta
    name="description"
    content="Use our plugins & API to integrate  into your company's workflow. Save time & costs by removing image backgrounds faster. Try it now."
  />
  <meta property="og:title" content="Plugins & API – " />
  <meta
    property="og:image"
    itemProp="image"
    content="https://www./static/images/remove_image_background.jpg"
  />
  <meta property="og:url" content="https://www./tools-api" />
  <meta property="og:site_name" content="" />
  <meta
    property="og:description"
    content="Use our plugins & API to integrate  into your company's workflow. Save time & costs by removing image backgrounds faster. Try it now."
  />
  <meta
    property="twitter:image"
    content="https://www./static/images/remove_image_background.jpg"
  />
  <meta property="twitter:title" content="Plugins & API – " />
  <meta property="twitter:url" content="https://www./tools-api" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="tools-api.html" />
  <link rel="shortcut icon" href="static/favicon/favicon.ico" />
  <link
    rel="apple-touch-icon"
    sizes="57x57"
    href="static/favicon/apple-icon-57x57.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="60x60"
    href="static/favicon/apple-icon-60x60.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="static/favicon/apple-icon-72x72.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="static/favicon/apple-icon-76x76.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="static/favicon/apple-icon-114x114.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="120x120"
    href="static/favicon/apple-icon-120x120.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="152x152"
    href="static/favicon/apple-icon-152x152.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="static/favicon/apple-icon-180x180.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="static/favicon/android-icon-192x192.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="static/favicon/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="96x96"
    href="static/favicon/favicon-96x96.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="static/favicon/favicon-16x16.png"
  />
  <link rel="manifest" href="static/favicon/manifest.json" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
  <meta
    name="google-site-verification"
    content="uYZov76g-RvHAV17GFJCTeJN7PUh8nsZE6sxO1BwSTY"
  />
  <meta name="p:domain_verify" content="ac7dd844dcd33b5683ad714dd514c3f0" />
  <link rel="stylesheet" href="static/gen/packed.css?75046767" />
  <noscript>
    &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3TV9CT"
    height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  <nav className="navbar navbar-expand-lg" id="header">
    <input
      type="hidden"
      id="cookies1"
      defaultValue="We use cookies, by continuing to use this site you accept our use of cookies"
    />
    <input
      type="hidden"
      id="cookies2"
      defaultValue="To learn more visit our "
    />
    <input type="hidden" id="cookies3" defaultValue="privacy policy" />
    <input
      type="hidden"
      id="cookies4"
      defaultValue="We use cookies, by continuing to use this site you accept our use of cookies. To learn more, visit our "
    />
    <input type="hidden" id="_originalImage" defaultValue="Before" />
    <input type="hidden" id="_removeBackground" defaultValue="After" />
    <input type="hidden" id="_edit" defaultValue="Edit" />
    <input type="hidden" id="_editPreview" defaultValue="Edit preview" />
    <input type="hidden" id="_editHDImage" defaultValue="Edit HD image" />
    <input type="hidden" id="_download" defaultValue="Download" />
    <input type="hidden" id="_previewSize" defaultValue="Preview size" />
    <input type="hidden" id="_fullSize" defaultValue="Full size" />
    <input type="hidden" id="_downloadHD" defaultValue="Download HD" />
    <input type="hidden" id="_tryBGRInfinity" defaultValue="Try BGR Infinity" />
    <input type="hidden" id="_rateThisResult" defaultValue="Rate this result" />
    <input
      type="hidden"
      id="_thankYou"
      defaultValue="Thank you for your feedback"
    />
    <input
      type="hidden"
      id="_unlimitedCutouts"
      defaultValue="Unlimited Cutouts"
    />
    <input type="hidden" id="_need" defaultValue="Need" />
    <input type="hidden" id="_processing" defaultValue="Processing..." />
    <input type="hidden" id="_close" defaultValue="Close" />
    <div className="full-wrapper relative d-flex justify-content-between align-items-center">
      <a className="navbar-brand" href="index.html">
        <img src="static/images/logo.svg" alt="BGR logo" />
      </a>
      <div
        className="navbar-collapse collapse mobileCollapseDiv"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="menu-item-has-children">
            <a
              className="menu"
              id="menu-use-cases"
              data-toggle="collapse"
              href="#useCases"
              aria-expanded="false"
              aria-controls="useCases"
            >
              Use cases
            </a>
            <div
              className="collapse subNav megamenu"
              id="useCases"
              data-parent="#header"
            >
              <ul className="col-50 p-4 mp-0">
                <li className="automations" id="menu_personal">
                  <a href="personal-use.html">
                    <img
                      src="static/images/icon-personal.svg"
                      alt="Personal use images"
                    />
                    <span>for Personal</span>
                  </a>
                </li>
                <li className="automations">
                  <a href="ecommerce.html">
                    <img
                      src="static/images/icon-ecommerce.svg"
                      alt="Ecommerce images"
                    />
                    <span>for Ecommerce</span>
                  </a>
                </li>
                <li className="automations">
                  <a href="photography.html">
                    <img
                      src="static/images/icon-photography.svg"
                      alt="photography images"
                    />
                    <span>for Photography</span>
                  </a>
                </li>
                <li className="automations">
                  <a href="news-media.html">
                    <img
                      src="static/images/icon-media.svg"
                      alt="News and media"
                    />
                    <span>for News &amp; Media</span>
                  </a>
                </li>
                <li className="automations">
                  <a href="advertising.html">
                    <img
                      src="static/images/icon-advertising.svg"
                      alt="Advertising images"
                    />
                    <span>for Advertising</span>
                  </a>
                </li>
                <li className="automations">
                  <a href="car-dealerships.html">
                    <img
                      src="static/images/icon-car-dealerships.svg"
                      alt="Car dealerships images"
                    />
                    <span>for Car dealerships</span>
                  </a>
                </li>
                <li className="automations">
                  <a href="developers.html">
                    <img
                      src="static/images/icon-developers.svg"
                      alt="Developers images"
                    />
                    <span>for Developers</span>
                  </a>
                </li>
                <li className="automations">
                  <a href="enterprise.html">
                    <img
                      src="static/images/icon-enterprise.svg"
                      alt="Developers images"
                    />
                    <span>for Enterprise</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="tools-api.html" title="">
              Tools &amp; API
            </a>
          </li>
          <li>
            <a href="unlimited-cutouts.html">Unlimited cutouts</a>
          </li>
          <li>
            <a href="pricing.html">Pricing</a>
          </li>
        </ul>
        <ul className="navber-links">
          <li className="login">
            <a href="signup.html">Log in / Sign up</a>
          </li>
        </ul>
      </div>
      <div className="right-header">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </div>
  </nav>
  <div className="header-height" />
  <div className="notification-alert" />
  <div className="main-container">
    <div className="plugins-api">
      <div className="container">
        <h1 className="text-center">Tools &amp; API</h1>
        <h5 className="text-center subheading">
          Automate your workflow with BGR
        </h5>
        <ul>
          <li>
            <a className="block" href="api.html" />
            <img src="static/images/api.png" alt="api.svg" />
            <h5>Fast background removal API</h5>
            <span>
              Read API Doc
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a className="block" href="background-remover-app.html" />
            <img src="static/images/window-mac-linux.png" alt="api.svg" />
            <h5>Desktop application for windows / mac / linux</h5>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a className="block" href="photoshop.html" />
            <img src="static/images/photoshop-plugin.svg" alt="api.svg" />
            <h5>BGR for Photoshop</h5>
            <p>From CC 2018 and above</p>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a className="block" href="onpremise.html" />
            <img src="static/images/onpremise/flexible.svg" alt="api.svg" />
            <h5>BGR On Premise</h5>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a
              className="block"
              href="https://wordpress.org/plugins/BGR-background-changer/"
              target="_blank"
              title=""
            />
            <img src="static/images/woocommerce.svg" alt="api.svg" />
            <h5>WooCommerce Plugin</h5>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a className="block" href="infinity-app.html" />
            <img
              src="static/images/infinity-app/infinity-logo-icon.png"
              alt="api.svg"
            />
            <h5>BGR Infinity</h5>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a
              className="block"
              href="https://www.figma.com/community/plugin/908415905821759633"
              target="_blank"
              title=""
            />
            <img src="static/images/figma.svg" alt="api.svg" />
            <h5>Figma Plugin</h5>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a
              className="block"
              href="https://github.com/BGRcom/BGR-sketch"
              target="_blank"
              title=""
            />
            <img src="static/images/sketch.svg" alt="api.svg" />
            <h5>Sketch Plugin</h5>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a
              className="block"
              href="https://play.google.com/store/apps/details?id=com.BGR"
              target="_blank"
              title=""
            />
            <img src="static/images/icon-android.svg" alt="api.svg" />
            <h5>Android App</h5>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a
              className="block"
              href="https://zapier.com/apps/BGR/integrations"
              target="_blank"
              title=""
            />
            <img src="static/images/icon-zapier.webp" alt="api.svg" />
            <h5>Connect over 2.000 apps with BGR</h5>
            <p>via Zapier</p>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <a className="block" href="https://editor./" target="_blank" />
            <img src="static/images/BGR-icon.svg" alt="api.svg" />
            <h5>BGR Editor</h5>
            <span>
              Learn More
              <i className="fa fa-arrow-right" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n    .cursor {\n        position: absolute;\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n        background-color: transparent;\n        border: 2px solid #222;\n        z-index: 6;\n        pointer-events: none;\n    }\n"
    }}
  />
  <div
    className="modal fade edit-image"
    id="edit_image"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content h-100">
        <div className="modal-body h-100">
          <div className="row m-0 h-100">
            <div className="prev_option">
              <div id="tabs">
                <ul>
                  <li className="background_div">
                    <a href="#background">Background</a>
                  </li>
                  <li className="erase_div">
                    <a href="#erase" id="erase_restore">
                      Paint/Erase
                    </a>
                  </li>
                </ul>
                <div id="background">
                  <span>blur</span>
                  <ul className="thumbnail">
                    <li>
                      <button className="blur_btn2" type="button" data-blur={5}>
                        <span
                          className="background-thumb"
                          style={{ filter: "blur(5px)" }}
                        />
                        <div className="foreground-thumbnail" />
                      </button>
                    </li>
                    <li>
                      <button className="blur_btn2" type="button" data-blur={2}>
                        <span
                          className="background-thumb"
                          style={{ filter: "blur(2px)" }}
                        />
                        <div className="foreground-thumbnail" />
                      </button>
                    </li>
                    <li>
                      <button className="blur_btn2" type="button" data-blur={1}>
                        <span
                          className="background-thumb"
                          style={{ filter: "blur(1px)" }}
                        />
                        <div className="foreground-thumbnail" />
                      </button>
                    </li>
                    <li>
                      <button className="blur_btn2" type="button" data-blur={0}>
                        <span
                          className="background-thumb"
                          style={{ filter: "blur(0px)" }}
                        />
                        <div className="foreground-thumbnail" />
                      </button>
                    </li>
                  </ul>
                  <div id="background-tabs" className="inside-tab">
                    <ul>
                      <li>
                        <a href="#photo">Select Image</a>
                      </li>
                      <li>
                        <a href="#color">Select Color</a>
                      </li>
                    </ul>
                    <div id="photo">
                      <span>Select Image</span>
                      <ul className="thumbnail image-options">
                        <li>
                          <input type="file" id="imgInp" />
                          <label>
                            <img
                              src="static/images/icon-upload.png"
                              alt="Upload an image"
                            />
                          </label>
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={1}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={2}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={3}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={4}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={5}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={6}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={7}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={8}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={9}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={10}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={11}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={12}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={13}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={14}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={15}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={16}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={17}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={18}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={19}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={20}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={21}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={22}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={23}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={24}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={25}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={26}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={27}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={28}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={29}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={30}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={31}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={32}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={33}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={34}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={35}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={36}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={37}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={38}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={39}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={40}
                          />
                        </li>
                        <li>
                          <button
                            className="btn_background_image"
                            type="button"
                            data-id={41}
                          />
                        </li>
                      </ul>
                    </div>
                    <div id="color">
                      <span>Choose color</span>
                      <ul className="thumbnail color-options">
                        <li>
                          <input type="text" id="colorpicker" />
                        </li>
                        <li>
                          <button
                            className="btn_bg_image_color"
                            type="button"
                            data-gradient="linear-gradient(to right, #dddddd, #000000)"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#000000"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#FFFFFF"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_image_color"
                            type="button"
                            data-gradient="linear-gradient(to right, #b9b400, #00920c)"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#ff9800"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#cddc39"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#30b5bb"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#9c27b0"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#e0327a"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#8bc34a"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#34da48"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_image_color"
                            type="button"
                            data-gradient="linear-gradient(to right, #d8ff00, #001fff)"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#4c3ec1"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_image_color"
                            type="button"
                            data-gradient="linear-gradient(to right, #0de9ff, #4a1da2)"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#d8ff00"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_image_color"
                            type="button"
                            data-gradient="linear-gradient(to right, #b52b2b, #480d0d)"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#EEEEEE"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#f44336"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#673ab7"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#03a9f4"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#4caf50"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#ffeb3b"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#e91e63"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#3f51b5"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#00bcd4"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_image_color"
                            type="button"
                            data-gradient="linear-gradient(to right, #27a749, #d8ff00)"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#ffc107"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#f44336"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_image_color"
                            type="button"
                            data-gradient="linear-gradient(to right, #ffec0d, #6e3fff)"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#2196f3"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#009688"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_image_color"
                            type="button"
                            data-gradient="linear-gradient(to right, #0d36ff, #a325b3)"
                          />
                        </li>
                        <li>
                          <button
                            className="btn_bg_color"
                            type="button"
                            data-color="#ff8f3f"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="erase">
                  <div id="erase-tabs" className="inside-tab">
                    <ul>
                      <li>
                        <a href="#erase1" id="erase_img">
                          erase
                        </a>
                      </li>
                      <li>
                        <a href="#restore" id="restore_img">
                          restore
                        </a>
                      </li>
                    </ul>
                    <div id="erase1">
                      <span>Eraser Size</span>
                      <input
                        className="range"
                        id="erase_brush"
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={10}
                        step={1}
                        onmousemove=""
                      />
                      <div className="offset">
                        <label htmlFor="offsetcursor">Offset</label>
                        <input
                          type="range"
                          className="custom-range offset_cursor"
                          id="offsetcursor"
                          min={-100}
                          max={100}
                          defaultValue={0}
                        />
                      </div>
                    </div>
                    <div id="restore">
                      <span>Brush Size</span>
                      <input
                        className="range"
                        id="restore_brash"
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={10}
                        step={1}
                        onmousemove=""
                      />
                      <div className="offset">
                        <label htmlFor="offsetcursor1">Offset</label>
                        <input
                          type="range"
                          className="custom-range offset_cursor"
                          id="offsetcursor1"
                          min={-100}
                          max={100}
                          defaultValue={0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="previmg">
              <div className="editer">
                <div className="rotate">
                  <button
                    type="button"
                    id="undo"
                    className="btn"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Undo"
                  >
                    <img
                      src="static/images/rotate-anticlockwise.png"
                      alt="Anticlockwise icon"
                    />
                  </button>
                  <button
                    type="button"
                    id="redo"
                    className="btn"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Redo"
                  >
                    <img
                      src="static/images/rotate-clockwise.png"
                      alt="clockwise icon"
                    />
                  </button>
                </div>
                <div className="zoom">
                  <div className="zoom">
                    <button
                      type="button"
                      id="zoom-out"
                      className="btn"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Zoom Out"
                    >
                      <img src="static/images/zoom-out.png" alt="Zoomout pic" />
                    </button>
                    <button
                      type="button"
                      id="zoom-in"
                      className="btn"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Zoom In"
                    >
                      <img src="static/images/zoom-in.png" alt="Zoomin BGR" />
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <img src="static/images/icon-close.png" alt="Closed icon" />
                  </span>
                </button>
              </div>
              <div className="edited-image-area" id="image_background_div">
                <div
                  id="drawing"
                  style={{
                    backgroundImage:
                      "url(static/images/sample/transparent-bg.jpg)",
                    border: "1px solid #29282d"
                  }}
                />
                <div className="editor-cursor">
                  <div className="editor-finger-cursor">
                    <i className="fa fa-hand-pointer-o" />
                  </div>
                </div>
                <div
                  className="parent-spinner-border"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    display: "inline-flex",
                    flexFlow: "wrap",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 999
                  }}
                >
                  <div className="spinner-border" role="status"></div>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <div className="download">
                <button
                  type="button"
                  className="btn btn-rev"
                  id="download_svg_image"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer" id="Footer">
    <div className="topFooter">
      <div className="container d-flex justify-content-between">
        <div className="block">
          <span
            className="heading"
            data-toggle="collapse"
            data-target="#block1"
            aria-expanded="false"
            aria-controls="block1"
          >
            How to use
          </span>
          <div
            className="collapse dont-collapse-md"
            id="block1"
            data-parent="#Footer"
          >
            <ul className="footerLinks">
              <li>
                <a href="personal-use.html" title="">
                  For Individuals
                </a>
              </li>
              <li>
                <a href="photography.html" title="">
                  For Photographers
                </a>
              </li>
              <li>
                <a href="advertising.html" title="">
                  For Advertising
                </a>
              </li>
              <li>
                <a href="developers.html" title="">
                  For Developers
                </a>
              </li>
              <li>
                <a href="car-dealerships.html" title="">
                  For Car Dealers
                </a>
              </li>
              <li>
                <a href="news-media.html" title="">
                  For News &amp; Media
                </a>
              </li>
              <li>
                <a href="ecommerce.html" title="">
                  For Ecommerce
                </a>
              </li>
              <li>
                <a href="enterprise.html" title="">
                  For Enterprise
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="block">
          <span
            className="heading"
            data-toggle="collapse"
            data-target="#block5"
            aria-expanded="false"
            aria-controls="block5"
          >
            Support
          </span>
          <div
            className="collapse dont-collapse-md"
            id="block5"
            data-parent="#Footer"
          >
            <ul className="footerLinks">
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
              <li>
                <a href="/help">Help &amp; FAQ</a>
              </li>
              <li>
                <a href="refunds-policy.html">Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="subblock">
            <span
              className="heading"
              data-toggle="collapse"
              data-target="#block3"
              aria-expanded="false"
              aria-controls="block3"
            >
              Company
            </span>
            <div
              className="collapse dont-collapse-md"
              id="block3"
              data-parent="#Footer"
            >
              <ul className="footerLinks">
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="/blog/">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="block">
          <span
            className="heading d-lg-none"
            data-toggle="collapse"
            data-target="#block4"
            aria-expanded="false"
            aria-controls="block4"
          >
            About BGR
          </span>
          <div
            className="collapse dont-collapse-md"
            id="block4"
            data-parent="#Footer"
          >
            <img
              src="static/images/Logo-white.svg"
              alt="Footer Logo"
              className="footer-logo"
            />
            <p>
              BGR is an AI powered tool that uses advanced computer vision
              algorithms to remove bg from any image online and replace
              background automatically with the best detailing in just a few
              seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bottomFooter">
      <div className="container d-flex justify-content-between">
        <div className="col50">
          <div className="dropdown lan-select dropup">
            <button
              className="selectBtn"
              id="btnSelectLanguage"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="static/images/flags/en.png" alt='en+".png"' />
              EN
            </button>
            <div className="dropdown-menu">
              <ul
                className="selectDropdown"
                aria-labelledby="btnSelectLanguage"
              >
                <li className="option" value="en" id="forEN">
                  <img src="static/images/flags/en.png" alt="en.png" />
                  English
                </li>
                <li className="option" value="de" id="forDE">
                  <img src="static/images/flags/de.png" alt="de.png" />
                  Deutsch
                </li>
                <li className="option" value="fr" id="forFR">
                  <img src="static/images/flags/fr.png" alt="fr.png" />
                  Français
                </li>
                <li className="option" value="it" id="forIT">
                  <img src="static/images/flags/it.png" alt="it.png" />
                  Italiano
                </li>
                <li className="option" value="ja" id="forJA">
                  <img src="static/images/flags/ja.png" alt="ja.png" />
                  日本語
                </li>
                <li className="option" value="ru" id="forRU">
                  <img src="static/images/flags/ru.png" alt="ru.png" />
                  Русский
                </li>
                <li className="option" value="id" id="forID">
                  <img src="static/images/flags/id.png" alt="id.png" />
                  Indonesia
                </li>
                <li className="option" value="es" id="forES">
                  <img src="static/images/flags/es.png" alt="es.png" />
                  Español
                </li>
                <li className="option" value="pt" id="forPT">
                  <img src="static/images/flags/pt.png" alt="pt.png" />
                  Português
                </li>
                <li className="option" value="ko" id="forKO">
                  <img src="static/images/flags/ko.png" alt="ko.png" />
                  한국어
                </li>
                <li className="option" value="zh" id="forZH">
                  <img src="static/images/flags/zh.png" alt="zh.png" />
                  简体中文
                </li>
                <li className="option" value="zh_hant_tw" id="forZH_HANT_TW">
                  <img src="static/images/flags/zh_hant_tw.png" alt="zh.png" />
                  繁體中文
                </li>
              </ul>
            </div>
          </div>
          <p>
            All trademarks, service marks, trade names, product names, logos and
            trade dress appearing on our website are the property of their
            respective owners.
          </p>
        </div>
        <div className="col50">
          <div className="social">
            <a href="https://www.facebook.com/BGRcom/" target="_blank">
              <i className="fa fa-facebook" />
            </a>
            <a href="https://twitter.com/BGRCom" target="_blank">
              <i className="fa fa-twitter" />
            </a>
            <a href="https://www.instagram.com/BGR_com/" target="_blank">
              <i className="fa fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/company/BGR" target="_blank">
              <i className="fa fa-linkedin" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCqwn9m9IhX0mtGuQ7QK2tig"
              target="_blank"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
          <ul className="terms">
            <li>
              <a href="terms-of-service.html" title="">
                Terms of service
              </a>
            </li>
            <li>
              <a href="general-terms-conditions.html" title="">
                General Terms and Conditions
              </a>
            </li>
            <li>
              <a href="privacy-policy.html" title="">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section style={{ textAlign: "center" }}>
      <h4>
        © All Rights Reserved &amp; Powered By TechKnowGram Limited
        <a href="https://www.techknowgram.com/">
          <img
            src="static/favicon/1112.jpg"
            width={100}
            height={35}
            style={{ marginLeft: 5, marginBottom: 17 }}
            alt=""
          />
        </a>
      </h4>
    </section>
  </footer>
  <div
    className="modal fade"
    id="fullImage"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="modal_head_text"
    aria-hidden="true"
  >
    <input type="hidden" id="full_res_autogenerate_id" />
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            id="upload_preview_modal_close_btn"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h4 className="modal-title" id="modal_head_text">
            Download Full Size Image
          </h4>
          <figure>
            <img id="modal_image" src="" alt="HD image download" />
          </figure>
          <span id="img_text" />
          <h6>
            1 Image = 1 Credit or less&nbsp;
            <img
              src="static/images/icon-info.svg"
              alt="icon-info.svg"
              className="pop"
              data-container="body"
              data-toggle="popover"
              data-placement="top"
              data-content="<strong>Preview Images</strong> up to 0.25 megapixel (eg: 625 x 400) are always free at  website, 1/5 credit will be charged  via Apps and API.<span><strong>Full Images</strong> up to 25 megapixel (eg: 6250 x 4000 ) will be charged as 1 credit.</span>"
              style={{ width: 11, cursor: "pointer" }}
            />
          </h6>
          <div className="credits" id="upload_page_modal_registration">
            <a href="signup.html" r_url="/upload" className="btn check_click">
              Sign up and get this image for free
            </a>
            <p>
              Already Have an account?
              <a
                href="login.html"
                r_url="/upload"
                className="check_click upload_modal_click_login"
              >
                Login <i className="fa fa-external-link " />
              </a>
            </p>
          </div>
          <div className="credits" id="upload_page_modal_no_credit">
            <h6>
              <img src="static/images/sad.png" alt="Sad emoji" />
              insufficient credits or plan validity expired
            </h6>
            <a href="pricing.html" className="btn check_click" r_url="/pricing">
              Get Credit
            </a>
          </div>
          <div className="credits" id="upload_page_modal_download_edit">
            <div className="btn-group">
              <button
                className="btn btn-rev btn_upload_img_edit_download"
                btn-type="edit"
              >
                Edit
              </button>
              <button
                className="btn btn-blue-rev btn_upload_img_edit_download"
                btn-type="download"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="rateModal"
    tabIndex={-1}
    aria-labelledby="rateModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h4 id="rateModalLabel">Thank you for your valuable feedback</h4>
          <h6>
            Want to help us improve? <span>(optional)</span>
          </h6>
          <ul>
            <li>Contribute this image &amp; help us make better</li>
            <li>Teach the Artificial Intelligence</li>
            <li>Get better results for similar images in the future</li>
          </ul>
          <form action="" method="" acceptCharset="">
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="contribute_image_terms_conditions"
                  required=""
                />
                <label
                  className="custom-control-label"
                  htmlFor="contribute_image_terms_conditions"
                >
                  I agree to the{" "}
                  <a href="improvement-term-conditions.html" target="_blank">
                    Improvement Program Conditions.
                  </a>
                  *
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="contribute_image_rate"
                  required=""
                />
                <label
                  className="custom-control-label"
                  htmlFor="contribute_image_rate"
                >
                  Remember my decision for future images that I rate negatively
                </label>
              </div>
            </div>
          </form>
          <div className="you-choose">
            <div className="block">
              <a
                href="javascript:void(0);"
                title=""
                className="btn btn-blue-rev"
                data-img-url=""
                a-id=""
                id="btn_contribute_image"
              >
                Contribute this image
              </a>
              <span>
                Choose if you want us to use this image for quality
                improvements.
              </span>
            </div>
            <div className="block">
              <a
                href="javascript:void(0);"
                title=""
                className="btn btn-rev"
                id="btn_no_contribute_image"
                a-id=""
              >
                Don't contribute
              </a>
              <span>
                Choose if you do NOT want us to use this image for quality
                improvements.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="mask" />
  <div id="popup">
    <span>Are you still here</span>
    <a href="upload.html" className="close">
      ok
    </a>
  </div>
</>

  );
};

export default ToolsAPI;
