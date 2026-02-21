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
          <h2>About Project</h2>

          <div className="about-layout">

            {/* LEFT — description fills the full column height */}
            <div className="about-left">
              <p className="about-desc">
                This app is an online shoe shopping application that provides users
                with a seamless experience for browsing, selecting, and purchasing
                footwear from various brands and categories. The app features a
                modern UI/UX design, secure payment options, and a personalized
                shopping experience.
              </p>
            </div>

            {/* RIGHT — animated vertical timeline */}
            <div className="about-right">
              <p className="about-purpose-label">Main Purpose</p>

              <div className="about-timeline" aria-label="Main purposes of the project">
                <div className="about-timeline-track" aria-hidden="true">
                  <div className="about-timeline-progress"></div>
                </div>

                <div className="about-timeline-item about-tl--1">
                  <div className="about-tl-dot" aria-hidden="true"></div>
                  <div className="about-tl-content">
                    <span className="about-tl-index" aria-hidden="true">01</span>
                    <span className="about-tl-text">Convenience and Accessibility</span>
                  </div>
                </div>

                <div className="about-timeline-item about-tl--2">
                  <div className="about-tl-dot" aria-hidden="true"></div>
                  <div className="about-tl-content">
                    <span className="about-tl-index" aria-hidden="true">02</span>
                    <span className="about-tl-text">Wide Variety of Choices</span>
                  </div>
                </div>

                <div className="about-timeline-item about-tl--3">
                  <div className="about-tl-dot" aria-hidden="true"></div>
                  <div className="about-tl-content">
                    <span className="about-tl-index" aria-hidden="true">03</span>
                    <span className="about-tl-text">Simplified Shopping Experience</span>
                  </div>
                </div>

                <div className="about-timeline-item about-tl--4">
                  <div className="about-tl-dot" aria-hidden="true"></div>
                  <div className="about-tl-content">
                    <span className="about-tl-index" aria-hidden="true">04</span>
                    <span className="about-tl-text">Customer Engagement and Retention</span>
                  </div>
                </div>

                <div className="about-timeline-item about-tl--5">
                  <div className="about-tl-dot" aria-hidden="true"></div>
                  <div className="about-tl-content">
                    <span className="about-tl-index" aria-hidden="true">05</span>
                    <span className="about-tl-text">Transparent Order and Return Process</span>
                  </div>
                </div>

                <div className="about-timeline-item about-tl--6">
                  <div className="about-tl-dot" aria-hidden="true"></div>
                  <div className="about-tl-content">
                    <span className="about-tl-index" aria-hidden="true">06</span>
                    <span className="about-tl-text">Brand Visibility and Growth</span>
                  </div>
                </div>

              </div>
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
        <div className="case-block solution-block">
          <h2>Solution</h2>

          <div className="solution-grid">

            <div className="sol-card sol-card--1">
              <div className="sol-card-inner">
                <div className="sol-number" aria-hidden="true">01</div>
                <div className="sol-body">
                  <h3 className="sol-title">Size Guide and Customer Reviews</h3>
                  <ul className="sol-list">
                    <li>Provide a detailed size chart with comparisons for different brands.</li>
                    <li>Allow users to view customer reviews and feedback on size accuracy and comfort.</li>
                  </ul>
                </div>
              </div>
              <div className="sol-card-glow" aria-hidden="true"></div>
            </div>

            <div className="sol-card sol-card--2">
              <div className="sol-card-inner">
                <div className="sol-number" aria-hidden="true">02</div>
                <div className="sol-body">
                  <h3 className="sol-title">Verified Seller and Product Authenticity</h3>
                  <ul className="sol-list">
                    <li>Work only with trusted brands and verified sellers to ensure quality.</li>
                    <li>Include a brand authentication label or certificate in product details.</li>
                  </ul>
                </div>
              </div>
              <div className="sol-card-glow" aria-hidden="true"></div>
            </div>

            <div className="sol-card sol-card--3">
              <div className="sol-card-inner">
                <div className="sol-number" aria-hidden="true">03</div>
                <div className="sol-body">
                  <h3 className="sol-title">Simple and Clear Return Policy</h3>
                  <ul className="sol-list">
                    <li>Offer easy returns and exchanges with clear instructions on refund timelines.</li>
                    <li>Provide a free return pickup service for a smooth experience.</li>
                  </ul>
                </div>
              </div>
              <div className="sol-card-glow" aria-hidden="true"></div>
            </div>

            <div className="sol-card sol-card--4">
              <div className="sol-card-inner">
                <div className="sol-number" aria-hidden="true">04</div>
                <div className="sol-body">
                  <h3 className="sol-title">Live Order Tracking and Delivery Notifications</h3>
                  <ul className="sol-list">
                    <li>Allow users to track their orders in real time through an integrated tracking system.</li>
                    <li>Send SMS and app notifications for order confirmation, shipping, and delivery updates.</li>
                  </ul>
                </div>
              </div>
              <div className="sol-card-glow" aria-hidden="true"></div>
            </div>

            <div className="sol-card sol-card--5">
              <div className="sol-card-inner">
                <div className="sol-number" aria-hidden="true">05</div>
                <div className="sol-body">
                  <h3 className="sol-title">Advanced Filters and Sorting Options</h3>
                  <ul className="sol-list">
                    <li>Allow users to filter shoes by size, color, brand, price, material, and occasion.</li>
                    <li>Add a "Best Sellers" and "New Arrivals" section for easy browsing.</li>
                  </ul>
                </div>
              </div>
              <div className="sol-card-glow" aria-hidden="true"></div>
            </div>

            <div className="sol-card sol-card--6">
              <div className="sol-card-inner">
                <div className="sol-number" aria-hidden="true">06</div>
                <div className="sol-body">
                  <h3 className="sol-title">24/7 Customer Support</h3>
                  <ul className="sol-list">
                    <li>Provide a dedicated helpline or chat support to assist users with their concerns.</li>
                  </ul>
                </div>
              </div>
              <div className="sol-card-glow" aria-hidden="true"></div>
            </div>

          </div>
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