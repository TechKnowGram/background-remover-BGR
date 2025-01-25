import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import { Link } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/upload');
  };

  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="author" content="BGR" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    <meta name="csrf-token" content="ImM3ZmU1NmE4NTE1NjAzMmQ1MDlhNjkwYjdmNzMyZmE4MmY0N2YyOWIi.ZrHeKQ.rjnLYufmmjo73_SSQ87Wqxn8Lv8" />
    <title className="pageTitle"> BGR</title>
    <meta name="description" content="Remove background from image automatically in 5 seconds. Don't waste time manually selecting pixels. Just upload photo & get instant cutout." />
    <meta property="og:title" content="Remove background from image for free - " />
    <meta property="og:image" itemProp="image" content="https://www./static/images/remove_image_background.jpg" />
    <meta property="og:url" content="https://www." />
    <meta property="og:site_name" content />
    <meta property="og:description" content="Remove background from image automatically in 5 seconds. Don't waste time manually selecting pixels. Just upload photo & get instant cutout." />
    <meta property="twitter:image" content="https://www./static/images/remove_image_background.jpg" />
    <meta property="twitter:title" content="Remove background from image for free - " />
    <meta property="twitter:url" content="https://www." />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="index" />
    <link rel="shortcut icon" href="static/favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="57x57" href="static/favicon/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="static/favicon/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="static/favicon/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="static/favicon/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="static/favicon/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="static/favicon/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="static/favicon/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="static/favicon/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="static/favicon/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="static/favicon/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="static/favicon/favicon-16x16.png" />
    <link rel="manifest" href="static/favicon/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="google-site-verification" content="uYZov76g-RvHAV17GFJCTeJN7PUh8nsZE6sxO1BwSTY" />
    <meta name="p:domain_verify" content="ac7dd844dcd33b5683ad714dd514c3f0" />
    <link rel="stylesheet" href="static/gen/packed.css?75046767" />
    <div className="header-height" />
    <div className="notification-alert" />
    <div className="upload-container image-drag-drop" style={{display: 'none'}}>
      <div className="showDragAndDropBackground" style={{display: 'none'}}>
        <span className="showDragAndDropBackgroundInnerDiv">Drop image here</span><br />
        <p className="showDragAndDropBackgroundInnerDiv">1 image at a time</p>
      </div>
      <div className="try-now bg-white upload_image_div" id="drag-drop-more-then-one">
        <div className="container">
          <span className="heading">Upload an image to remove background</span>
          <div className="bannerUpload">
            <div className="upload">
              <svg width={80} height={80} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="_leyI1">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.784 2.06l26.05 3.66a6 6 0 015.106 6.776L50.28 38.53a6 6 0 01-6.777 5.107l-1.509-.212V22.021a8 8 0 00-8-8h-18.95l.963-6.855a6 6 0 016.777-5.107zm-9.76 11.96l1.002-7.132A8 8 0 0123.062.08l26.05 3.66a8 8 0 016.809 9.035l-3.66 26.035a8 8 0 01-9.037 6.809l-1.23-.173V48a8 8 0 01-8 8H8a8 8 0 01-8-8V22.02a8 8 0 018-8h5.024zm7.373 12.994a.4.4 0 00-.4.4v6.597h-6.599a.4.4 0 00-.4.4v1.2c0 .22.18.4.4.4h6.6v6.595c0 .221.178.4.4.4h1.2a.4.4 0 00.4-.4v-6.595h6.598a.4.4 0 00.4-.4v-1.2a.4.4 0 00-.4-.4h-6.599v-6.597a.4.4 0 00-.4-.4h-1.2zM8 16.021h25.994a6 6 0 016 6V48a6 6 0 01-6 6H8a6 6 0 01-6-6V22.02a6 6 0 016-6z" fill="#3C3C3C">
                </path>
              </svg>
              <button type="button" className="upload-photo upload-image-file-btn" onClick={handleButtonClick}   style={{ boxShadow: '0 0 10px 4px red' }} // Shadow around the button
>
  <i className="fa fa-picture-o" />
  Upload File
</button>

<p style={{ textShadow: '2px 2px 4px red' }}>
  or drag and drop images <small>Paste image or Ctrl + V</small>
</p>

<input 
  type="file" 
  id="input_user_image_upload" 
  accept=".jpg,.jpeg,.png,image/jpg,image/png,image/jpeg" 
  style={{ display: 'none' }} 
