import React, { useState, useEffect } from 'react';
import './Nav.css'; 
import logo from '../../assets/logo.svg'

function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    let listener = null
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
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
            <nav className='navbar' style={{background: scrollState === "top" ? "linear-gradient(180deg, rgba(175, 177, 232, 0.864583) 12.5%, rgba(175, 177, 232, 0.717604) 41.15%, rgba(175, 177, 232, 0.406354) 78.65%, rgba(30, 33, 38, 0) 100%)" : "rgb(175, 177, 232)"}}>
                  <div className='nav-container'>
                            <img width='90px' src={logo} alt=''/>
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