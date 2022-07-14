//import react
import React from 'react';

//export Navigation function
export default function Navigation({ currentPage, handlePageChange }) {
  //Navigation html
  return (
    <div className="container">
      <div className="row">
        <nav className="navigation">
          <ul
            className="navigation-list"
            role="navigation"
            aria-label="Primary navigation"
          >
            <li className="two columns">
              <a
                href="#about-me"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link-active' : ''}
              >
                About
              </a>
            </li>
            <li className="two columns">
              <a
                href="#my-work"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link-active' : ''}
              >
                Portfolio
              </a>
            </li>
            <li className="two columns">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link-active' : ''}
              >
                Contact
              </a>
            </li>

            <li className="two columns">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link-active' : ''}
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
