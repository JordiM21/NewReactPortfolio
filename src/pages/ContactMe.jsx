import React from 'react';
import contact from '../styles/contact.css'
import JordiContactMe from '../assets/JordiContactMe.png'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EnglishCV from '../assets/EnglishCV.pdf'


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
                    <div style={{maxWidth: '500px', maxHeight: '100vh', marginBottom:'80px'}}>
                        <p>I am always interested on turn ideas into reality and work on interesting projects, if you would like to know a bit more about me, you can</p>
                        <a className='send-email' download href={EnglishCV}>download my curriclum</a>
                        <p>Let's work together! i'm always up for a chat, pop me an email at</p>
                        <a className='send-email' target='_blank' href="mailto:jordimantilla21@gmail.com?Subject=Hey%20Jordi,%20i've%20just%20seen%20your%20portfolio">jordimantilla21@gmail.com</a>
                    </div>
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