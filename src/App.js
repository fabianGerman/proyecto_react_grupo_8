import './App.css';
import Container from 'react-bootstrap/Container'
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content.js';
import Pelicula from './Components/Pelicula/Pelicula.js';
import peliculas from './pelicula.json';
import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
   <Container>
      <Header /> 
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Content />} ></Route>
          <Route path='/peliculas' element={<Pelicula />}></Route>
        </Routes>
      </Router>
       
      {peliculas.map(peli => 
        <Pelicula
            img = {peli.img}
            titulo = {peli.titulo}
            descripcion = {peli.descripcion}
            sinopsis = {peli.sinopsis}
            reparto = {peli.reparto}
            ></Pelicula>)}
    </Container>  
  );
} 

export default App;
