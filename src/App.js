import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Project from './Components/Project';
import About from './Components/About';

function App() {
  return (
    <main>
      <nav>
        <Header />
        <Navigation />
      </nav>
      <section>
        <Project />
        <About />
      </section>
      <Footer />
    </main>
  );
}

export default App;
