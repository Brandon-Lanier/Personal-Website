import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import NavLinks from './components/NavLinks/NavLinks';
import About from './components/About/About'


function App() {
  return (
    <div className="App">
      <NavLinks />
      <Landing />
      <About />
    </div>
  );
}

export default App;
