// import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResearchPage from './pages/ResearchPage';
import FunPage from './pages/FunPage';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router basename="/zoekatz">
      <Navbar/>
        <Routes>      
          <Route path="/" element={<HomePage/>}/>
          <Route path="/research" element={<ResearchPage/>}/>
          <Route path="/playground" element={<FunPage/>}/>
          <Route path="*" element={<NotFoundPage />} /> 
          {/* Add more routes for other pages */}
          
        </Routes>
        <Footer />
      </Router>
    </div>);
}

export default App;
