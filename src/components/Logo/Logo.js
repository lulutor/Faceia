import React from 'react';
import Tilt from 'react-tilt';
import FaceDog from './faceDog.jpg'; 
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa2"><img style={{marginTop:'10px', height: 120, width: 140}} alt='logo' src={FaceDog}/></div>
            </Tilt>
        </div>    
    )
}

export default Logo;