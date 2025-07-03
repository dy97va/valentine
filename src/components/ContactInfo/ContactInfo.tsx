import { FaLinkedin, FaPhone, FaEnvelope, FaGithub } from 'react-icons/fa';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-row">
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/valentin-dyrda/" target="_blank" rel="noopener noreferrer">Linkdin</a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/dy97va" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+358 465798609</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:dy97va@gmail.com">dy97va@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 