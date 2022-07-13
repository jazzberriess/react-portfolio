import React from 'react';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/style.css';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="container">
      <div className="row">
        <nav className="navigation">
          <ul role="navigation" aria-label="Primary navigation">
            <li className="two columns">
              <a
                href="#home"
                onClick={() => handlePageChange('Home')}
                aria-label="Skip to Hpme"
                id="home-link"
                className={currentPage === 'Home'}
              >
                Home
              </a>
            </li>
            <li className="two columns">
              <a
                href="#about-me"
                onClick={() => handlePageChange('About')}
                aria-label="Skip to About Me"
                id="about-me-link"
                className={currentPage === 'About'}
              >
                About
              </a>
            </li>
            <li className="two columns">
              <a
                href="#my-work"
                onClick={() => handlePageChange('Portfolio')}
                aria-label="Skip to My Work Portfolio"
                id="my-projects-link"
                className={currentPage === 'Portfolio'}
              >
                Portfolio
              </a>
            </li>
            <li className="two columns">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                aria-label="Skip to Contact"
                id="contact-me-link"
                className={currentPage === 'Contact'}
              >
                Contact
              </a>
            </li>

            <li className="two columns">
              <a
                href="./assets/c-scappatura-technical-resume.pdf"
                aria-label="Download Resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
