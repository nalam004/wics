import React from 'react'
import professional from '../../assets/professional.svg'
import academic from '../../assets/academic.svg'
import social from '../../assets/social.svg'

function About() {
    return (
    <>
        <section id='about' className='purple'>
            <div className='container'>
                <h2>What we do?</h2>
                <div className='grid'>
                    <div className='card'>
                        <div><img className='about-img' src={professional} alt=''/></div>
                        <h3>Professional</h3>
                        <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Eos numquam vitae provident nisi placeat sapiente accusantium 
                            aspernatur, saepe repellat impedit laboriosam animi odit, dolor ad! 
                            Obcaecati sint nulla debitis ipsum.</p>
                    </div>
                    <div className='card'>
                        <div><img className='about-img' src={academic} alt=''/></div>
                        <h3>Acadmeic</h3>
                        <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Eos numquam vitae provident nisi placeat sapiente accusantium 
                            aspernatur, saepe repellat impedit laboriosam animi odit, dolor ad! 
                            Obcaecati sint nulla debitis ipsum.</p>
                    </div>
                    <div className='card'>
                        <div><img className='about-img' src={social} alt=''/></div>
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