import React, { useState } from 'react'
import './Nav.css'; 
import logo from '../../assets/logo.svg'

function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
 
    return (
    <>
            <nav className='navbar'>
                  <div className='nav-container'>
                            <img width='90px' src={logo} alt=''/>
                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>
                            
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>   
                                    <a className='nav-link' onClick={closeMobileMenu} href="#about">About</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' onClick={closeMobileMenu} href="#events">Events</a>    
                                </li> 
                                <li className='nav-item'>
                                    <a className='nav-link' onClick={closeMobileMenu} href="#members">Members</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' onClick={closeMobileMenu} href="#collabs">Collaborators</a>
                                </li>
                            </ul>    
                        </div>
            </nav> 
    </>
  )
}

export default Nav