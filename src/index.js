import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Navbar from './components/Navbar';
// import TextForm from './components/textForm';
import About from './components/About';
import Alert from './components/Alert';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function AppF() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={< App/>}/>
        <Route axact path="/" element={< Alert/>}/>
        <Route exact path="/about" element={< About/>}/>
        
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}
root.render(
  <React.StrictMode>
    <AppF />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
