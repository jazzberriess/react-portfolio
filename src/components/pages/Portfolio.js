//import react
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

//export Portfolio function
export default function Portfolio() {
  //array of portfolio project objects so that it can be looped over to generate the appropriate html for each project
  const portfolioProjects = [
    {
      id: 1,
      title: 'What Kind of Pokémon Are you?',
      description:
        'What Kind of Pokemon Are You collaborative project Christi has worked on',
      image: pokeball,
      projectUrl: 'https://jazzberriess.github.io/collab-what-pkmn-are-you/',
      githubUrl: 'https://github.com/jazzberriess/collab-what-pkmn-are-you',
      projectDescription:
        'A collaborative project to discover what kind of Pokémon you are based on music preference.',
    },
    {
      id: 2,
      title: 'Book-taku',
      description: 'The Book-taku project that Christi collaborated on.',
      image: booktaku,
      projectUrl: 'https://book-taku.herokuapp.com/',
      githubUrl: 'https://github.com/jazzberriess/Book-taku',
      projectDescription:
        'A collorative project to create a book database which users can interact with to see information about a list of books and add comments to books.',
    },
    {
      id: 3,
      title: 'Tech Blog',
      description: 'The Tech Blog app Christi built.',
      image: techblog,
      projectUrl: 'https://salty-citadel-76451.herokuapp.com/',
      githubUrl: 'https://github.com/jazzberriess/tech-blog',
      projectDescription:
        'A CMS-style blogging application where you can share your thoughts about tech with the world!',
    },
    {
      id: 4,
      title: 'Social Network API',
      description:
        'A screenshot of an example API call from Insomnia showing all users.',
      image: socialnetwork,
      projectUrl: 'https://github.com/jazzberriess/social-network-api',
      githubUrl: 'https://github.com/jazzberriess/social-network-api',
      projectDescription:
        'A RESTful API for a social networking application built using MongoDB and Express. ',
    },
    {
      id: 5,
      title: 'Team Profile Generator',
      description:
        'Example of the rendered HTML of the Team profile Generator CLI application Christi created.',
      image: teamprofile,
      projectUrl: 'https://github.com/jazzberriess/team-profile-generator',
      githubUrl: 'https://github.com/jazzberriess/team-profile-generator',
      projectDescription:
        'A node.js powered application that is run from the terminal to dynamically generate a team roster built from the data that the user inputs.',
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'The Weather Dashboard application that Christi built',
      image: weatherdashboard,
      projectUrl: 'https://jazzberriess.github.io/weather-dashboard/',
      githubUrl: 'https://github.com/jazzberriess/weather-dashboard',
      projectDescription:
        'A dashboard that displays the weather based on what city the user inputs.',
    },
  ];

  //HTML for the projects. Includes mapping over the portfolioProjects array so that each project can be looped over
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2>My Work</h2>
          <p>
            A curated selection of some of the projects I've worked on. A full
            collection of my work is available on GitHub. There, you can also
            find the links to the deployed applications.
          </p>
          <p>
            Click on the title of the project to visit the deployed application
            and click on the gitHub icon to visit the repo.
          </p>
          <p>Keep an eye on this space as I'm often updating what's on show.</p>
        </div>
      </div>
      <div className="container"></div>
      {portfolioProjects.map((item) => (
        <div key={item.id} className="row projects">
          <div className="six columns u-max-full-width parent">
            <img
              className="u-max-full-width project-image"
              src={item.image}
              alt={item.description}
            />
            <div className="text">
              <a href={item.projectUrl} target="_blank" rel="noreferrer">
                {item.title}
              </a>

              <a
                href={item.githubUrl}
                className="inverted-icons"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  alt="gitHub icon"
                  target="_blank"
                />
              </a>
              <p>{item.projectDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
