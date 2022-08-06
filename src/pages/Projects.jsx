import React from 'react';
import projects from '../styles/projects.css'
import reactEcommerce from '../assets/react-ecommerce.png'
import reactHttpMethods from '../assets/react-http-methods.png'
import reactPokedex from '../assets/react-pokedex.png'
import reactRickMorty from '../assets/react-rick-morty.png'

const Projects = () => {
    return (
        <div className='main'>
            <header className='header'>
                <h1>
                    <span>M</span>
                    <span>y</span>
                    <span> </span>
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>j</span>
                    <span>e</span>
                    <span>c</span>
                    <span>t</span>
                    <span>s</span>
                </h1>
            </header>
            <div className='flex-project-container'>
                <div className='coding-section'>
                    <h1>
                        Coding
                    </h1>
                    <div>
                        <a href="https://react-ecommerce-jordi.netlify.app" target='_blank'>
                            <p className='title1'>React Ecommerce</p>
                            <img src={reactEcommerce} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="https://rick-morty-jordiapi.netlify.app" target='_blank'>
                            <p className='title2'>React Rick and Morty's Crud</p>
                            <img src={reactRickMorty} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="https://pokedex-react-redux-jordi.netlify.app" target='_blank'>
                            <p className='title3'>React Pokedex</p>
                            <img src={reactPokedex} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="https://users-crud-http-methods.netlify.app" target='_blank'>
                            <p className='title4'>Http User Methods</p>
                            <img src={reactHttpMethods} alt="" />
                        </a>
                    </div>
                </div>
                <div className='coding-section'>
                    <h1>
                        Design
                    </h1>
                    <div>
                        <p className='title1'>React Ecommerce</p>
                        <img src={reactEcommerce} alt="" />
                    </div>
                    <div>
                        <p className='title2'>React Rick and Morty's Crud</p>
                        <img src={reactRickMorty} alt="" />
                    </div>
                    <div>
                        <p className='title3'>React Pokedex</p>
                        <img src={reactPokedex} alt="" />
                    </div>
                    <div>
                        <p className='title4'>Http User Methods</p>
                        <img src={reactHttpMethods} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;