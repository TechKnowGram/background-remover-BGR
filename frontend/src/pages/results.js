import React from 'react'

function Results() {
  return (
    <div> 
    <h1>.</h1>
      <div className="personal-website">
        <style>
          {`
            .personal-website {
              font-family: 'Arial', sans-serif;
              color: #333;
              background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
              min-height: 100vh;
            }

            .floating-nav {
              position: fixed;
              top: 20px;
              right: 20px;
              background: rgba(255, 255, 255, 0.8);
              padding: 10px;
              border-radius: 30px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .nav-item {
              margin: 0 10px;
              color: #333;
              text-decoration: none;
              font-weight: bold;
              transition: color 0.3s ease;
            }

            .nav-item:hover {
              color: #007bff;
            }

            .section-parallax {
              padding: 100px 50px;
              background-attachment: fixed;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }

            .section-title {
              font-size: 2.5em;
              color: #007bff;
              margin-bottom: 30px;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
            }

            .about-content {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .profile-pic {
              width: 200px;
              height: 200px;
              border-radius: 50%;
              background-color: #007bff;
              margin-right: 30px;
            }

            .bio {
              max-width: 600px;
              line-height: 1.6;
            }

            .skills-container {
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
            }

            .skill-card {
              background: white;
              padding: 20px;
              margin: 10px;
              border-radius: 10px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease;
            }

            .skill-card:hover {
              transform: translateY(-5px);
            }

            .skill-icon {
              width: 50px;
              height: 50px;
              background-color: #007bff;
              border-radius: 50%;
              margin-bottom: 10px;
            }

            .projects-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 20px;
            }

            .project-card {
              background: white;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease;
            }

            .project-card:hover {
              transform: translateY(-5px);
            }

            .project-image {
              height: 200px;
              background-size: cover;
              background-position: center;
            }

            .project-info {
              padding: 20px;
            }

            .view-project {
              background-color: #007bff;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }

            .view-project:hover {
              background-color: #0056b3;
            }

            .contact-form {
              display: flex;
              flex-direction: column;
              max-width: 500px;
              margin: 0 auto;
            }

            .form-input {
              margin-bottom: 20px;
              padding: 10px;
              border: 1px solid #ddd;
              border-radius: 5px;
            }

            @media (max-width: 768px) {
              .floating-nav {
                position: static;
                border-radius: 0;
                padding: 10px 0;
              }

              .section-parallax {
                padding: 50px 20px;
              }

              .about-content {
                flex-direction: column;
              }

              .profile-pic {
                margin-right: 0;
                margin-bottom: 20px;
              }
            }
          `}
        </style>
        
        <nav className="floating-nav">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <a key={section} href={`#${section}`} className="nav-item">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
        
        {['about', 'skills', 'projects', 'contact'].map((section) => (
          <section key={section} id={section} className="section-parallax">
            <h2 className="section-title">{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
            {section === 'about' && (
              <div className="about-content">
                <div className="profile-pic-container">
                  <img src="static/images/a.jpg" alt="Asif's profile picture" className="profile-pic" />
                </div>
                <div className="bio-container">
                  <h3 className="bio-title">Meet Asif</h3>
                  <p className="bio">
                    Hello! I'm a passionate web developer with a knack for creating digital experiences that wow. 
                    With 5 years of turning ideas into code, I'm here to make the web a more awesome place, one pixel at a time.
                  </p>
                  <div className="bio-highlights">
                    <div className="highlight-item">
                      <span className="highlight-icon">🚀</span>
                      <span className="highlight-text">5 Years Experience</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">💡</span>
                      <span className="highlight-text">Creative Problem Solver</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">🌐</span>
                      <span className="highlight-text">Full-Stack Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section === 'skills' && (
              <div className="skills-container">
                {[
                  'HTML5 & CSS3',
                  'JavaScript (React, Vue.js)',
                  'Node.js',
                  'UI/UX Design',
                  'Python',
                  'Database Management',
                  'Cloud Computing',
                  'Mobile App Development',
                  'DevOps',
                  'Machine Learning',
                  'Cybersecurity',
                  'Blockchain'
                ].map((skill) => (
                  <div key={skill} className="skill-card">
                    <div className="skill-icon"></div>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            )}
            {section === 'projects' && (
              <div className="projects-grid">
                {[
                  { title: 'E-commerce Revolution', description: 'A fully responsive online store that redefines shopping experiences.', image: 'ecommerce.jpg' },
                  { title: 'Portfolio Masterpiece', description: 'A visually stunning showcase of creativity and skill.', image: 'portfolio.jpg' }
                ].map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {section === 'contact' && (
              <form onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }} className="contact-form">
                {['Name', 'Email'].map((field) => (
                  <input key={field} type={field.toLowerCase()} placeholder={field} required className="form-input" />
                ))}
                <textarea placeholder="Message" required className="form-input"></textarea>
                <button type="submit" className="submit-btn">Let's Connect!</button>
              </form>
            )}
          </section>
        ))}
        
        
      </div>
    </div>
  )
}

export default Results