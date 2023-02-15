// The Resume Component (We Import My Resume PDF From The Public Resume Folder)

import React from 'react';

const Resume = () => {
  return (
    <div id='resume'>
      <h1 id='main-section-header'>Resume</h1>
      <hr id='main-section-hr' />
      <a href={`./Resume/Bradley-Jester-Resume.pdf`} download>
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
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <img
              src='https://skillicons.dev/icons?i=ae'
              alt='Adobe Express Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=bootstrap'
              alt='Bootstrap Logo'
            ></img>
            <img src='https://skillicons.dev/icons?i=css' alt='CSSLogo'></img>
            <img
              src='https://skillicons.dev/icons?i=html'
              alt='HTML Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=js'
              alt='JavaScript Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=jquery'
              alt='jQuery Logo'
            ></img>
            <img src='https://skillicons.dev/icons?i=pug' alt='Pug Logo'></img>
            <img
              src='https://skillicons.dev/icons?i=react'
              alt='React Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=redux'
              alt='Redux Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=tailwind'
              alt='Tailwind CSS Logo'
            ></img>
          </ul>
        </div>
        <div id='dev-tools'>
          <h1>Dev Tools / Production</h1>
          <ul>
            <li>Babel</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>Heroku</li>
            <li>Insomnia</li>
            <li>Jest</li>
            <li>Markdown</li>
            <li>Netlify</li>
            <li>Postman</li>
            <li>Railway</li>
            <li>Visual Studio Code</li>
            <li>Webpack</li>
            <img src='https://skillicons.dev/icons?i=git' alt='Git Logo'></img>
            <img
              src='https://skillicons.dev/icons?i=github'
              alt='GitHub Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=gitlab'
              alt='GitLab Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=heroku'
              alt='Heroku Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=jest'
              alt='Jest Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=md'
              alt='Markdown Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=netlify'
              alt='Netlify Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=vscode'
              alt='Visual Studio Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=webpack'
              alt='Webpack Logo'
            ></img>
          </ul>
        </div>
        <div id='backend'>
          <h1>Back End</h1>
          <ul>
            <li>Agile Development</li>
            <li>Apollo</li>
            <li>Express.js</li>
            <li>GraphQL</li>
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
            <img
              src='https://skillicons.dev/icons?i=apollo'
              alt='Apollo Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=express'
              alt='Express Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=graphql'
              alt='GraphQL Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=mongodb'
              alt='MongoDB Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=mysql'
              alt='MySQL Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=nodejs'
              alt='Node.js Logo'
            ></img>
            <img
              src='https://skillicons.dev/icons?i=supabase'
              alt='Supabase Logo'
            ></img>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
