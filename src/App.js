import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Project from './Components/Project';

function App() {
  return (
    <>
      <nav>
        <Header />
        <Navigation />
      </nav>
      <main>
        <Project />
      </main>
      <Footer />
    </>
  );
}

export default App;
