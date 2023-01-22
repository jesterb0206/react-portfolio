import React from 'react';

const Resume = () => {
  return (
    <div id='resume'>
      <h1 id='main-section-header'>Resume</h1>
      <hr id='main-section-hr' />
      <a href={`./Resume/Bradley Jester's Resume.pdf`} download>
        Download Here!
      </a>
      <div id='resume-wrapper'>
        <div id='frontend'>
          <h1>Front End</h1>
          <ul>
            <li>Adode Express</li>
            <li>AJAX</li>
            <li>APIs</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>CSS 3</li>
            <li>The DOM</li>
            <li>Handlebars</li>
            <li>HTML 5</li>
            <li>JavaScript (ES6) </li>
            <li>jQuery</li>
            <li>JSON</li>
            <li>Pug</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div id='dev-tools'>
          <h1>Dev Tools / Production</h1>
          <ul>
            <li>Babel</li>
            <li>Git</li>
            <li>Heroku</li>
            <li>Insomnia</li>
            <li>Jest</li>
            <li>Netlify</li>
            <li>Postman</li>
            <li>Railway</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div id='backend'>
          <h1>Back End</h1>
          <ul>
            <li>Agile Development</li>
            <li>Express.js</li>
            <li>MERN Stack</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>MVC Paradigm</li>
            <li>MySQL</li>
            <li>Node.js</li>
            <li>Object Oriented Programming</li>
            <li>Progressive Web Applications</li>
            <li>Sequelize</li>
            <li>Supabase</li>
            <li>Test Driven Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
