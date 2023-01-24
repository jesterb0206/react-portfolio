// The Header Component (Which Includes The Navigation Child Component That We're Importing)

import React from 'react';
import Navigation from '../Navigation';

const Header = ({setActivePage, activePage, activeNav, setActiveNav}) => {
  return (
    <>
      <h1 onClick={() => setActivePage({about: true})} id='header-logo'>
        Bradley Jester
      </h1>
      {/* We Import The Navigation Component Here */}
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
