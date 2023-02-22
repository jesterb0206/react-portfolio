// The Portfolio Component Which Is An Array Of Projects

import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  const project = [
    {
      title: 'Fit Nuts',
      stack: 'MERN',
      image_url: 'https://i.imgur.com/l4XTCbW.png',
      image_alt: 'Fit Nuts Website',
      github_link: 'https://github.com/jesterb0206/fit-nuts',
      deployed_link: 'https://fit-nuts.herokuapp.com',
    },
    {
      title: 'Book Search Engine',
      stack: 'MERN',
      image_url: 'https://i.imgur.com/pyMPrid.png',
      image_alt: 'Book Search Engine Website',
      github_link: 'https://github.com/jesterb0206/book-search-engine',
      deployed_link: 'https://book-search-engine-0206.herokuapp.com/',
    },
    {
      title: 'Just Another Text Editor',
      stack: 'Express.js, JavaScript, Node.js, etc.',
      image_url: 'https://i.imgur.com/RNl813A.png',
      image_alt: 'Just Another Text Editor Website',
      github_link: 'https://github.com/jesterb0206/just-another-text-editor',
      deployed_link: 'https://just-another-text-editor-0206.herokuapp.com/',
    },
    {
      title: 'Art Cart',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/7uqgR0b.png?1',
      image_alt: 'Art Cart Website',
      github_link: 'https://github.com/jesterb0206/art-cart',
      deployed_link: 'https://art-cart-gui-guys-production.herokuapp.com/login',
    },
    {
      title: 'Weather Dashboard',
      stack: 'CSS 3, HTML 5, JavaScript (ES6), OpenWeather API, etc.',
      image_url: 'https://i.imgur.com/8GvPqvs.png',
      image_alt: 'Weather Dashboard Website',
      github_link: 'https://github.com/jesterb0206/server-side-apis-challenge',
      deployed_link:
        'https://jesterb0206.github.io/server-side-apis-challenge/',
    },
    {
      title: 'Work Day Scheduler',
      stack: 'Bootstrap, Moment.js, etc.',
      image_url: 'https://i.imgur.com/3YiL2Tg.png',
      image_alt: 'Work Day Scheduler Website',
      github_link: 'https://github.com/jesterb0206/work-day-scheduler',
      deployed_link: 'https://jesterb0206.github.io/work-day-scheduler/',
    },
  ];

  return (
    <div id='portfolio'>
      <div id='portfolio-wrapper'>
        <h1 id='main-section-header'>My Portfolio</h1>
        <hr id='main-section-hr' />
        {project.map((item, id) => {
          return (
            <Project
              key={id}
              title={item.title}
              stack={item.stack}
              image_url={item.image_url}
              image_alt={item.image_alt}
              github_link={item.github_link}
              deployed_link={item.deployed_link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
