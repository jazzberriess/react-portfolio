import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <section>
      <div className="container" role="navigation" aria-label="Contact details">
        <div className="row u-width-full" id="contact-nav">
          <a
            href="https://github.com/jazzberriess"
            aria-label="Visit Christi's GitHub profile"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              size="xl"
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
              size="xl"
              className="contact-icons"
            />
          </a>

          <a
            href="mailto:cscapwebdev@gmail.com"
            aria-label="Send Christi an e-mail"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              alt="Email icon"
              className="contact-icons"
            />
          </a>
        </div>
      </div>
    </section>
  );
}