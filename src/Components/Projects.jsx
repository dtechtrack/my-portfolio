import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-list">

        {/* Project 1 – Adaa Jaipur */}
        <a
          href="https://dhairyafrontend.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-envelope"
        >
          <div className="project-preview">
            <img
              src="/images/adaa.png"
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
              src="/images/hero.jpeg"
              alt="Smart RFID Shopping Trolley"
            />
          </div>

          <div className="project-right">
            <h3>Smart RFID Shopping Trolley</h3>
            <p>
              A real-time IoT-based shopping system designed to eliminate
              checkout queues using RFID and embedded UI.
            </p>
            <span className="project-cta">View Case Study →</span>
          </div>
        </Link>

        {/* Project 3 – Shoes Hub */}
        <Link
          to="/case-study/shoes-app"
          className="project-envelope"
        >
          <div className="project-preview">
            <img
              src="/images/shoes.png"
              alt="Shoes Hub Application"
            />
          </div>

          <div className="project-right">
            <h3>Shoes Hub</h3>
            <p>
              An e-commerce website focused on clean navigation, product
              discovery, and a smooth checkout experience.
            </p>
            <span className="project-cta">View Case Study →</span>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default Projects;
