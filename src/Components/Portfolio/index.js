import React from 'react';
import Project from '../Project';

const index = () => {
  const project = [
    {
      title: 'Art Cart',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/7uqgR0b.png?1',
    },
    {
      title: 'Book Search Engine',
      stack: 'MERN',
      image_url: 'https://i.imgur.com/7uqgR0b.png?1',
    },
    {
      title: 'Just Another Text Editor',
      stack: 'Express.js, JavaScript, Node.js, etc.',
      image_url: 'https://i.imgur.com/7uqgR0b.png?1',
    },
    {
      title: 'Natours',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/7uqgR0b.png?1',
    },
    {
      title: 'Tech Blog',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/7uqgR0b.png?1',
    },
    {
      title: 'Today I Learned',
      stack: 'Node.js, React.js, etc.',
      image_url: 'https://i.imgur.com/7uqgR0b.png?1',
    },
  ];

  return (
    <div id='portfolio'>
      <h1 id='main-section-header'>My Portfolio</h1>
      <div id='portfolio-wrapper'>
        {project.map((item, id) => {
          return (
            <Project
              key={id}
              title={item.title}
              stack={item.stack}
              image_url={item.image_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;
