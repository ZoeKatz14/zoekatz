import React from 'react';
import './Footer.css';
// import LinkedinLogo from '../images/linkedin-icon.png';
import { FaLinkedin } from "react-icons/fa";


const Footer=()=>{
        return (  
                <div className="footer">
                        <div className="footer-left">
                                <p className='email-link'>
                                <a href="mailto:zoek65272@gmail.com">zoek65272@gmail.com</a>
                                </p>
                        </div>
                        <div className="footer-center">
                                <li className="footer-links" role="list">
                                        <div className='linkedin-logo'>
                                                <a href="https://www.linkedin.com/in/zoe-katz-52184b1a1/">
                                                <FaLinkedin size={30} color="#C5D5E4" />
                                                </a>
                                        </div>
                                        <div className='last-updated'>
                                                <p>Site last updated: 01.01.2000</p>
                                        </div>
                                </li>
                        </div>
                        {/* <p className='email-link'>
                                <a href="mailto:zoek65272@gmail.com">zoek65272@gmail.com</a>
                        </p> */}
                        {/* <p>
                                <a href="https://www.linkedin.com/in/zoe-katz-52184b1a1/">
                                <img src={LinkedinLogo} alt="Linkedin logo" className="logo"/>
                                </a>
                                <br></br>
                                Site last updated: 01.01.2000
                        </p> */}
                </div>
        )
    
}
export default Footer;    