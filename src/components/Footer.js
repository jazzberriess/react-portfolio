//import react
import React from 'react';

//import fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

//export Footer function
export default function Footer() {
  return (
    <footer>
      <div className="container" role="navigation" aria-label="Contact links">
        <div className="row u-width-full" id="contact-nav">
          <a
            href="https://github.com/jazzberriess"
            aria-label="Visit Christi's GitHub profile"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              size="2xl"
              alt="gitHub icon"
              className="contact-icons"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/christi-s-0b71b62b/"
            aria-label="Visit Christi's LinkedIn profile."
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              alt="LinekedIn icon"
              size="2xl"
              className="contact-icons"
            />
          </a>

          <a
            href="https://stackoverflow.com/users/17728234/jazzberriess"
            aria-label="Visit Christi's Stack Overflow profile"
          >
            <FontAwesomeIcon
              icon={faStackOverflow}
              size="2xl"
              alt="stack overflow icon"
              className="contact-icons"
            />
          </a>

          <a
            href="mailto:cscapwebdev@gmail.com"
            aria-label="Send Christi an e-mail"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2xl"
              alt="Email icon"
              className="contact-icons"
            />
          </a>
        </div>
      </div>
      <p>Dreamed, designed and developed by Christi 2022 &copy; </p>
    </footer>
  );
}
