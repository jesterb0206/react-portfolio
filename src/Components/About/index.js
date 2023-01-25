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
          I am a Seattle based driven and detail-oriented full stack web
          developer with experience in Javascript, CSS, React.js and responsive
          web design. When I am not coding, you can find me producing music,
          watching baseball or in the great outdoors. My educational background
          includes a bachelor’s degree in Communications from Seattle University
          and a Full Stack Web Development certification from the University of
          Washington. I am motivated to learn, apply skills and excel in
          building an impactful user experience to best attract an audience. I
          am passionate about developing apps with prioritization on
          mobile-first design and development. I am eager to work cohesively
          with others in a fast-paced, quality-driven team to enhance web
          experience.
        </p>
      </div>
    </div>
  );
};

export default About;
