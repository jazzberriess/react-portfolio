import React from 'react';

import profilepic from '../../assets/images/profile-image.jpg';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <h1>Hi there, I'm Christi!</h1>
        <img
          className="profile-pic"
          src={profilepic}
          alt="A photograph of Christi with one of their cats."
        />
        <p>
          Junior Full-Stack Web Developer with a background in customer service.
          I'm a communicative collaborator and team-player with strengths in
          adaptability and delivering objectives on-time.
        </p>
        <p>
          I have two feline co-workers who sometimes like to help me with
          projects. They're both aspiring Koding Kitties, who seemingly want to
          specialise in keyboard accessibility.
        </p>
      </div>
    </div>
  );
}
