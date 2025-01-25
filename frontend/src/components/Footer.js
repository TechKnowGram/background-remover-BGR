import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState({
    block1: false,
    block3: false,
    block4: false,
    block5: false
  });

  const toggleExpand = (block) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [block]: !prevState[block],
    }));
  };

  return (
    <footer className="footer" id="Footer">
      <div className="topFooter">
        <div className="container d-flex justify-content-between">
          <div className="block">
            <span
              className="heading"
              onClick={() => toggleExpand('block1')}
              aria-expanded={isExpanded.block1}
              aria-controls="block1"
            >
              How to use
            </span>
            <div
              className={`collapse dont-collapse-md ${isExpanded.block1 ? 'show' : ''}`}
              id="block1"
            >
              <ul className="footerLinks">
                <li><Link to="./personal-use" title="">For Individuals</Link></li>
                <li><Link to="./photography" title="">For Photographers</Link></li>
                <li><Link to="./advertising" title="">For Advertising</Link></li>
                <li><Link to="./developers" title="">For Developers</Link></li>
                <li><Link to="./car-dealerships" title="">For Car Dealers</Link></li>
                <li><Link to="./news-media" title="">For News &amp; Media</Link></li>
                <li><Link to="./ecommerce" title="">For Ecommerce</Link></li>
                <li><Link to="./enterprise" title="">For Enterprise</Link></li>
              </ul>
            </div>
          </div>

          <div className="block">
            <span
              className="heading"
              onClick={() => toggleExpand('block5')}
              aria-expanded={isExpanded.block5}
              aria-controls="block5"
            >
              Support
            </span>
            <div
              className={`collapse dont-collapse-md ${isExpanded.block5 ? 'show' : ''}`}
              id="block5"
            >
              <ul className="footerLinks">
                <li><Link to="./contact-us">Contact Us</Link></li>
                <li><Link to="./help">Help &amp; FAQ</Link></li>
                <li><Link to="./refunds-policy">Refund Policy</Link></li>
              </ul>
            </div>

            <div className="subblock">
              <span
                className="heading"
                onClick={() => toggleExpand('block3')}
                aria-expanded={isExpanded.block3}
                aria-controls="block3"
              >
                Company
              </span>
              <div
                className={`collapse dont-collapse-md ${isExpanded.block3 ? 'show' : ''}`}
                id="block3"
              >
                <ul className="footerLinks">
                  <li><Link to="./about-us">About Us</Link></li>
                  <li><Link to="./blog">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="block">
            <span
              className="heading d-lg-none"
              onClick={() => toggleExpand('block4')}
              aria-expanded={isExpanded.block4}
              aria-controls="block4"
            >
              About BGR
            </span>
            <div
              className={`collapse dont-collapse-md ${isExpanded.block4 ? 'show' : ''}`}
              id="block4"
            >
              <img src="static/images/Logo-white.svg" alt="Footer Logo" className="footer-logo" />
              <p>
                BGR is an AI powered tool that uses advanced computer vision algorithms to remove bg
                from any image online and replace background automatically with the best detailing
                in just a few seconds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottomFooter">
        <div className="container d-flex justify-content-between">
          <div className="col50">
            <div className="dropdown lan-select dropup">
              <button className="selectBtn" id="btnSelectLanguage" type="button" data-toggle="dropdown">
                <img src="static/images/flags/en.png" alt="EN Flag" /> EN
              </button>
              <div className="dropdown-menu">
                <ul className="selectDropdown" aria-labelledby="btnSelectLanguage">
                  {/* Language Options */}
                  {["en", "de", "fr", "it", "ja", "ru", "id", "es", "pt", "ko", "zh", "zh_hant_tw"].map((lang) => (
                    <li className="option" key={lang} value={lang}>
                      <img src={`static/images/flags/${lang}.png`} alt={`${lang}.png`} />
                      {lang.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p>
              All trademarks, service marks, trade names, product names, logos and trade dress
              appearing on our website are the property of their respective owners.
            </p>
          </div>

          <div className="col50">
            <div className="social">
              {["facebook", "twitter", "instagram", "linkedin", "youtube"].map((platform) => (
                <a
                  href={`https://www.${platform}.com/BGR`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={platform}
                >
                  <i className={`fa fa-${platform}`} />
                </a>
              ))}
            </div>
            <ul className="terms">
              <li><Link to="./terms-of-service" title="">Terms of Service</Link></li>
              <li><Link to="./general-terms-conditions" title="">General Terms and Conditions</Link></li>
              <li><Link to="./privacy-policy" title="">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="copyright-section">
        <div className="copyright-container">
          <div className="copyright-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
           
            <div className="powered-by" style={{ textAlign: 'center' }}>
              
              <div class="container footer-bottom clearfix">
      <div class="copyright">
        <p>&copy; 2024 <a href="https://www.techknowgram.com" target="_blank">TechKnowGram</a>. All rights reserved.</p>

      </div>
    </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
