// import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResearchPage from './pages/ResearchPage';
import FunPage from './pages/FunPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>      
          <Route path="/" element={<Navigate to="/zoekatz" replace />}/>
          <Route path="/zoekatz" element={<HomePage/>}/>
          <Route path="/zoekatz/research" element={<ResearchPage/>}/>
          <Route path="/zoekatz/for-fun" element={<FunPage/>}/>
          {/* Add more routes for other pages */}
          
        </Routes>
        <Footer />
      </Router>
    </div>);
}

export default App;
