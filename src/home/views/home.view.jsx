// vendors
import React from "react";
import { Link } from 'react-router-dom';

// assets
import logo from 'assets/logo.svg';
//import Carousel from 'src/components/carousel.component';

const Home = () => {
  return (
  <>
    
        <img src={logo} className="App-logo" alt="logo"/>
      <p>
       <h1>Proyección-Sistema de Gestión de Proyectos</h1>
      </p>
      
      <Link to="projects">{'Ver los proyectos'}</Link>
      
  </>
  );
};

export default Home;
