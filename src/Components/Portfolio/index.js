import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  const project = [
    {
      title: 'Art Cart',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/7uqgR0b.png?1',
      image_alt: 'Art Cart Website',
      github_link: 'https://github.com/jesterb0206/art-cart',
      deployed_link: 'https://art-cart-gui-guys-production.herokuapp.com/login',
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
      title: 'Natours',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/iJ1SCTj.png',
      image_alt: 'Natours Website',
      github_link: 'https://github.com/jesterb0206/natours',
      deployed_link: 'https://natours-production-0a23.up.railway.app/',
    },
    {
      title: 'Tech Blog',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/YmbUx0C.png',
      image_alt: 'Tech Blog Website',
      github_link: 'https://github.com/jesterb0206/tech-blog',
      deployed_link: 'https://tech-blog-0206.herokuapp.com/',
    },
    {
      title: 'Today I Learned',
      stack: 'Node.js, React.js, etc.',
      image_url: 'https://i.imgur.com/KlZKarL.png',
      image_alt: 'Today I Learned Website',
      github_link: 'https://github.com/jesterb0206/today-i-learned',
      deployed_link: 'https://today-i-learned-0206.netlify.app/',
    },
    {
      title: 'Work Day Scheduler',
      stack: 'Bootstrap, Moment.js, etc.',
      image_url: 'https://i.imgur.com/3YiL2Tg.png',
      image_alt: 'Work Day Scheduler Website',
      github_link: 'https://github.com/jesterb0206/work-day-scheduler',
      deployed_link: 'https://jesterb0206.github.io/work-day-scheduler/',
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
  ];

  return (
    <div id='portfolio'>
      <h1 id='main-section-header'>My Portfolio</h1>
      <hr id='main-section-hr' />
      <div id='portfolio-wrapper'>
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
