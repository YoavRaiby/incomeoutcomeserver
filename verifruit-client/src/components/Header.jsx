import React, { useState } from "react";
import "./Header.css";
import { Instagram, Facebook } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <a href="/">
          Veri<span className="logo-highlight">Fruit</span>
        </a>
      </div>

      {/* Menu Toggle Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/solutions">Solutions</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
        <a href="https://www.instagram.com/yoav_raiby/profilecard/?igsh=MTh1d2xrcGFjZHZ4YQ==" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>
      </div>
    </header>
  );
}

export default Header;
