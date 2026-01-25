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

        



      </div>
    </section>
  );
};

export default Projects;