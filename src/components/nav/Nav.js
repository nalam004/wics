import React, { useState, useEffect } from 'react';
import './Nav.css'; 
import logo from '../../assets/logo.png'

function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        let listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 120) {
            if (scrollState !== "not_top") {
            setScrollState("not_top")
            }
        } else {
            if (scrollState !== "top") {
            setScrollState("top")
            }
        }
        })
        return () => {
        document.removeEventListener("scroll", listener)
        }
    }, [scrollState])

    return (
    <>
            <nav className='navbar' style={{boxShadow: scrollState === "top" ? "none" : "0 2px 2px -2px rgba(0,0,0,.2)"}}>
                  <div className='nav-container'>
                            <img className='logo' width='40px' src={logo} alt=''/>
                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>
                            
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>   
                                    <a className='nav-link from-center' onClick={closeMobileMenu} href="#about">About</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link from-center' onClick={closeMobileMenu} href="#events">Events</a>    
                                </li> 
                                <li className='nav-item'>
                                    <a className='nav-link from-center' onClick={closeMobileMenu} href="#members">Members</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link from-center' onClick={closeMobileMenu} href="#collabs">Collaborators</a>
                                </li>
                            </ul>    
                        </div>
            </nav> 
    </>
  )
}

export default Nav