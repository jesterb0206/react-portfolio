/* eslint-disable jsx-a11y/anchor-is-valid */
// The Navigation Component (Which Is Effectively The Entire Header Component Minus My Name In The Top Left Corner)
import React from 'react';

const Navigation = ({setActivePage, activePage, activeNav, setActiveNav}) => {
  const handlePage = (e) => {
    if (
      e.target.innerText === 'About Me' ||
      e.target.innerText === 'Bradley Jester'
    ) {
      document.title = e.target.innerText;
      setActivePage({about: true});
    } else if (e.target.innerText === 'Portfolio') {
      document.title = e.target.innerText;
      setActivePage({portfolio: true});
    } else if (e.target.innerText === 'Contact') {
      document.title = e.target.innerText;
      setActivePage({contact: true});
    } else if (e.target.innerText === 'Resume') {
      document.title = e.target.innerText;
      setActivePage({resume: true});
    }
    setActiveNav(false);
  };

  return (
    <div>
      <ul id='desktop-nav'>
        <li>
          <a
            className={`navItem ${activePage.about ? 'active' : ''}`}
            href='#About'
            onClick={(e) => handlePage(e)}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            className={`navItem ${activePage.portfolio ? 'active' : ''}`}
            href='#Portfolio'
            onClick={(e) => handlePage(e)}
          >
            Portfolio
          </a>
        </li>
        <a
          className={`navItem ${activePage.contact ? 'active' : ''}`}
          href='#Contact'
          onClick={(e) => handlePage(e)}
        >
          Contact
        </a>
        <li>
          <a
            className={`navItem ${activePage.resume ? 'active' : ''}`}
            href='#Resume'
            onClick={(e) => handlePage(e)}
          >
            Resume
          </a>
        </li>
      </ul>
      <img
        onClick={() => setActiveNav(!activeNav)}
        className={`nav-stack ${activeNav ? 'active' : ''}`}
        src='https://imgpile.com/images/RVqHWF.png'
        alt='Navigation Icon'
      ></img>
      <div>
        <ul className={`mobile-nav ${activeNav ? 'active' : ''}`}>
          <li>
            <a
              className={`navItem ${activePage.about ? 'active' : ''}`}
              href='#About'
              onClick={(e) => handlePage(e)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className={`navItem ${activePage.portfolio ? 'active' : ''}`}
              href='#Portfolio'
              onClick={(e) => handlePage(e)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className={`navItem ${activePage.contact ? 'active' : ''}`}
              href='#Contact'
              onClick={(e) => handlePage(e)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className={`navItem ${activePage.resume ? 'active' : ''}`}
              href='#Resumes'
              onClick={(e) => handlePage(e)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
