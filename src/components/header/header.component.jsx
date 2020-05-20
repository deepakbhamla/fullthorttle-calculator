import React from 'react'
import logo2 from './logo2.png'
import './header.style.css'

export const Header= () => {
    return (
        <div className='header'>
                <img src={logo2} className="App-logo"  alt="logo" />
                <a src="https://github.com/itsdb7/fullthortle-calculator">
                    <span className='git'> 
                        <ion-icon name="logo-github"></ion-icon>
                    </span> 
                </a>  
        </div>
    )
}
