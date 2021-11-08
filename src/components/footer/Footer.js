import React from 'react'
import './Footer.css'

function Footer() {
    return (
    <>
        <footer id='subscribe'>
                    <div className='footer-container'>
                        <h2>Subscribe to our newsletter!</h2>
                        <p className='copy'>Sign up to never miss out on opportunities and events.</p>
                    
                        <form action="#" method="post" name="sign up">
                            <div className="input">
                                <input type="text" id="email" name="email" placeholder="Email" />
                                <input type="submit" id="submit" value="SUBSCRIBE" />
                            </div>
                        </form>
                    </div>
                    <div className='footer-menu'>
                        <div className='footer-item'>
                            <a rel="noreferrer" target="_blank" href="mailto: wicsccny@gmail.com">
                            <img width='50px' src="https://img.icons8.com/carbon-copy/400/56599E/gmail.png" alt=""/>
                            </a>
                        </div>

                        <div className='footer-item'>
                            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/wics.ccny/?hl=en">
                            <img width='50px' src="https://img.icons8.com/carbon-copy/400/56599E/instagram-new--v1.png" alt=""/>
                            </a>
                        </div>
                        
                        <div className='footer-item'>
                            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/groups/ccnywics">
                            <img width='50px' src="https://img.icons8.com/carbon-copy/400/56599E/facebook.png" alt=""/>
                            </a>
                        </div> 
                        
                        <div className='footer-item'>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/women-in-computer-science-at-ccny/">
                            <img width='50px' src="https://img.icons8.com/carbon-copy/400/56599E/linkedin.png" alt=""/>
                            </a>
                        </div>                 
                    </div>   
                    <p className='copy'>Copyright &copy; 2021 CCNY Wics.  All Rights Reserved</p>
        </footer> 
    </>
  )
}

export default Footer