import React from 'react'
import { useNavigate } from 'react-router-dom';

const Developers = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/upload');
  };

  return (
    <div>
      <section className="static-banner">
        <div className="container">
          <div className="heading-aside">
            <h1>
              <span>For Developers</span>
              AI Background Remove Video 
            </h1>
            <div className="upload">
              <button type="button" className="upload-photo upload-image-file-btn" onClick={handleButtonClick}>
                <i className="fa fa-picture-o" />Upload Video
              </button>
              <p>or drag and drop Video<small>Paste image or Ctrl + V</small></p>
            </div>
          </div>
          <div className="image-aside">
            <img src="static/images/use-cases/image-1.svg" alt="Image" className="bg" />
            <img src="static/images/use-cases/developer-top-image.png" alt="AI App for Image Editing" />
          </div>
        </div>
      </section>

      <section className="static-content-01">
        <div className="container">
          <div className="static-row">
            <div className="static-content">
              <h2>Automatic background removal</h2>
              <p>The use of images in most apps improves the user experience (UX) and the quality of user-generated content (UGC).</p>
              <p>A few years ago, you had to be an expert in visual computing and artificial intelligence in order to remove the background from an image.</p>
              <p>That's no longer the case. The technology has been condensed into a single line of code.</p>
            </div>
          </div>
          
          <div className="static-row">
            <div className="static-content">
              <h2>Easy integration</h2>
              <p>The BGR API is a simple HTTP interface with a number of brilliant options to choose from.</p>
              <p>It's super simple, don't worry about it! The only thing you'll have to do to get a backgroundless version of an image is upload it.</p>
              <p>That's all there is to it.</p>
            </div>
          </div>

          <div className="static-row">
            <div className="static-content">
              <h2>Cloud hosted: Expansive &amp; Dependable</h2>
              <p>Our fully-managed service allows you to focus on building apps, no matter how many images you process in a month or how many in an hour.</p>
              <p>Develop apps without worrying about infrastructure or expansiveness.</p>
            </div>
          </div>

          <div className="static-row">
            <div className="static-content">
              <h2>Multiple API wrappers and libraries for different languages</h2>
              <p>With our official and community-based API wrappers and libraries, you'll be up and running in no time.</p>
              <p>Python, PHP, Ruby, and Node.js, are all supported languages.</p>
              <p>Is there a library in your language that is not available? It's super-simple to use a general-purpose HTTP library of your choosing.</p>
              <a href="api" title className="button">Read API Docs<i className="fa fa-angle-double-right" /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Developers