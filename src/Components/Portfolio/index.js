// The Portfolio Component Which Is An Array Of Projects

import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  const project = [
    {
      title: 'Natours',
      stack: 'MongoDB, Express, Pug, Node, CSS, JavaScript',
      image_url: 'https://i.imgur.com/9A2KuHI.png',
      image_alt: 'Natours Website',
      github_link: 'https://github.com/jesterb0206/natours',
      deployed_link: 'https://natours-production-0a23.up.railway.app/',
    },
    {
      title: 'Fit Nuts',
      stack: 'MongoDB, Express, React, Node, Bootstrap, CSS, JavaScript',
      image_url: 'https://i.imgur.com/83WiPul.png',
      image_alt: 'Fit Nuts Website',
      github_link: 'https://github.com/jesterb0206/fit-nuts',
      deployed_link: 'https://fit-nuts.herokuapp.com/',
    },
    {
      title: 'Art Cart',
      stack: 'MySQL, Express, Handlebars, Node, Bulma, CSS, JavaScript',
      image_url: 'https://i.imgur.com/MgYTNpw.png',
      image_alt: 'Art Cart Website',
      github_link: 'https://github.com/jesterb0206/art-cart',
      deployed_link: 'https://art-cart-gui-guys-production.herokuapp.com/login',
    },
    {
      title: 'The QTRO',
      stack: 'HTML, CSS, JavaScript, jQuery, Tailwind',
      image_url: 'https://i.imgur.com/00uWO1b.png',
      image_alt: 'The Quatro Website',
      github_link: 'https://github.com/jesterb0206/project-one',
      deployed_link: 'https://jesterb0206.github.io/project-one/',
    },
    {
      title: 'Today I Learned',
      stack: 'Supabase, React, Node, CSS, JavaScript',
      image_url: 'https://i.imgur.com/OEJ1krI.png',
      image_alt: 'Today I Learned Website',
      github_link: 'https://github.com/jesterb0206/today-i-learned',
      deployed_link: 'https://today-i-learned-0206.netlify.app/',
    },
    {
      title: 'Work Day Scheduler',
      stack: 'HTML, CSS, JavaScript, Bootstrap, jQuery, Moment',
      image_url: 'https://i.imgur.com/Es1lfr2.png',
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
