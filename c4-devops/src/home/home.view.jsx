//Vendor
import React from "react";

//assets
import logo from '../logo.svg';


const Home = () => {
    return (
        <>
        <img src={logo} className= 'App-logo' alt= 'logo'/>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         learn React
        </a>
      </>
    );
};

export default Home;
