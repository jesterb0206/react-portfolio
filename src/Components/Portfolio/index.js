import React from 'react';
import Project from '../Project';

const index = () => {
  const project = {
    title: 'Title',
    description: 'Description',
    image_url: 'URL',
  };

  return (
    <div id='portfolio'>
      {/* Map Over All of the Projects and Return a Project Component for Each Project */}
      <Project projectsArr={project} />
    </div>
  );
};

export default index;
