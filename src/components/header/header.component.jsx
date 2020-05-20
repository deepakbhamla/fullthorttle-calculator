import React from 'react'
import logo2 from './logo2.png'
import './header.style.css'
import SwipeableTemporaryDrawer from '../sidebar/sidebar.component'

export const Header= () => {
    return (
        <div className='header'>
                    <img src={logo2} className="App-logo"  alt="logo" />
                 <span className='git'>  <ion-icon name="logo-github"></ion-icon>
             </span> 
                

         
        </div>
    )
}
