import React from 'react';
import contact from '../styles/contact.css'
import JordiContactMe from '../assets/JordiContactMe.png'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContactMe = () => {
    return (
        <div className='main'>
            <div className='contact-flex-container'>
                <div className='contact-left'>
                    <h1>
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                    <span> </span>
                    <span>M</span>
                    <span>e</span>
                    </h1>
                    <p><span>I'm always up for a chat</span> <br /><span> Pop me an email at</span></p>
                    <a className='send-email' target='_blank' href="mailto:jordimantilla21@gmail.com?Subject=Hey%20Jordi,%20i've%20just%20seen%20your%20portfolio">jordimantilla21@gmail.com</a>
                </div>
                <div className='contact-right'>
                    <img style={{maxWidth: '500px'}} src={JordiContactMe} alt="" />
                    <h2>Or give me a shut on social media</h2>
                    <div className='shut-social'>
                        <a href="https://www.linkedin.com/in/jordi-mantilla21/" target='_blank' className='nav-contact'>
                            <h3>LinkedIn</h3>
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>
                        <a href="https://github.com/JordiM21" target='_blank' className='nav-contact'>
                            <h3>GitHub</h3>
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                        <a href="https://www.instagram.com/jordi_mantilla/" target='_blank' className='nav-contact'>
                            <h3>Instagram</h3>
                            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;