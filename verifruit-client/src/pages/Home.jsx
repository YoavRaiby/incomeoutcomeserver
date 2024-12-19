import React from "react";
import "./Home.css";
import FallingFruits from "../components/FallingFruits";

// תמונות לכרטיסים ולקרוסלה
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import fruitCarousel from "../assets/fruit3.png";

function Home() {
  return (
    <div>
      {/* Falling Fruits Animation */}
      <FallingFruits />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">We Verify Freshness</h1>
          <p className="hero-description">You Enjoy Perfection.</p>
          <a href="/scan" className="hero-button">
            Start Scanning Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-text">
          <h2>Why Choose VeriFruit?</h2>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <img src={feature1} alt="Accurate Analysis" />
            <h3>Accurate Analysis</h3>
            <p>
              Our advanced algorithms ensure accurate fruit quality analysis
              every time.
            </p>
          </div>
          <div className="about-card">
            <img src={feature2} alt="Fast Results" />
            <h3>Fast Results</h3>
            <p>
              Get instant results with our fast and reliable scanning system.
            </p>
          </div>
          <div className="about-card">
            <img src={feature3} alt="Trusted Worldwide" />
            <h3>Trusted Worldwide</h3>
            <p>VeriFruit is trusted by professionals and consumers worldwide.</p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <h2>Our Solutions</h2>
        <img src={fruitCarousel} alt="Our Solutions" />
      </section>
    </div>
  );
}

export default Home;
