import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import About from './Components/About';

function App() {
  return (
    <main>
      <nav>
        <Header />
        <Navigation />
      </nav>
      <section>
        <Portfolio />
        <About />
      </section>
      <Footer />
    </main>
  );
}

export default App;
