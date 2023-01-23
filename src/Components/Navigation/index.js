/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';

const Navigation = ({setActivePage, activePage}) => {
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

  const [activeNav, setActiveNav] = useState(false);

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
            href='#Resume'
            onClick={(e) => handlePage(e)}
          >
            Resume
          </a>
        </li>
        <li id='nav-logo'>
          <a className={`navItem`} href='#About' onClick={(e) => handlePage(e)}>
            Bradley Jester
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
