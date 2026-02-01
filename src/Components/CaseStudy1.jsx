import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";

const SmartRFIDCaseStudy = () => {
  return (
    <section className="case-wrapper">

      {/* Back Button */}
      <Link 
        to="/" 
        className="back-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/#projects';
          setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }}
      >
        ← Back to Home
      </Link>

      {/* Header Section */}
      <header className="case-header">
        <div className="case-meta">
          <h1>🛒 Smart RFID Shopping Trolley</h1>
          <p className="subtitle">
            Frictionless In-Store Checkout Experience
          </p>

          <div className="meta-grid">
            <div>
              <span>Year</span>
              <p>2025</p>
            </div>
            <div>
              <span>Type of Project</span>
              <p>IoT + UI/UX Case Study</p>
            </div>
            <div>
              <span>My Role</span>
              <p>UI/UX Designer · System Designer</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <a
          href="https://www.figma.com/proto/hrURknXWsn48s7CRg61BsR/Untitled"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-image"
        >
          <img
            src="/images/hero.jpeg"
            alt="Smart RFID Shopping Trolley Prototype"
          />
          <span className="image-hint">
            Click to view interactive prototype →
          </span>
        </a>
      </header>

      {/* Case Study Content */}
      <section className="case-content">
        {/* OBJECTIVE + PROBLEM (CONTINUOUS FLOW) */}
  <div className="case-block">
    <h2>Objective</h2>
    <p>
      Design a frictionless, intuitive in-store shopping experience that
      eliminates checkout queues by combining smart hardware with real-time
      software interfaces, while remaining accessible to users of all age
      groups.
    </p>
    <p>
      The goal was to simplify a complex IoT system into a clear,
      human-centered experience that requires minimal interaction and no
      prior technical knowledge.
    </p>
  </div>

  <div className="case-block">
    <h2>Problem</h2>
    <ul>
      <li>Long queues and waiting time</li>
      <li>Manual barcode scanning</li>
      <li>Dependency on staff availability</li>
      <li>Billing errors and lack of transparency</li>
    </ul>
    <p className="highlight">
      From a UX perspective, the biggest challenge was not technology — it
      was reducing cognitive load while maintaining trust.
    </p>
  </div>

  {/* PROCESS */}
  <div className="case-block">
    <h2>Process</h2>
    <p>
      My design process focused on experience-first thinking, not screens.
      I analyzed real-world shopping behavior and identified pain points
      across different user groups, including elderly customers and store
      staff.
    </p>
    <p>
      Based on these insights, I designed a state-based embedded UI for
      customers store operations.
    </p>
    <ul>
      <li>User journey mapping</li>
      <li>Information architecture design</li>
      <li>Interaction validation using simulated IoT events</li>
    </ul>
  </div>

  {/* OUTCOME */}
  <div className="case-block">
    <h2>Outcome</h2>
    <p>
      The final design delivers a seamless shopping experience where
      customers can shop naturally while the system handles complexity in
      the background.
    </p>
    <ul>
      <li>Reduces checkout friction</li>
      <li>Improves billing transparency</li>
      <li>Requires no app installation or login</li>
      <li>Works reliably within hardware constraints</li>
    </ul>
  </div>

  {/* FEATURES */}
  <div className="case-block">
    <h2>Standout Features</h2>

    <div className="feature">
      <h3>State-Based Embedded UI</h3>
      <p>Minimal LCD interface that responds automatically to user actions.</p>
    </div>

    <div className="feature">
      <h3>Real-Time Bill Transparency</h3>
      <p>Instant updates as items are added or removed.</p>
    </div>

    <div className="feature">
      <h3>No Login, No App Experience</h3>
      <p>Inclusive onboarding without technical barriers.</p>
    </div>

    
  </div>

      </section>

    </section>
  );
};

export default SmartRFIDCaseStudy;
