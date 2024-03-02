import React from 'react';
import { FaEnvelope, FaAddressBook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:amitkumar823906@gmail.com';
  };

  return (
    <footer className="bg-dark text-light py-2 mt-3" style={{  bottom: '0', width: '100%', zIndex: '100' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="mb-2">Links</h6>
            <ul className="list-unstyled mb-0 d-flex">
              <li className="me-4"><FaEnvelope /> <span className="link-text" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>Email</span></li>
              <li className="me-4"><a href="https://www.crio.do/learn/portfolio/amitkumar823906/" className="text-light" target="_blank" rel="noopener noreferrer"><FaAddressBook /> Portfolio</a></li>
              <li className="me-4"><a href="https://www.linkedin.com/in/amit-kumar-522180201/" className="text-light" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
              <li><a href="https://github.com/Amitbabu123" className="text-light" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-between">
            <div>
              <h6 className="mb-2">Phone</h6>
              <p>(+91) 8239060323</p>
            </div>
            <div>
              <h6 className="mb-2">Location</h6>
              <p>New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
