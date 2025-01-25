import React from "react";
import { useNavigate } from 'react-router-dom';

const Aboutus = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/upload');
  };

  return (
    <div>
      <div className="main-container">
        <section className="about-banner">
          <div className="container">
            <div className="about-heading">
              <h1 className="mb-1">About Us</h1>
              <h6>
                Empowering people and businesses to experience
                state-of-the-art automation using AI
              </h6>
            </div>
            <div className="static-row">
              <div className="netflairs">
                <div className="maxlength">
                  <img
                    src="static/images/netflairs.svg"
                    alt="netflairs.svg"
                  />
                  <p>
                    Our company is on a mission to become the worldwide leader
                    in Visual AI by creating superior algorithms that are
                    useful every day.
                  </p>
                </div>
              </div>
              <div className="static-pic">
                <img
                  src="static/images/BGR-about-us.svg"
                  alt="BGR the Background Removal"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="static-content-01">
          <div className="container">
            <div className="static-row">
              <div className="static-img">
                <img src="static/images/our-mission.svg" alt="our-mission" />
              </div>
              <div className="static-content">
                <h6>Our Mission</h6>
                <h2>Artificial Intelligence for All.</h2>
                <p>
                  With the recent development in Visual AI, we have developed
                  a proprietary algorithm to make complicated tech simple and
                  easy. From freelancers or individuals, to small businesses
                  to Fortune 500 companies, everyone is starting to notice the
                  power of our background removal software.
                </p>
                <p>
                  We at BGR are not only revolutionizing the photo editing
                  workflow to increase productivity, we are helping
                  organizations and individuals to rethink design and
                  photography in general, and provide an API so others can
                  integrate our solution in building top notch products for
                  the AI era.
                </p>
              </div>
            </div>
            <div className="static-row">
              <div className="static-img">
                <img src="static/images/our-vission.svg" alt="our-vission" />
              </div>
              <div className="static-content">
                <h6>Our Aim</h6>
                <h2>
                  We make sure that our customers know the power of their
                  ideas.
                </h2>
                <p>
                  BGR is the best solution for automated background removal at
                  the best accuracy and price. Removing backgrounds of an
                  image has been a major issue for a long time, but not
                  anymore. We are here to assist all designers to produce
                  amazing art pieces without any worries. We are also here to
                  provide professionals and big businesses with all the help
                  required to create an inspired workflow. In addition to all
                  that, BGR is here to channel power to developers in building
                  apps and systems for the next generation.
                </p>
              </div>
            </div>
            <div className="static-row">
              <div className="static-img">
                <img src="static/images/forWorld.svg" alt="forWorld" />
              </div>
              <div className="static-content">
                <h2>Built for the world.</h2>
                <p>
                  Our products are made for the new digital world. Our AI is
                  the power that is needed to excel in design and can be used
                  by every single person and business online. The
                  possibilities are endless with BGR.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="our-office section">
          <div className="container">
            <h2>Our offices</h2>
            <div className="office">
              <div className="d-inline-flex w-100 justify-content-between align-items-center mb-3 mb-md-4">
                <h4>india</h4>
                <figure>
                  <img
                    src="static/images/flag-bangladesh.jpg"
                    alt="flag-india"
                  />
                </figure>
              </div>
              <h6>
                <i className="fa fa-building" />
                TechKnowGram Limited
              </h6>
              <h6>
                <i className="fa fa-map-marker" />
                Suite B1, 5/9 BLOCK # B, Dhaka 1207
              </h6>
              <h6>
                <i className="fa fa-envelope-open" />
                <a href="mailto:info@TechKnowGram.com" title="Send an email">
                  info@TechKnowGram.com
                </a>
              </h6>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Aboutus;
