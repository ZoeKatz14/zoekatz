import React from 'react';
//import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar=()=>{
        return (    
                    <div className='navBar'>
                        <div className='home'>
                            <Link to="/">Home</Link>
                        </div>
                        <div className='research'>
                            <Link to="/research">Research</Link>
                        </div>
                    </div>
        )
    
    }
    export default Navbar;    



// const Navbar = () => {
//   return (
// <nav className="navbar">
//   <div className="navbar-left">
//     <a href="/" className="logo">
//       Zoe Katz
//     </a>
//   </div>
//   <div className="navbar-center">
//     <ul className="nav-links">
//       <li>
//         <a href="/">Home</a>
//       </li>
//       <li>
//       <a href="/research">Research</a>
//       </li>
//       <li>
//         <a href="/contact">Fun facts</a>
//       </li>
//     </ul>
//   </div>
//   <div className="navbar-right">
//     <a href="/cart" className="cart-icon">
//       <i className="fas fa-shopping-cart"></i>
//       <span className="cart-count">0</span>
//     </a>
//     <a href="/account" className="user-icon">
//       <i className="fas fa-user"></i>
//     </a>
//   </div>
// </nav>);
// };

// export default Navbar;