/>

<button 
  className="g-recaptcha" 
  id="submitRecaptcha" 
  style={{ display: 'none', boxShadow: '0 0 10px 4px red' }} // Shadow around the button
  data-sitekey="6LefBDUaAAAAABwJka5NOfN6-sgAEmk_JABbxQH0" 
  data-callback="onSubmit" 
  data-action="submit"
>
  Submit
</button>

            </div>
            
          </div>
        </div>
        <div className="terms-service onUpload">
          <p>By uploading an image you hereby agree to our <a href="termsofservice">Terms
              of Service</a>. This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>
            apply.</p>
        </div>
      </div>
      <div id="recaptcha" className="g-recaptcha" data-sitekey="6LcIANAeAAAAAKNH1c6TewuS639Uf6H2oNduWA06" data-callback="onImageUpload123" data-size="invisible" />
      <div className="try-more submit2_upload" style={{display: 'none'}}>
      <button type="button" className="upload-photo upload-image-file-btn" onClick={handleButtonClick}>
      <i className="fa fa-picture-o" />
      Upload file
    </button>
      </div>
      <div className="container">
        <div id="main_image_container" className="preview" />
      </div>
      <div className="caution discarded" id="upload_important_text" style={{display: 'none'}}>
        <p>Don't forget to download your files. They will be automatically discarded within 30 minutes.</p>
      </div>
    </div>
    <div className="main-container image-drag-drop">
      <div className="showDragAndDropBackground" style={{display: 'none'}}>
        <span className="showDragAndDropBackgroundInnerDiv">Drop image here</span><br />
        <p className="showDragAndDropBackgroundInnerDiv">1 image at a time</p>
      </div>
      <section className="homeBanner">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <div className="homeBannerImage">
          <div className="head-title">
            <h2>
                 <span className="animate-heading">Remove Video &amp; Image Background</span>
            </h2>
            <p>Clear goals and committed efforts keep us winning!</p>

            <style jsx>{`
                

                .animate-heading {
                    background-image: linear-gradient(-225deg,
                            #f34f09 0%,
                            #3b00a2 29%,
            #3b00a2 67%,
                            #fff800 100%);
                    background-size: 200% auto;
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: headline_animation 2s linear infinite;
                    display: inline-block;
                }

                @keyframes headline_animation {
                    0% {
                        background-position: 200% center;
                    }
                    100% {
                        background-position: 0% center;
                    }
                }
            `}</style>
        </div>
            <video src="static/images/home-page/home-page-banner.mp4" loop preload="auto" autoPlay tabIndex={0} playsInline muted poster="static/images/home-page/home_banner.jpg">
              <source src="static/images/home-page/home-page-banner.mp4" type="video/mp4" />
              <source src="static/images/home-page/home-page-banner.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="homeBannerText">
            <div className="upload"
            style={{
              backgroundImage: `url("static/images/home-page/demo-graphics-02.jpg")`, // replace with your image path
              backgroundSize: "cover", // ensure the image covers the box
              backgroundPosition: "center", // centers the image
              backgroundRepeat: "no-repeat", // prevents image repetition
              padding: "20px", // adjust padding if needed
              borderRadius: "10px", // optional, to give it a rounded border
            }}
            >
              <svg width={80} height={80} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="_leyI1">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.784 2.06l26.05 3.66a6 6 0 015.106 6.776L50.28 38.53a6 6 0 01-6.777 5.107l-1.509-.212V22.021a8 8 0 00-8-8h-18.95l.963-6.855a6 6 0 016.777-5.107zm-9.76 11.96l1.002-7.132A8 8 0 0123.062.08l26.05 3.66a8 8 0 016.809 9.035l-3.66 26.035a8 8 0 01-9.037 6.809l-1.23-.173V48a8 8 0 01-8 8H8a8 8 0 01-8-8V22.02a8 8 0 018-8h5.024zm7.373 12.994a.4.4 0 00-.4.4v6.597h-6.599a.4.4 0 00-.4.4v1.2c0 .22.18.4.4.4h6.6v6.595c0 .221.178.4.4.4h1.2a.4.4 0 00.4-.4v-6.595h6.598a.4.4 0 00.4-.4v-1.2a.4.4 0 00-.4-.4h-6.599v-6.597a.4.4 0 00-.4-.4h-1.2zM8 16.021h25.994a6 6 0 016 6V48a6 6 0 01-6 6H8a6 6 0 01-6-6V22.02a6 6 0 016-6z" fill="#3C3C3C" />
              </svg>
              <button type="button" className="upload-photo upload-image-file-btn" onClick={handleButtonClick}>
      <i className="fa fa-picture-o" />
      Upload File
    </button>
              <p>or drag and drop images<small>Paste image or Ctrl + V</small></p>
            </div>
            
            <div className="terms-service">
              <p>By uploading an image you hereby agree to our <a href="termsofservice">Terms of Service</a>. This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply</p>
            </div>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: "\n    .gradient-text {\n        font-size: 50px;\n        font-weight: bold;\n        background: -webkit-linear-gradient(#3b00a2, #ea4c89);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n" }} />
      <section className="trustedBy companies blackTheme">
        <div className="wrap">
          <div className="marquee">
            <ul className="marquee-content">
              <li className="marquee-item"><img src="static/images/trusted-by/scandi-system-white.png" alt="scandi-system" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/visme.svg" alt="visme" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/ladipage.svg" alt="ladipage" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/allas-white.png" alt="allas" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/planetart.svg" alt="planetart" />
              </li>
              <li className="marquee-item"><img src="static/images/trusted-by/microsoft.svg" alt="microsoft" />
              </li>
              <li className="marquee-item"><img src="static/images/trusted-by/netflix.svg" alt="netflix" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/photoAid.svg" alt="photoAid" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/etality-white.png" alt="etality" />
              </li>
              <li className="marquee-item"><img src="static/images/trusted-by/footway-white.png" alt="footway" />
              </li>
              <li className="marquee-item"><img src="static/images/trusted-by/pamono.svg" alt="pamono" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/trendage-white.png" alt="trendage" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/scandi-system-white.png" alt="scandi-system" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/visme.svg" alt="visme" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/ladipage.svg" alt="ladipage" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/allas-white.png" alt="allas" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/planetart.svg" alt="planetart" />
              </li>
              <li className="marquee-item"><img src="static/images/trusted-by/microsoft.svg" alt="microsoft" />
              </li>
              <li className="marquee-item"><img src="static/images/trusted-by/netflix.svg" alt="netflix" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/photoAid.svg" alt="photoAid" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/etality-white.png" alt="etality" />
              </li>
              <li className="marquee-item"><img src="static/images/trusted-by/footway-white.png" alt="footway" />
              </li>
              <li className="marquee-item"><img src="static/images/trusted-by/pamono.svg" alt="pamono" /></li>
              <li className="marquee-item"><img src="static/images/trusted-by/trendage-white.png" alt="trendage" /></li>
            </ul>
          </div>
        </div>
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

      
      <section className="static-content-01">
        <div className="container">
          <div className="static-row">
            <div className="static-img">
              <img src="static/images/home-page/desktop-app.jpg" alt="Remove background images in bulk with BGR" />
            </div>
            <div className="static-content">
              <h2>Best background remover for Windows/Mac/Linux</h2>
              <div className="content">
                <p>Install our desktop application to drag and drop 1000s of images at once. Click "Start" and watch as each image gets cut out automatically. Boost your efficiency and replace background from multiple images to get thousands of AI powered cut outs for all your design needs.</p>
                <a href="background-remover-app" title className="button">Learn more<i className="fa fa-angle-double-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="demo" id="portfolio">
        <div className="container">
          <h2 className="text-center">Remove backgrounds 100% Automatically <span>in just seconds</span></h2>
          <p className="subheading">Our online background remover instantly detects the subject from any photo and gives you a smooth &amp; clear cutout. Now you can save a incredible amount of time as our AI is capable of handling hair, fur or any complex edges in just a few seconds.</p>
          
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="individual" role="tabpanel" aria-labelledby="individual-tab">
              <ul>
                <li>
                  <img src="static/images/home-page/demo-human-01.jpg" alt="Remove background from image" />
                  <span>Original image</span>
                </li>
                <li>
                  <img src="static/images/home-page/demo-human-02.jpg" alt="Free background removal online" />
                  <span>Removed background</span>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-human-03.jpg" alt="Add new background" />
                    <span>Add new background</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-human-04.jpg" alt="Design as you like" />
                    <span>Design as you like</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="ecommerce" role="tabpanel" aria-labelledby="ecommerce-tab">
              <ul>
                <li>
                  <img src="static/images/home-page/demo-product-01.jpg" alt="Remove background from image" />
                  <span>Original image</span>
                </li>
                <li>
                  <img src="static/images/home-page/demo-product-02.jpg" alt="Free background removal online" />
                  <span>Removed background</span>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-product-03.jpg" alt="Add new background on Product image" />
                    <span>Add new background</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-product-04.jpg" alt="Design as you like the Product image" />
                    <span>Design as you like</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="carDealerships" role="tabpanel" aria-labelledby="carDealerships-tab">
              <ul>
                <li>
                  <img src="static/images/home-page/demo-car-01.jpg" alt="Remove background from image" />
                  <span>Original image</span>
                </li>
                <li>
                  <img src="static/images/home-page/demo-car-02.jpg" alt="Free background removal online" />
                  <span>Removed background</span>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-car-03.jpg" alt="Add new background on Car image" />
                    <span>Add new background</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-car-04.jpg" alt="Design as you like the Car image" />
                    <span>Design as you like</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="animal" role="tabpanel" aria-labelledby="animal-tab">
              <ul>
                <li>
                  <img src="static/images/home-page/demo-animal-01.jpg" alt="Remove background from image" />
                  <span>Original image</span>
                </li>
                <li>
                  <img src="static/images/home-page/demo-animal-02.jpg" alt="Free background removal online" />
                  <span>Removed background</span>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-animal-03.jpg" alt="Add new background on Animal image" />
                    <span>Add new background</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-animal-04.jpg" alt="Design as you like The Animal image" />
                    <span>Design as you like</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
              <ul>
                <li>
                  <img src="static/images/home-page/demo-graphics-01.jpg" alt="Remove background from image" />
                  <span>Original image</span>
                </li>
                <li>
                  <img src="static/images/home-page/demo-graphics-02.jpg" alt="Free background removal online" />
                  <span>Removed background</span>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-graphics-03.jpg" alt="Add new background on Graphics image" />
                    <span>Add new background</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-graphics-04.jpg" alt="Design as you like the Graphics image" />
                    <span>Design as you like</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="enterprise" role="tabpanel" aria-labelledby="realestate-tab">
              <ul>
                <li>
                  <img src="static/images/home-page/demo-real-estate-01.jpg" alt="Remove background from image" />
                  <span>Original image</span>
                </li>
                <li>
                  <img src="static/images/home-page/demo-real-estate-02.jpg" alt="Free background removal online" />
                  <span>Removed background</span>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-real-estate-03.jpg" alt="Add new background on Real Estate image" />
                    <span>Add new background</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="static/images/home-page/demo-real-estate-04.jpg" alt="Design as you like the Real Estate image" />
                    <span>Design as you like</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="sample" className="button">View Sample</a>
          </div>
        </div>
      </section>
      <section className="static-content-01">
        <div className="container">
          <div className="static-row">
            <div className="static-img">
              <img src="static/images/home-page/integrate-slazzer.jpg" alt="Image editing tools by BGR" />
            </div>
            <div className="static-content">
              <h2>Speed up your workflow with our integrations</h2>
              <div className="content">
                <p>Looking to process millions of images? We've made it super easy to integrate our API into your project with just a few lines of code so you can remove bg at scale! We've also built plugins directly in the best design tools, programs, apps, and eCommerce platforms to improve your efficiency and workflow.</p>
                <a href="tools-api" title className="button">View all plugins<i className="fa fa-angle-double-right" /></a>&nbsp;&nbsp;&nbsp;
                <a href="api" title className="button">Read API docs<i className="fa fa-angle-double-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slz-frag-try">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h2>Remove video &amp; image background automatically</h2>
              <h6>Upload image and get a clear transparent background</h6>
            </div>
            <div className="col-lg-7">
            <div className="homeBannerText">
            <div className="upload"
            style={{
              backgroundImage: `url("static/images/home-page/demo-graphics-02.jpg")`, // replace with your image path
              backgroundSize: "cover", // ensure the image covers the box
              backgroundPosition: "center", // centers the image
              backgroundRepeat: "no-repeat", // prevents image repetition
              padding: "20px", // adjust padding if needed
              borderRadius: "10px", // optional, to give it a rounded border
            }}
            >
              <svg width={80} height={80} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="_leyI1">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.784 2.06l26.05 3.66a6 6 0 015.106 6.776L50.28 38.53a6 6 0 01-6.777 5.107l-1.509-.212V22.021a8 8 0 00-8-8h-18.95l.963-6.855a6 6 0 016.777-5.107zm-9.76 11.96l1.002-7.132A8 8 0 0123.062.08l26.05 3.66a8 8 0 016.809 9.035l-3.66 26.035a8 8 0 01-9.037 6.809l-1.23-.173V48a8 8 0 01-8 8H8a8 8 0 01-8-8V22.02a8 8 0 018-8h5.024zm7.373 12.994a.4.4 0 00-.4.4v6.597h-6.599a.4.4 0 00-.4.4v1.2c0 .22.18.4.4.4h6.6v6.595c0 .221.178.4.4.4h1.2a.4.4 0 00.4-.4v-6.595h6.598a.4.4 0 00.4-.4v-1.2a.4.4 0 00-.4-.4h-6.599v-6.597a.4.4 0 00-.4-.4h-1.2zM8 16.021h25.994a6 6 0 016 6V48a6 6 0 01-6 6H8a6 6 0 01-6-6V22.02a6 6 0 016-6z" fill="#3C3C3C" />
              </svg>
              <button type="button" className="upload-photo upload-image-file-btn" onClick={handleButtonClick}>
      <i className="fa fa-picture-o" />
      Upload File
    </button>
              <p>or drag and drop images<small>Paste image or Ctrl + V</small></p>
            </div>
            
            <div className="terms-service">
              <p>By uploading an image you hereby agree to our <a href="termsofservice">Terms of Service</a>. This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply</p>
            </div>
          </div>
              
              <div className="directTesting">
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: "\n    #customForm.quick_form_9_css * {\n        -webkit-box-sizing: border-box !important;\n        -moz-box-sizing: border-box !important;\n        box-sizing: border-box !important;\n        overflow-wrap: break-word\n    }\n\n    @media only screen and (max-width: 200px) {\n        .quick_form_9_css[name=\"SIGNUP_BODY\"] {\n            width: 100% !important;\n            min-width: 100% !important;\n            margin: 0px auto !important;\n            padding: 0px !important\n        }\n    }\n\n    @media screen and (min-width: 320px) and (max-width: 580px) and (orientation: portrait) {\n        .quick_form_9_css[name=\"SIGNUP_BODY\"] {\n            max-width: 300px !important;\n            margin: 0px auto !important;\n            padding: 0px !important\n        }\n    }\n\n    @media only screen and (max-device-width: 1024px) {\n        .quick_form_9_css[name=\"SIGNUP_BODY\"] {\n            max-width: 500px !important;\n            margin: 0px auto !important\n        }\n    }\n\n    @media only screen and (max-device-width: 1024px) and (orientation: landscape) {\n        .quick_form_9_css[name=\"SIGNUP_BODY\"] {\n            max-width: 700px !important;\n            margin: 0px auto !important\n        }\n    }\n\n    @media screen and (min-width: 475px) and (max-width: 980px) and (orientation: landscape) {\n        .quick_form_9_css[name=\"SIGNUP_BODY\"] {\n            max-width: 400px !important;\n            margin: 0px auto !important;\n            padding: 0px !important\n        }\n    }\n" }} />
      <div className="newsletter">
        <div className="container">
          <div className="box">
            <h2>Get updates</h2>
            <h6>Sign up to our newsletter to receive information about new products, special offers and updates.</h6>
            <div id="sf3z57d51e7a3893f81fa6b140cf1e52dbb7d9fabc52316cfab6bda31854176314be" data-type="signupform" style={{opacity: 1}}>
              <div id="customForm">
                <div className="quick_form_9_css" name="SIGNUP_BODY">
                  <div>
                    <div style={{position: 'relative'}}>
                      <div id="Zc_SignupSuccess" style={{display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all'}}>
                        <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                          <tbody>
                            <tr>
                              <td width="10%">
                                <img className="successicon" src="images/challangeiconenable.jpg" align="absmiddle" />
                              </td>
                              <td>
                                <span id="signupSuccessMsg" style={{color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word'}}>&nbsp;&nbsp;Thank you for Signing Up</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <form method="POST" id="zcampaignOptinForm" className="newsletter-form" action="https://giun-zc1.maillist-manage.in/weboptin.zc" target="_zcSignup">
                      <div style={{position: 'relative', width: '100%'}}>
                        <div id="Zc_SignupSuccess" style={{position: 'absolute', width: '87%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginBottom: '10px', wordBreak: 'break-all', opacity: 1, display: 'none'}}>
                          <div style={{width: '20px', padding: '5px', display: 'table-cell'}}>
                            <img className="successicon" src="images/challangeiconenable-1.jpg" style={{width: '20px'}} />
                          </div>
                          <div style={{display: 'table-cell'}}>
                            <span id="signupSuccessMsg" style={{color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', lineHeight: '30px', display: 'block'}} />
                          </div>
                        </div>
                        <input 
                          type="text" 
                          placeholder="Email" 
                          changeitem="SIGNUP_FORM_FIELD" 
                          name="CONTACT_EMAIL" 
                          id="EMBED_FORM_EMAIL_LABEL"
                          style={{marginBottom: '20px'}}  // Added space below email input
                        />
                      </div>
                      <button 
                        onClick={() => window.location.href = '/signup'}
                        style={{
                          padding: '12px 24px',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          color: '#ffffff',
                          backgroundColor: '#3b00a2',
                          border: 'none',
                          borderRadius: '30px',
                          cursor: 'pointer',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#2d0080'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#3b00a2'}
                      >
                        Join Now
                      </button>
                      <div style={{padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '13px', textAlign: 'left', opacity: 1, display: 'none'}} id="errorMsgDiv">Please enter your valid email address.
                      </div>
                     </form>
                  </div>
                </div>
              </div>
              <img src="images/spacer.gif" id="refImage" onload="referenceSetter(this)" style={{display: 'none'}} />
            </div>
            <input type="hidden" id="signupFormType" defaultValue="QuickForm_Horizontal" />
            <div id="zcOptinOverLay" oncontextmenu="return false" style={{display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: '0.5', zIndex: 100, position: 'fixed', width: '100%', top: '0px', left: '0px', height: '988px'}} />
            <div id="zcOptinSuccessPopup" style={{display: 'none', zIndex: 9999, width: '800px', height: '40%', top: '84px', position: 'fixed', left: '26%', backgroundColor: '#FFFFFF', borderColor: '#E6E6E6', borderStyle: 'solid', borderWidth: '1px', boxShadow: '0 1px 10px #424242', padding: '35px'}}>
              <span style={{position: 'absolute', top: '-16px', right: '-14px', zIndex: 99999, cursor: 'pointer'}} id="closeSuccess">
                <img src="images/videoclose.png" />
              </span>
              <div id="zcOptinSuccessPanel" />
            </div>
            <span className="captch-protected">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</span>
          </div>
        </div>
      </div>
    </div>
    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .cursor {\n        position: absolute;\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n        background-color: transparent;\n        border: 2px solid #222;\n        z-index: 6;\n        pointer-events: none;\n    }\n" }} />
    <div className="modal fade edit-image" id="edit_image" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content h-100">
          <div className="modal-body h-100">
            <div className="row m-0 h-100">
              <div className="prev_option">
                <div id="tabs">
                  <ul>
                    <li className="background_div"><a href="#background">Background</a></li>
                    <li className="erase_div"><a href="#erase" id="erase_restore">Paint/Erase</a></li>
                  </ul>
                  <div id="background">
                    <span>blur</span>
                    <ul className="thumbnail">
                      <li>
                        <button className="blur_submit2" type="button" data-blur={5}>
                          <span className="background-thumb" style={{filter: 'blur(5px)'}} />
                          <div className="foreground-thumbnail" />
                        </button>
                      </li>
                      <li>
                        <button className="blur_submit2" type="button" data-blur={2}>
                          <span className="background-thumb" style={{filter: 'blur(2px)'}} />
                          <div className="foreground-thumbnail" />
                        </button>
                      </li>
                      <li>
                        <button className="blur_submit2" type="button" data-blur={1}>
                          <span className="background-thumb" style={{filter: 'blur(1px)'}} />
                          <div className="foreground-thumbnail" />
                        </button>
                      </li>
                      <li>
                        <button className="blur_submit2" type="button" data-blur={0}>
                          <span className="background-thumb" style={{filter: 'blur(0px)'}} />
                          <div className="foreground-thumbnail" />
                        </button>
                      </li>
                    </ul>

                    <div id="background-tabs" className="inside-tab">
                      <ul>
                        <li><a href="#photo">Select Image</a></li>
                        <li><a href="#color">Select Color</a></li>
                      </ul>
                      <div id="photo">
                        <span>Select Image</span>
                        <ul className="thumbnail image-options">
                          <li>
                            <input type="file" id="imgInp" />
                            <label>
                              <img src="static/images/icon-upload.png" alt="Upload an image" />
                            </label>
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={1} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={2} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={3} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={4} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={5} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={6} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={7} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={8} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={9} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={10} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={11} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={12} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={13} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={14} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={15} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={16} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={17} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={18} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={19} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={20} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={21} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={22} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={23} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={24} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={25} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={26} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={27} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={28} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={29} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={30} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={31} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={32} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={33} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={34} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={35} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={36} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={37} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={38} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={39} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={40} />
                          </li>
                          <li>
                            <button className="submit_background_image" type="button" data-id={41} />
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
                            <button className="submit_bg_image_color" type="button" data-gradient="linear-gradient(to right, #dddddd, #000000)" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#000000" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#FFFFFF" />
                          </li>
                          <li>
                            <button className="submit_bg_image_color" type="button" data-gradient="linear-gradient(to right, #b9b400, #00920c)" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#ff9800" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#cddc39" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#30b5bb" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#9c27b0" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#e0327a" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#8bc34a" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#34da48" />
                          </li>
                          <li>
                            <button className="submit_bg_image_color" type="button" data-gradient="linear-gradient(to right, #d8ff00, #001fff)" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#4c3ec1" />
                          </li>
                          <li>
                            <button className="submit_bg_image_color" type="button" data-gradient="linear-gradient(to right, #0de9ff, #4a1da2)" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#d8ff00" />
                          </li>
                          <li>
                            <button className="submit_bg_image_color" type="button" data-gradient="linear-gradient(to right, #b52b2b, #480d0d)" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#EEEEEE" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#f44336" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#673ab7" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#03a9f4" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#4caf50" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#ffeb3b" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#e91e63" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#3f51b5" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#00bcd4" />
                          </li>
                          <li>
                            <button className="submit_bg_image_color" type="button" data-gradient="linear-gradient(to right, #27a749, #d8ff00)" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#ffc107" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#f44336" />
                          </li>
                          <li>
                            <button className="submit_bg_image_color" type="button" data-gradient="linear-gradient(to right, #ffec0d, #6e3fff)" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#2196f3" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#009688" />
                          </li>
                          <li>
                            <button className="submit_bg_image_color" type="button" data-gradient="linear-gradient(to right, #0d36ff, #a325b3)" />
                          </li>
                          <li>
                            <button className="submit_bg_color" type="button" data-color="#ff8f3f" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="erase">
                    <div id="erase-tabs" className="inside-tab">
                      <ul>
                        <li><a href="#erase1" id="erase_img">erase</a></li>
                        <li><a href="#restore" id="restore_img">restore</a></li>
                      </ul>
                      <div id="erase1">
                        <span>Eraser Size</span>
                        <input className="range" id="erase_brush" type="range" min={0} max={100} defaultValue={10} step={1} onmousemove />
                        <div className="offset">
                          <label htmlFor="offsetcursor">Offset</label>
                          <input type="range" className="custom-range offset_cursor" id="offsetcursor" min={-100} max={100} defaultValue={0} />
                        </div>
                      </div>
                      <div id="restore">
                        <span>Brush Size</span>
                        <input className="range" id="restore_brash" type="range" min={0} max={100} defaultValue={10} step={1} onmousemove />
                        <div className="offset">
                          <label htmlFor="offsetcursor1">Offset</label>
                          <input type="range" className="custom-range offset_cursor" id="offsetcursor1" min={-100} max={100} defaultValue={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="previmg">
                <div className="editer">
                  <div className="rotate">
                    <button type="button" id="undo" className="submit" data-toggle="tooltip" data-placement="bottom" title="Undo"><img src="static/images/rotate-anticlockwise.png" alt="Anticlockwise icon" />
                    </button>
                    <button type="button" id="redo" className="submit" data-toggle="tooltip" data-placement="bottom" title="Redo"><img src="static/images/rotate-clockwise.png" alt="clockwise icon" />
                    </button>
                  </div>
                  <div className="zoom">
                    <div className="zoom">
                      <button type="button" id="zoom-out" className="submit" data-toggle="tooltip" data-placement="bottom" title="Zoom Out"><img src="static/images/zoom-out.png" alt="Zoomout pic" />
                      </button>
                      <button type="button" id="zoom-in" className="submit" data-toggle="tooltip" data-placement="bottom" title="Zoom In"><img src="static/images/zoom-in.png" alt="Zoomin BGR" /></button>
                    </div>
                  </div>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="static/images/icon-close.png" alt="Closed icon" /></span>
                  </button>
                </div>
                <div className="edited-image-area" id="image_background_div">
                  <div id="drawing" style={{backgroundImage: 'url(static/images/sample/transparent-bg.jpg)', border: '1px solid #29282d'}} />
                  <div className="editor-cursor">
                    <div className="editor-finger-cursor">
                      <i className="fa fa-hand-pointer-o" />
                    </div>
                  </div>
                  <div className="parent-spinner-border" style={{position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', display: 'inline-flex', flexFlow: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: 999}}>
                    <div className="spinner-border" role="status">
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <div className="download">
                  <button type="button" className="submit submit-rev" id="download_svg_image">Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="fullImage" tabIndex={-1} role="dialog" aria-labelledby="modal_head_text" aria-hidden="true">
      <input type="hidden" id="full_res_autogenerate_id" />
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" id="upload_preview_modal_close_submit" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="modal_head_text">Download Full Size Image</h4>
            <figure>
              <img id="modal_image" src alt="HD image download" />
            </figure>
            <span id="img_text" />
            <h6>1 Image = 1 Credit or less&nbsp;<img src="static/images/icon-info.svg" alt="icon-info.svg" className="pop" data-container="body" data-toggle="popover" data-placement="top" data-content="<strong>Preview Images</strong> up to 0.25 megapixel (eg: 625 x 400) are always free at  website, 1/5 credit will be charged  via Apps and API.<span><strong>Full Images</strong> up to 25 megapixel (eg: 6250 x 4000 ) will be charged as 1 credit.</span>" style={{width: '11px', cursor: 'pointer'}} />
            </h6>
            <div className="credits" id="upload_page_modal_registration">
              <a href="signup" r_url="/upload" className="submit check_click">Sign up and get this image for free</a>
              <p>Already Have an account?<a href="login" r_url="/upload" className="check_click upload_modal_click_login">Login <i className="fa fa-external-link " /></a></p>
            </div>
            <div className="credits" id="upload_page_modal_no_credit">
              <h6><img src="static/images/sad.png" alt="Sad emoji" />insufficient credits or plan validity expired</h6>
              <a href="pricing" className="submit check_click" r_url="/pricing">Get Credit</a>
            </div>
            <div className="credits" id="upload_page_modal_download_edit">
              <div className="submit-group">
                <button className="submit submit-rev submit_upload_img_edit_download" submit-type="edit">Edit</button>
                <button className="submit submit-blue-rev submit_upload_img_edit_download" submit-type="download">Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="rateModal" tabIndex={-1} aria-labelledby="rateModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 id="rateModalLabel">Thank you for your valuable feedback</h4>
            <h6>Want to help us improve? <span>(optional)</span></h6>
            <ul>
              <li>Contribute this image &amp; help us make  better</li>
              <li>Teach the Artificial Intelligence</li>
              <li>Get better results for similar images in the future</li>
            </ul>
            <form action method acceptCharset>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="contribute_image_terms_conditions" required />
                  <label className="custom-control-label" htmlFor="contribute_image_terms_conditions">I agree to the <a href="improvement-term-conditions" target="_blank">Improvement Program Conditions.</a>*</label>
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="contribute_image_rate" required />
                  <label className="custom-control-label" htmlFor="contribute_image_rate">Remember my decision for future images that I rate negatively
                  </label>
                </div>
              </div>
            </form>
            <div className="you-choose">
              <div className="block">
                <a href="javascript:void(0);" title className="submit submit-blue-rev" data-img-url a-id id="submit_contribute_image">Contribute this image</a>
                <span>Choose if you want us to use this image for quality improvements.</span>
              </div>
              <div className="block">
                <a href="javascript:void(0);" title className="submit submit-rev" id="submit_no_contribute_image" a-id>Don't contribute</a>
                <span>Choose if you do NOT want us to use this image for quality improvements.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mask" />
    <div id="popup">
      <span>Are you still here</span>
      <a href="upload" className="close">ok</a>
    </div>
  </div>
  );
};

export default Home;
