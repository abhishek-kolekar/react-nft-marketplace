import React from 'react'
import './header.css' 
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'

const header = () => {
    return ( 
        <div className = 'header'>
            
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt=''/>
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                <img src={searchIcon}></img>
                </div>
                <input className='searchInput' 
                    placeholder='Collection,item or ud=ser...'
                />
            </div>
            <div className='headerItems'>
                <p>Drop</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <div className='theameSwitchContainer'>
                <img src={themeSwitch}></img>
                </div>
            </div>

            <div className='loginButton'>
                GET IN
            </div>
        
         
        </div>
    )
}
export default header
