//vendors
import React from 'react';
import {link } from 'react-router-dom';

//assets
import logo from 'assets/logo.svg';

const Home = () => {
    return (
        <>
        <img src={logo} className='App-logo' alt ='logo' />
        <p>
            Edit <code> src/App.js</code> and save to reload.
        </p>
        <a
        className='App-link'
        href='https://reactjs.org'
        target = 'blank'
        rel= 'noopener noreferrer'
        >
            learn React
        </a>
        <link to= 'projects'>{'Go to projects'}</link>
        <outlet />
        </>
    );
};

export default Home;