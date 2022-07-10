import React from 'react';

export default function Portfolio() {
  return (
    <>
      <div>
        <section class="solid-bg hidden" id="projects">
          <h2 id="my-work">My Work</h2>
          <p>
            A curated selection of some of the projects I've worked on. A full
            collection of my work is available on GitHub. There, you can also
            find the links to the deployed applications.
          </p>
          <p>Keep an eye on this space as I'm often updating what's on show.</p>
          <p>
            Clicking on the project title will take you to the live application
            while clicking on the image will play a short gif of the app in
            action.
          </p>

          <div class="container">
            <div class="row">
              <div class="twelve columns u-max-full-width">
                <p class="main-project">
                  <a
                    href="https://jazzberriess.github.io/collab-what-pkmn-are-you/"
                    class="link-to-project"
                  >
                    What Kind of Pokemon Are You?
                  </a>
                </p>

                <img
                  class="proj1 static u-max-full-width"
                  id="main-project"
                  src="/assets/images/pokeball-splash-page.png"
                  alt="What Kind of Pokemon Are You collaborative project Christi has worked on"
                />
                <p>
                  <a
                    href="https://github.com/jazzberriess/collab-what-pkmn-are-you"
                    class="github-repo-link"
                  >
                    The 'What Kind of Pokemon Are you' GitHub Repo
                  </a>
                </p>
              </div>
            </div>

            <div class="row">
              <div class="twelve columns">
                <p class="other-projects">
                  <a
                    href="https://book-taku.herokuapp.com/"
                    class="link-to-project"
                  >
                    Book-taku
                  </a>
                </p>
                <img
                  src="./assets/images/book-taku-static.png"
                  class="book-taku static u-max-full-width"
                  id="book-taku-image"
                  alt="The Book-taku project that Christi collaborated on."
                />
                <p>
                  <a
                    href="https://github.com/jazzberriess/Book-taku"
                    class="github-repo-link"
                  >
                    The Book-taku GitHub Repo
                  </a>
                </p>
              </div>
            </div>

            <div class="row">
              <div class="one-half column">
                <p class="other-projects">
                  <a
                    href="https://salty-citadel-76451.herokuapp.com/"
                    class="link-to-project"
                  >
                    Tech Blog
                  </a>
                </p>
                <img
                  src="./assets/images/tech-blog-static.png"
                  class="tech-blog static u-max-full-width"
                  id="tech-blog-image"
                  alt="The Tech Blogg app Christi built."
                />
                <p>
                  <a
                    href="https://github.com/jazzberriess/tech-blog"
                    class="github-repo-link"
                  >
                    Tech Blog GitHub Repo
                  </a>
                </p>
              </div>

              <div class="one-half column">
                <p class="other-projects">
                  <a
                    href="https://github.com/jazzberriess/team-profile-generator"
                    class="link-to-project"
                  >
                    Social Network API
                  </a>
                </p>
                <img
                  src="./assets/images/team-profile-generator-static.png"
                  class="team-profile static u-max-full-width"
                  id="team-profile-generator-image"
                  alt="Example of the rendered HTML of the Team profile Generator CLI application Christi created."
                />
                <p>
                  <a
                    href="https://github.com/jazzberriess/team-profile-generator"
                    class="github-repo-link"
                  >
                    The Social Network API GitHub Repo
                  </a>
                </p>
              </div>

              <div class="row">
                <div class="one-half column">
                  <p class="other-projects">
                    <a
                      href="https://github.com/jazzberriess/team-profile-generator"
                      class="link-to-project"
                    >
                      Team Profile Generator
                    </a>
                  </p>
                  <img
                    src="./assets/images/team-profile-generator-static.png"
                    class="team-profile static u-max-full-width"
                    id="team-profile-generator-image"
                    alt="A screenshot of an example API call from Insomnia showing all users"
                  />
                  <p>
                    <a
                      href="https://github.com/jazzberriess/team-profile-generator"
                      class="github-repo-link"
                    >
                      The Team Profile Generator GitHub Repo
                    </a>
                  </p>
                </div>

                <div class="one-half column">
                  <p class="other-projects">
                    <a
                      href="https://github.com/jazzberriess/team-profile-generator"
                      class="link-to-project"
                    >
                      Weather Dashboard
                    </a>
                  </p>
                  <img
                    src="./assets/images/team-profile-generator-static.png"
                    class="team-profile static u-max-full-width"
                    id="team-profile-generator-image"
                    alt="The Weather Dashboard application that Christi built"
                  />
                  <p>
                    <a
                      href="https://github.com/jazzberriess/team-profile-generator"
                      class="github-repo-link"
                    >
                      The Weather Dashboard GitHub Repo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a href="#top" aria-label="Skip to Navigation" class="top-of-page">
            Top
          </a>
        </section>
      </div>
    </>
  );
}
