import React, { useEffect } from 'react';
import home from '../styles/home.css'
import LogoJ from '../assets/LogoJ.png'
import LogoM from '../assets/LogoM.png'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingThunk, setIsLoading } from '../store/slices/isLoading.slice';
import character from '../assets/JordiContactMe.png'


const Home = () => {
    const isLoading = useSelector(state => state.isLoading)
    const location = useLocation()
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getLoadingThunk(setIsLoading(true)))
      dispatch(getLoadingThunk(setIsLoading(false)))
    }, [location])
  
    return (
        <div className='main'>
            <img className='img-absolute' src={character} alt="" />
            <div className='home-title'>
            <h1>
                <span>H</span>
                <span>i</span> 
                <span>!</span>
                <span>,</span>
                <span> </span>   
                <span>I'</span>
                <span>m</span> <br />
                <img src={LogoJ} alt="" />
                <span>o</span>
                <span>r</span>
                <span>d</span>
                <span>i</span>
                <span> </span>
                <img style={{width: '80px', marginLeft:'20px'}} src={LogoM} alt="" />
                <span>a</span>
                <span>n</span>
                <span>t</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>a,</span>
                <br />
                <span>W</span>
                <span>e</span>
                <span>b</span>
                <span> </span>
                <span>F</span>
                <span>r</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>-</span>
                <span>E</span>
                <span>n</span>
                <span>d</span>
                <span> </span>
                <span>D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
            </h1>
            <h2>Web Developer/ Graphic Designer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        
    );
};

export default Home;