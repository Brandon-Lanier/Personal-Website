import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import NavLinks from './components/NavLinks/NavLinks';
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio';
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavLinks />
      <Landing />
      <About />
      <Portfolio />
      <Music />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
