//import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ResearchPage from './pages/ResearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
          
          <Route path="/" element={<HomePage/>}/>
          <Route path="/research" element={<ResearchPage/>}/>

        </Routes>
      </Router>
    </div>);
  // return (
  //   <div>
  //   <Navbar />
  //   <HomePage />
  //   </div>
          //   <Routes>

          //     <Route>
          //  <Route path="/" element={<HomePage />} />
          //  <Route path="/research" element={<ResearchPage />} />
          //  </Route>
          //   {/* Add more routes for other pages */}
          //   </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );
}

export default App;
