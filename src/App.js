// import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/scss';
// import '../node_modules'
import Main from './components/main';
import Navbar from './components/navbar'
import Why from './components/why';
import DidYouKnow from './components/didYouKnow';
import Pledge from './components/pledge';
import Blog from './components/blog';
import About from './components/About';


function App() {
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
      </div>
    </>
  );
}

export default App;
