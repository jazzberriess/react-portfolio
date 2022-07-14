//import react
import React from 'react';

//import profile image
import profilepic from '../../assets/images/profile-image.jpg';

//function to render About details
export default function About() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2>Hi there, I'm Christi!</h2>
          <img
            className="profile-pic"
            src={profilepic}
            alt="A photograph of Christi with one of their cats."
          />
          <p>
            Junior Full-Stack Web Developer with a background in customer
            service. I'm a
            <span className="bold"> communicative collaborator</span> and
            <span className="bold"> team-player</span> with strengths in
            <span className="bold"> adaptability</span> and
            <span className="bold"> delivering objectives on-time</span>. A full
            list of technical skills are on my resume page.
          </p>

          <p>
            Outside of web-specific skills, I have extensive experience in the
            customer service space, so my
            <span className="bold"> interpersonal skills</span> and ability to
            <span className="bold"> work as part of a successful team</span> are
            impeccible.
          </p>

          <p>
            I have two feline co-workers who sometimes like to help me with
            projects. They're both aspiring Koding Kitties, who seemingly want
            to specialise in keyboard accessibility.
          </p>
        </div>
      </div>
    </section>
  );
}
