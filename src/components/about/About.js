import React from 'react'
import './About.css'
import professional from '../../assets/professional.svg'
import academic from '../../assets/academic.svg'
import social from '../../assets/social.svg'

function About() {
    return (
    <>
        <section id='about' className='purple'>
            <div className='container'>
                <h2 className='heading'>What we do?</h2>
                <p className='blurb'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Eos numquam vitae provident nisi placeat sapiente accusantium 
                    aspernatur, saepe repellat impedit laboriosam animi odit, dolor ad! 
                    Obcaecati sint nulla debitis ipsum.</p>
                <div className='about-grid'>
                    <div className='about-card'>
                        <div className='img-mask'><img src={professional} alt=''/></div>
                        <h3>Professional</h3>
                        <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Eos numquam vitae provident nisi placeat sapiente accusantium 
                            aspernatur, saepe repellat impedit laboriosam animi odit, dolor ad! 
                            Obcaecati sint nulla debitis ipsum.</p>
                    </div>
                    <div className='about-card'>
                        <div className='img-mask'><img src={academic} alt=''/></div>
                        <h3>Acadmeic</h3>
                        <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Eos numquam vitae provident nisi placeat sapiente accusantium 
                            aspernatur, saepe repellat impedit laboriosam animi odit, dolor ad! 
                            Obcaecati sint nulla debitis ipsum.</p>
                    </div>
                    <div className='about-card'>
                        <div className='img-mask'><img src={social} alt=''/></div>
                        <h3>Social</h3>
                        <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Eos numquam vitae provident nisi placeat sapiente accusantium 
                            aspernatur, saepe repellat impedit laboriosam animi odit, dolor ad! 
                            Obcaecati sint nulla debitis ipsum.</p>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default About