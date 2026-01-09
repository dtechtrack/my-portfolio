import React from 'react';
import './Projects.css';
import adaaImg from '../assets/adaa.png';
import vaultImg from '../assets/vault.png';
import muImg from '../assets/mu.png';



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
          href="https://www.figma.com/design/QCxXOBYo88yxZ9cgWVJaGN/MU?node-id=0-1&p=f&t=vcE6MyToh92LYhR5-0"
          target="_blank"
          rel="noopener noreferrer"
          className="project-envelope"
        >
          <div className="project-preview">
            <img
              src={muImg}
              alt="Figma"
            />
          </div>

          <div className="project-right">
            <h3>Figma</h3>
            <p>
              A UI/UX design for Marwadi University app focusing on user-friendly
              interface and seamless user experience.
            </p>
            <span className="project-cta">Open Project ↗</span>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Projects;