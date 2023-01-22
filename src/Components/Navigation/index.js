/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navigation = ({setActivePage, activePage}) => {
  const handlePage = (e) => {
    if (e.target.innerText === 'About Me') {
      setActivePage({about: true});
    } else if (e.target.innerText === 'Portfolio') {
      setActivePage({portfolio: true});
    } else if (e.target.innerText === 'Contact') {
      setActivePage({contact: true});
    } else if (e.target.innerText === 'Resume') {
      setActivePage({resume: true});
    }
  };
  return (
    <div>
      <ul>
        <li>
          <a
            className={`navItem ${activePage.about ? 'active' : ''}`}
            href='#'
            onClick={(e) => handlePage(e)}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            className={`navItem ${activePage.portfolio ? 'active' : ''}`}
            href='#'
            onClick={(e) => handlePage(e)}
          >
            Portfolio
          </a>
        </li>
        <a
          className={`navItem ${activePage.contact ? 'active' : ''}`}
          href='#'
          onClick={(e) => handlePage(e)}
        >
          Contact
        </a>
        <li>
          <a
            className={`navItem ${activePage.resume ? 'active' : ''}`}
            href='#'
            onClick={(e) => handlePage(e)}
          >
            Resume
          </a>
        </li>
      </ul>
      <img
        id='nav-stack'
        src='https://imgpile.com/images/RVqHWF.png'
        alt='Navigation Icon'
      ></img>
    </div>
  );
};

export default Navigation;
