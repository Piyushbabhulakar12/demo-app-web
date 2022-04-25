import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>




    </div>
  );
}

export default App;
