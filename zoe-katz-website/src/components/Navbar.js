import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar=()=>{
        return (    
                    <div className='navbar'>
                        <div className="navbar-left">
                             <a href="/zoekatz" className="logo">
                               Zoe Katz
                             </a>
                        </div>
                        <div className="navbar-center">
                                <li className="nav-links">
                                        <div className='about'>
                                        <Link to="/">about</Link>
                                        </div>
                                        <div className='research'>
                                        <Link to="/research">research</Link>
                                        </div>
                                        <div className='playground'>
                                        <Link to="/playground">playground</Link>
                                        </div>
                                </li>
                        </div>
                        {/* <div className="navbar-right">
                                <a href="/cart" className="cart-icon">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="cart-count">0</span>
                                </a>
                                <a href="/account" className="user-icon">
                                <i className="fas fa-user"></i>
                                </a>
                        </div> */}
                    </div>
        )
    
    }
    export default Navbar;    