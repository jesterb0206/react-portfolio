// The About Me Page Minus The Header And Footer

import React from 'react';

const About = () => {
  return (
    <div id='about'>
      <div id='about-wrapper'>
        <h1 id='main-section-header'>About Me</h1>
        <hr id='main-section-hr' />
        <img
          id='portrait'
          src='https://i.imgur.com/oViGsqf.jpg'
          alt='Bradley Jester Head Shot'
        />
      </div>
      <h1 id='bradley'>Hi, I'm Bradley!</h1>
      <div id='about-inner-wrapper'>
        <p>
          Front-end web developer leveraging background in communication to
          build more intuitive user experiences on the web. Recently earned a
          certificate in full stack development from University of Washington
          and developed skills in JavaScript, CSS, React.js, and responsive web
          design. Known as an innovative problem-solver passionate about
          developing apps, with a focus on mobile-first design and development.
          Aim for each project is to best engage the audience for an impactful
          user experience. Excited to leverage skills in the future as part of a
          fast-paced, quality-driven team to build better experiences on the
          web.
        </p>
      </div>
    </div>
  );
};

export default About;
