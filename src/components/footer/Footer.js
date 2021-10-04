import React from 'react'
import './Footer.css'

function Footer() {
    return (
    <>
        <footer id='footer'>
            <div className='container'>
                <div className='flex-container'>
                    <ul className='footer-menu'>
                        <li className='footer-item'>
                            <a href="mailto: wicsccny@gmail.com">
                            <img width='50px' src="https://img.icons8.com/carbon-copy/400/ffffff/gmail.png" alt=""/>
                            </a>
                        </li>

                        <li className='footer-item'>
                            <a href="https://www.instagram.com/wics.ccny/?hl=en">
                            <img width='50px' src="https://img.icons8.com/carbon-copy/400/ffffff/instagram-new--v1.png" alt=""/>
                            </a>
                        </li>
                        
                        <li className='footer-item'>
                            <a href="https://facebook.com/">
                            <img width='50px' src="https://img.icons8.com/carbon-copy/400/ffffff/facebook.png" alt=""/>
                            </a>
                        </li> 
                        
                        <li className='footer-item'>
                            <a href="https://www.linkedin.com/in/">
                            <img width='50px' src="https://img.icons8.com/carbon-copy/400/ffffff/linkedin.png" alt=""/>
                            </a>
                        </li>                
                    </ul> 
                </div>   
                <p style={{color: '#FFFFFF'}}>Copyright &copy; 2021 CCNY Wics.  All Rights Reserved</p>
            </div>
        </footer> 
    </>
  )
}

export default Footer