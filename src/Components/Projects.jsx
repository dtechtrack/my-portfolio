import React from 'react';
import { Link } from "react-router-dom";
import './Projects.css';
import adaaImg from '../assets/adaa.png';
import smartTrolleyImg from '../assets/hero.jpeg';
import shoesImg from '../assets/shoes.png';





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

               {/* Project 2 – Smart RFID Trolley */}
<Link
  to="/case-study/smart-rfid-trolley"
  className="project-envelope"
>
  <div className="project-preview">
    <img
      src={smartTrolleyImg}
      alt="Smart RFID Shopping Trolley"
    />
  </div>

  <div className="project-right">
    <h3>Smart RFID Shopping Trolley</h3>
    <p>
      A real-time IoT-based shopping system designed to eliminate checkout
      queues using RFID, embedded UI, and backend synchronization.
    </p>
    <span className="project-cta">View Case Study →</span>
  </div>
</Link>



          {/* Project 3 – Shoes Application */}
<Link
  to="/case-study/shoes-app"
  className="project-envelope"
>
  <div className="project-preview">
    <img
      src={shoesImg}
      alt="Smart RFID Shopping Trolley"
    />
  </div>

  <div className="project-right">
    <h3>Smart RFID Shopping Trolley</h3>
    <p>
      A real-time IoT-based shopping system designed to eliminate checkout
      queues using RFID, embedded UI, and backend synchronization.
    </p>
    <span className="project-cta">View Case Study →</span>
  </div>
</Link>





      </div>
    </section>
  );
};

export default Projects;