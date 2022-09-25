// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar'
import Why from './components/why';
import DidYouKnow from './components/didYouKnow';
import Pledge from './components/pledge';
import Blog from './components/blog';
import About from './components/About';
import Footer from './components/footer';


function App() {
  document.body.style.overflowX = "hidden";
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#f4f4f4' }}>
        <Main />
        <Why />
        <DidYouKnow />
        <Pledge />
        <Blog />
        <About />
        <Footer/>
      </div>
    </>
  );
}

export default App;
