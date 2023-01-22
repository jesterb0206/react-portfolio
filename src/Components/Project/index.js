import React from 'react';

const Project = ({
  title,
  stack,
  image_url,
  image_alt,
  github_link,
  deployed_link,
}) => {
  return (
    <div id='project-outer-wrapper'>
      <div id='single-project'>
        <div id='project-details'>
          <h1 id='project-title'>{title}</h1>
          <p id='project-stack'>{stack}</p>
        </div>
        <img id='project-image' src={image_url} alt={image_alt} />
      </div>
      <div id='project-links'>
        <a target='_blank' rel='noreferrer noopener' href={github_link}>
          GitHub Repository
        </a>
        <a target='_blank' rel='noreferrer noopener' href={deployed_link}>
          Deployed Link
        </a>
      </div>
    </div>
  );
};

export default Project;
