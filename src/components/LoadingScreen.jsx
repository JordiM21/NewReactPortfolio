import React from 'react';
import loadingScreen from '../styles/loadingScreen.css'

const LoadingScreen = () => {
    return (
        <div className='complete-loader'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadingScreen;