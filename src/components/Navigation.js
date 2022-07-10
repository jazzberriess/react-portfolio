import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav id="top">
      <ul
        className="navigation nav-flex-container"
        role="navigation"
        aria-label="Primary navigation"
      >
        <li className="nav-flex-item1">
          <a
            href="#about-me"
            onClick={() => handlePageChange('About')}
            aria-label="Skip to About Me"
            id="about-me-link"
            className={currentPage === 'About'}
          >
            About Me
          </a>
        </li>
        <li className="nav-flex-item1">
          <a
            href="#my-work"
            onClick={() => handlePageChange('Portfolio')}
            aria-label="Skip to My Work Portfolio"
            id="my-projects-link"
            className={currentPage === 'Portfolio'}
          >
            My Work
          </a>
        </li>
        <li className="nav-flex-item1">
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

        <li className="nav-flex-item1">
          <a
            href="./assets/c-scappatura-technical-resume.pdf"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
