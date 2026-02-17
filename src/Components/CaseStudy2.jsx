import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";

const ShoesCaseStudy = () => {
  return (
    <section className="case-wrapper">

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

      <header className="case-header">
        <div className="case-meta">
          <h1>Shoes Hub – E-Commerce Website</h1>
          <p className="subtitle">Online Shoes Shopping Platform</p>

          <div className="meta-grid">
            <div>
              <span>Year</span>
              <p>2025</p>
            </div>
            <div>
              <span>Project Type</span>
              <p>Group Project</p>
            </div>
            <div>
              <span>My Role</span>
              <p>UI Designer</p>
            </div>
          </div>
        </div>

        <a
          href="https://www.figma.com/proto/mz0AZryRb55ARujcYKgtda/Dhruvi-project"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-image"
        >
          <img
            src="/images/shoes.png"
            alt="Shoes App Prototype"
          />
          <span className="image-hint">
            Click to view interactive prototype →
          </span>
        </a>
      </header>

      <section className="case-content">
        {/* ABOUT PROJECT */}
        <div className="case-block about-block">
            <div className="about-right" aria-hidden="true">
              <div className="about-visual">
                <img src="/images/about-project.png" alt="" />
              </div>
            </div>
          </div>
        

        {/* PROBLEM */}
        <div className="case-block problem-block">
          <h2>Problem</h2>
          <p className="problem-intro">
            Many users face challenges when buying shoes online due to sizing
            issues, lack of physical trials, and concerns about authenticity.
            The absence of a personalized recommendation system and real-time
            assistance often leads to cart abandonment and low conversion rates.
            Additionally, inefficient return and refund policies make users
            hesitant to complete their purchases.
          </p>

          <div className="problem-board" aria-label="Key user problems">
            <svg
              className="problem-path"
              viewBox="0 0 1200 800"
              role="img"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M120 140 C 260 80, 360 220, 500 170 S 760 140, 850 270 S 980 420, 820 520 S 520 600, 400 500 S 220 430, 250 320 S 420 260, 520 320 S 640 410, 560 520"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="14 18"
              />
            </svg>

            <div className="problem-card problem-card--1">
              <h3>Size and Fit Issues</h3>
              <p>
                Customers often receive shoes that don’t fit properly, leading
                to high return rates.
              </p>
            </div>

            <div className="problem-card problem-card--2">
              <h3>Lack of Real-Time Product Visualization</h3>
              <p>
                Users can’t try on shoes before buying, making it hard to judge
                how they will look and feel.
              </p>
            </div>

            <div className="problem-card problem-card--3">
              <h3>Trust Issues with Authenticity</h3>
              <p>
                Many customers worry about receiving counterfeit or poor-quality
                shoes.
              </p>
            </div>

            <div className="problem-card problem-card--4">
              <h3>Slow Order Tracking and Delivery Updates</h3>
              <p>
                Delayed or inaccurate order tracking reduces customer
                satisfaction.
              </p>
            </div>

            <div className="problem-card problem-card--5">
              <h3>Complicated Return and Refund Process</h3>
              <p>
                Lengthy and unclear return policies discourage users from making
                a purchase.
              </p>
            </div>

            <div className="problem-card problem-card--6">
              <h3>Limited Personalized Shopping Experience</h3>
              <p>
                Users struggle to find relevant products due to a lack of
                AI-driven recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="case-block">
          <h2>Solution</h2>
          <p>
            The solution focuses on a clean and minimal interface that helps
            users quickly find the right shoes and complete purchases with
            minimal steps.
          </p>
          <ul>
            <li>Simple category-based navigation</li>
            <li>Clear product cards with essential details</li>
            <li>Easy add-to-cart and checkout flow</li>
            <li>Consistent layout across pages</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div className="case-block">
          <h2>Process</h2>
          <ul>
            <li>Understanding user shopping behavior</li>
            <li>Competitor analysis</li>
            <li>Information architecture planning</li>
            <li>Wireframing key screens</li>
            <li>High-fidelity UI design</li>
          </ul>
        </div>

        {/* OUTCOME */}
<div className="case-block">
  <h2>Outcome</h2>
  <p>
    The final design delivers a clean and structured online shopping experience
    that allows users to browse, compare, and purchase shoes with ease.
  </p>
  <ul>
    <li>Simplified product discovery</li>
    <li>Clear presentation of product details</li>
    <li>Smooth add-to-cart and checkout flow</li>
    <li>Consistent layout across all screens</li>
    <li>Improved usability on desktop and mobile</li>
  </ul>
</div>

      </section>

    </section>
  );
};

export default ShoesCaseStudy;
