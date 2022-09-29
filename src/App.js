// import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar'
import Why from './components/why';
import DidYouKnow from './components/didYouKnow';
import Pledge from './components/pledge';
import Blog from './components/blog';
import About from './components/About';
import Footer from './components/footer';
import Loading from './components/Loading';


function App() {
  const [loading, setLoading] = useState(true);
  document.body.style.overflowX = "hidden";
  useEffect(() => {
    setLoading(true);
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflowY = "scroll";
    }, 5000);
  }, []);
  return (
    <>
      {loading ? <Loading /> : <><Navbar />
      <div style={{ backgroundColor: '#f4f4f4' }}>
        <Main />
        <Why />
        <DidYouKnow />
        <Pledge />
        <Blog />
        <About />
        <Footer/>
      </div></>}
    </>
  );
}

export default App;
