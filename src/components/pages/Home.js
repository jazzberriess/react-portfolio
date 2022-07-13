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
        <p>Junior Full-Stack Web Developer</p>
      </div>
    </div>
  );
}
