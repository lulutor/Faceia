import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn}) => {
        
        if (isSignedIn) {
            return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link  color_navigation_links underline pa3 pointer'>Sign Out</p>
            </nav>
            );
        } else {
            return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link   underline pa3 pointer color_navigation_links'>Sign in</p>
                <p onClick={() => onRouteChange('register')} className='f3 link  underline pa3 pointer color_navigation_links'>Register</p>
            </nav>
            );
         } 
}

export default Navigation;