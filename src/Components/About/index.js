import React from 'react';
import headShot from '../../images/head-shot.jpg';

const index = () => {
  return (
    <div id='about'>
      <h1 id='main-section-header'>About Me</h1>
      <img id='portrait' src={headShot} alt='Bradley Jester Head Shot' />
      <h1>Hi, I'm Bradley!</h1>
      <p>
        Front-end web developer leveraging background in communication to build
        more intuitive user experiences on the web. Recently earned a
        certificate in full stack development from University of Washington and
        developed skills in JavaScript, CSS, React.js, and responsive web
        design. Known as an innovative problem-solver passionate about
        developing apps, with a focus on mobile-first design and development.
        Aim for each project is to best engage the audience for an impactful
        user experience. Excited to leverage skills in the future as part of a
        fast-paced, quality-driven team to build better experiences on the web.
      </p>
    </div>
  );
};

export default index;
