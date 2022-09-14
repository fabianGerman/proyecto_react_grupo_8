import './App.css';
import Container from 'react-bootstrap/Container'
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Pelicula from './Components/Pelicula/Pelicula.js';

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
   <Container>
      <Header />
      <NavBar />
      <Content />
   </Container>
  );
}

export default App;
