import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
    <div className="stars stars-layer1"></div>
    <div className="stars stars-layer2"></div>
    <div className="stars stars-layer3"></div>

      <div className="home-content">

        <span className="intro-pill">Hello, I am</span>

        <h1 className="home-title">
          Dhruuvi <span>Topia</span>
        </h1>

        <h2 className="home-subtitle">
          UI/UX Designer & Frontend Developer
        </h2>

        <p className="home-description">
          A passionate Computer Engineering student focused on creating
          intuitive, user-centered digital experiences. Skilled in UI/UX
          design, frontend development, and modern web technologies, with
          hands-on experience in building responsive and meaningful products.
        </p>

      </div>
    </section>
  );
};

export default Home;
