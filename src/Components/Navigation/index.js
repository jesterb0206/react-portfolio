import React from 'react';

const Navigation = ({setActivePage, activePage}) => {
  const handlePage = (e) => {
    if (e.target.innerText === 'About me') {
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
    <ul>
      <li>
        <a href='#' onClick={(e) => handlePage(e)}>
          About Me
        </a>
      </li>
      <li>
        <a href='#' onClick={(e) => handlePage(e)}>
          Portfolio
        </a>
      </li>
      <a href='#' onClick={(e) => handlePage(e)}>
        Contact
      </a>
      <li>
        <a href='#' onClick={(e) => handlePage(e)}>
          Resume
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
