import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
// import Blog_Desc from './pages/Blog_Desc';
import 'bootstrap/dist/css/bootstrap.min.css';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/:blog_num" element={<Blog_Desc />} /> */}
      </Routes>
    </BrowserRouter>
  </>,

  document.getElementById("root")
);