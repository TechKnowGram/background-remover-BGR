import React from 'react'

function Designmaker() {
  return (
    <div className="all-design-template">
      <div className="container">
        <div className="title-ber">
          <h1>Make BGR a part of your design workflow</h1>
          <div className="toolbar">
            <button className="fil-tab current" data-rel="all">All</button>
            <button className="fil-tab" data-rel="productive">Productive</button>
            <button className="fil-tab" data-rel="creative">Creative</button>
          </div>
        </div>
        <div id="categoryLoader" className="static-row">
          <div className="tile aside all productive">
            <a href="car-image-editor" title>
              <figure>
                <img className="front-img" src="static/images/design_templates/all_templates/car-photo-optimizer.jpg" alt="car design templates by BGR" />
                <img className="back-img" src="static/images/design_templates/all_templates/car-photo-optimizer-hover.jpg" alt="Get best design templates for car " />
              </figure>
              <div className="block">
                <h2>Automatic Car Photo Editor</h2>
                <p>Create high quality professional car photos for free</p>
              </div>
            </a>
          </div>
          <div className="tile aside all productive">
            <a href="replace-image-background" title>
              <figure>
                <img className="front-img" src="static/images/design_templates/all_templates/change-image-background.jpg" alt="Template" />
                <img className="back-img" src="static/images/design_templates/all_templates/change-image-background-hover.jpg" alt="Template" />
              </figure>
              <div className="block">
                <h2>Replace Image Background</h2>
                <p>Change any image background for free</p>
              </div>
            </a>
          </div>
          {/* Add more tile elements as needed */}
        </div>
      </div>
    </div>
  )
}

export default Designmaker