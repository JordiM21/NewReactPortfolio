import React from 'react';
import navBar from '../styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import LogoJM from '../assets/LogoJM.png'
import Movement from '../assets/Movement.png'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='logo'>
                    <a href="/#/" className='nav-link'>
                    <span className='link-text'><img src={LogoJM} alt="" /></span>
                    <img className='movement' src={Movement} alt="" />
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="/#/" className='nav-link'>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                        <span className='link-text'>Home</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="/#/about" className='nav-link'>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                        <span className='link-text'>About</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="/#/projects" className='nav-link'>
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"  />  
                        <span className='link-text'>Projects</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="/#/contact" className='nav-link'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />  
                        <span className='link-text'>Contact Me</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;