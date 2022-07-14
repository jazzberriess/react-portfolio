//import react
import React from 'react';

import resume from '../../assets/c-scappatura-technical-resume.pdf';

//export resume function
export default function Resume() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h3>Front End Skills</h3>
          <ul className="skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery library</li>
            <li>Bootstrap CSS framework</li>
            <li>Skeleton CSS boilerplate</li>
            <li>Handlebars</li>
            <li>React</li>
          </ul>

          <h3>Back End Skills</h3>

          <ul className="skills">
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL databases, MySQL and the Sequelize ORM</li>
            <li>NoSQL databases such as MongoDB and the Mongoose ORM</li>
            <li>GraphQL</li>
            <li>Apollo</li>

            <li>Insomnia for API testing</li>
            <li>Heroku for deployment</li>
          </ul>
        </div>
        <div className="row" id="resume-link">
          <a href={resume} aria-label="Download Resume">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
