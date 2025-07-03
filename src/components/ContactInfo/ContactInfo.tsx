import React from 'react';
import { FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-row">
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">@yourprofile</a>
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+1 (234) 567-8901</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 