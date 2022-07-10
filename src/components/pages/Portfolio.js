import React from 'react';
//import fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

//import images
import pokeball from '../../assets/images/pokeball-splash-page.png';
import booktaku from '../../assets/images/book-taku.png';
import techblog from '../../assets/images/tech-blog.png';
import teamprofile from '../../assets/images/team-profile-generator.png';
import socialnetwork from '../../assets/images/social-network-api.png';
import weatherdashboard from '../../assets/images/weather-dashboard.png';

export default function Portfolio() {
  return (
    <>
      <section className="solid-bg hidden" id="projects">
        <div className="container">
          <div className="row">
            <h2 id="my-work">My Work</h2>
            <p>
              A curated selection of some of the projects I've worked on. A full
              collection of my work is available on GitHub. There, you can also
              find the links to the deployed applications.
            </p>
            <p>
              Keep an eye on this space as I'm often updating what's on show.
            </p>
            <p>
              Clicking on the project title will take you to the live
              application while clicking on the image will play a short gif of
              the app in action.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="twelve columns u-max-full-width parent">
              <img
                className="u-max-full-width"
                id="main-project"
                src={pokeball}
                alt="What Kind of Pokemon Are You collaborative project Christi has worked on"
              />
              <div className="text">
                <a
                  href="https://jazzberriess.github.io/collab-what-pkmn-are-you/"
                  className="link-to-project"
                >
                  What Kind of Pokemon Are You?
                </a>

                <a
                  href="https://github.com/jazzberriess/collab-what-pkmn-are-you"
                  className="inverted-icons"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    alt="gitHub icon"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="twelve columns u-max-full-width parent">
              {/* <p className="other-projects">
                  <a
                    href="https://book-taku.herokuapp.com/"
                    className="link-to-project"
                  >
                    Book-taku
                  </a>
                </p> */}
              <img
                src={booktaku}
                className="u-max-full-width"
                id="book-taku-image"
                alt="The Book-taku project that Christi collaborated on."
              />
              <div className="text">
                <a
                  href="https://book-taku.herokuapp.com/"
                  className="link-to-project"
                >
                  Book-taku
                </a>
                <a
                  href="https://github.com/jazzberriess/Book-taku"
                  className="inverted-icons"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    alt="gitHub icon"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="six columns parent">
              <img
                src={techblog}
                className="tech-blog static u-max-full-width"
                id="tech-blog-image"
                alt="The Tech Blogg app Christi built."
              />
              <div class="text">
                <a
                  href="https://salty-citadel-76451.herokuapp.com/"
                  className="link-to-project"
                >
                  Tech Blog
                </a>
                <a
                  href="https://github.com/jazzberriess/tech-blog"
                  className="inverted-icons"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    alt="gitHub icon"
                  />
                </a>
              </div>
            </div>

            <div className="one-half column parent">
              <img
                src={socialnetwork}
                className="social-network-api static u-max-full-width"
                id="team-profile-generator-image"
                alt="A screenshot of an example API call from Insomnia showing all users."
              />
              <div className="text">
                <a
                  href="https://github.com/jazzberriess/social-network-api"
                  className="link-to-project"
                >
                  Social Network API
                </a>

                <a
                  href="https://github.com/jazzberriess/social-network-api"
                  className="inverted-icons"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    alt="gitHub icon"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="one-half column parent">
              <img
                src={teamprofile}
                className="team-profile static u-max-full-width"
                id="team-profile-generator-image"
                alt="Example of the rendered HTML of the Team profile Generator CLI application Christi created."
              />
              <div class="text">
                <a
                  href="https://github.com/jazzberriess/team-profile-generator"
                  className="link-to-project"
                >
                  Team Profile Generator
                </a>

                <a
                  href="https://github.com/jazzberriess/team-profile-generator"
                  className="inverted-icons"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    alt="gitHub icon"
                  />
                </a>
              </div>
            </div>

            <div className="one-half column parent">
              <img
                src={weatherdashboard}
                className="team-profile static u-max-full-width"
                id="team-profile-generator-image"
                alt="The Weather Dashboard application that Christi built"
              />
              <div className="text">
                <a
                  href="https://jazzberriess.github.io/weather-dashboard/"
                  className="link-to-project"
                >
                  Weather Dashboard
                </a>

                <a
                  href="https://github.com/jazzberriess/weather-dashboard"
                  className="inverted-icons"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    alt="gitHub icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
