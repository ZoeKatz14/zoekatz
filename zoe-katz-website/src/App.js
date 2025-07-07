// import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResearchPage from './pages/ResearchPage';
import FunPage from './pages/FunPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>          
          <Route path="/" element={<HomePage/>}/>
          <Route path="/research" element={<ResearchPage/>}/>
          <Route path="/for-fun" element={<FunPage/>}/>
          {/* Add more routes for other pages */}
          
        </Routes>
        <Footer />
      </Router>
    </div>);
}

export default App;
