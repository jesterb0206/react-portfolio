import React, {useState} from 'react';

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

function App() {
  const [activePage, setActivePage] = useState({
    about: true,
    portfolio: false,
    contact: false,
    resume: false,
  });

  return (
    <main>
      <nav>
        <Header activePage={activePage} setActivePage={setActivePage} />
        <Navigation activePage={activePage} setActivePage={setActivePage} />
      </nav>
      <section id='main-wrapper'>
        {activePage.about ? (
          <About />
        ) : activePage.portfolio ? (
          <Portfolio />
        ) : activePage.contact ? (
          <Contact />
        ) : activePage.resume ? (
          <Resume />
        ) : (
          ''
        )}
      </section>
      <Footer />
    </main>
  );
}

export default App;
