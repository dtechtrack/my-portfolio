import React from 'react';
import './Projects.css';
import adaaImg from '../assets/adaa.png';
import vaultImg from '../assets/vault.png';
import muImg from '../assets/mu.png';
import fashionImg from '../assets/fashion.png';
import iphoneImg from '../assets/iphone.png';
import twitterImg from '../assets/twitter.png';



const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">

        {/* Project 1 */}
        <a
          href="https://dhairyafrontend.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-envelope"
        >
          <div className="project-preview">
            <img
              src={adaaImg}
              alt="Adaa Jaipur Project"
            />
          </div>

          <div className="project-right">
            <h3>Adaa Jaipur</h3>
            <p>
              A women’s e-commerce platform inspired by Indian culture,
              designed to provide a smooth and engaging shopping experience.
            </p>
            <span className="project-cta">Open Project ↗</span>
          </div>
        </a>

        {/* Project 2 */}
        <a
          href="https://lovable.dev/projects/d5c82b43-a90f-4e86-85d2-dd6a8b81ff03"
          target="_blank"
          rel="noopener noreferrer"
          className="project-envelope"
        >
          <div className="project-preview">
            <img
              src={vaultImg}
              alt="Dotdash Vault Project"
            />
          </div>

          <div className="project-right">
            <h3>Dotdash-Core-Vault-56</h3>
            <p>
              A secure vault management system that encrypts and organizes
              sensitive data such as documents, images, and ZIP files.
            </p>
            <span className="project-cta">Open Project ↗</span>
          </div>
        </a>


        {/* Project 3 */}
        <a
          href="https://www.figma.com/design/GBien6MgBlzxSrys4fvfYJ/Fashion?t=vUUL7HIBMwfnPGOF-0"
          target="_blank"
          rel="noopener noreferrer"
          className="project-envelope"
        >
          <div className="project-preview">
            <img
              src={fashionImg}
              alt="Figma 1"
            />
          </div>

          <div className="project-right">
            <h3>Figma-Fashion Website</h3>
            <p>
              A UI/UX design for Fashion Website focusing on modern aesthetics
              and user engagement.
            </p>
            <span className="project-cta">Open Project ↗</span>
          </div>
        </a>

        {/* Project 4 */}
        <a
          href="https://www.figma.com/design/QCxXOBYo88yxZ9cgWVJaGN/MU?t=vUUL7HIBMwfnPGOF-0"
          target="_blank"
          rel="noopener noreferrer"
          className="project-envelope"
        >
          <div className="project-preview">
            <img
              src={muImg}
              alt="Figma 2"
            />
          </div>

          <div className="project-right">
            <h3>Figma-MU</h3>
            <p>
              A UI/UX design for Marwadi University app focusing on user-friendly
              interface and seamless user experience.
            </p>
            <span className="project-cta">Open Project ↗</span>
          </div>
        </a>


        {/* Project 5 */}
        <a
          href="https://www.figma.com/design/a5604kyNEEWaVEJHHk13gG/iphone?t=vUUL7HIBMwfnPGOF-0"
          target="_blank"
          rel="noopener noreferrer"
          className="project-envelope"
        >
          <div className="project-preview">
            <img
              src={iphoneImg}
              alt="Figma 3"
            />
          </div>

          <div className="project-right">
            <h3>Figma-iPhone</h3>
            <p>
              A UI/UX design for iPhone, showing different pages and user flows.
            </p>
            <span className="project-cta">Open Project ↗</span>
          </div>
        </a>



        {/* Project 6 */}
        <a
          href="https://www.figma.com/design/m9OOMhwyYFJRu028p51VNj/Social-media?t=vUUL7HIBMwfnPGOF-0"
          target="_blank"
          rel="noopener noreferrer"
          className="project-envelope"
        >
          <div className="project-preview">
            <img
              src={twitterImg}
              alt="Figma 4"
            />
          </div>

          <div className="project-right">
            <h3>Figma-Twitter</h3>
            <p>
              A UI/UX design for Twitter clone, showcasing various features and interactions.
            </p>
            <span className="project-cta">Open Project ↗</span>
          </div>
        </a>



      </div>
    </section>
  );
};

export default Projects;