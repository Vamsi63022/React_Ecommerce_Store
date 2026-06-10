import React from 'react';
import "../../App.css";

const Footer = () => (
  <footer className="siteFooter">
    <div className="footer-container">
      <div className="footer-column">
        <h3 className="footer-brand">Ecart</h3>
        <p className="footer-desc">Your one-stop shop for electronics, fashion, and home essentials.</p>
      </div>

      <div className="footer-column">
        <h4>Shop</h4>
        <ul className="footer-links">
          <li>Men</li>
          <li>Women</li>
          <li>Mobiles</li>
          <li>Computers</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Support</h4>
        <ul className="footer-links">
          <li>Help Center</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Contact</h4>
        <p>Email: support@ecart.example</p>
        <p>Phone: +1 (555) 123-4567</p>
        <div className="social-icons">
          <span aria-hidden>🔗</span>
          <span aria-hidden>📘</span>
          <span aria-hidden>🐦</span>
        </div>
      </div>
    </div>

    <div className="footer-bottom">© {new Date().getFullYear()} Ecart. All rights reserved.</div>
  </footer>
);

export default Footer;
