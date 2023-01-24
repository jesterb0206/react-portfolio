import React from 'react';
import Navigation from '../Navigation';

const Header = ({setActivePage, activePage, activeNav, setActiveNav}) => {
  return (
    <>
      <h1 onClick={() => setActivePage({about: true})} id='header-logo'>
        Bradley Jester
      </h1>
      <Navigation
        setActivePage={setActivePage}
        activePage={activePage}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
    </>
  );
};

export default Header;
