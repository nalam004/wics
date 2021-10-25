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
                        <p className='caption'>We host resume workshops, 
                        information sessions, tech panels, and more! We end the semester with our
                        Remote Tech Chat, where we invite professionals from your favorite 
                        companies to give you opportunities to network and connect.
                        </p>
                    </div>
                    <div className='card'>
                        <div><img className='about-img' src={academic} alt=''/></div>
                        <h3>Acadmeic</h3>
                        <p className='caption'>We provide technical workshops,  
                        study groups, and coding challenges! We even host hackathons.</p>
                    </div>
                    <div className='card'>
                        <div><img className='about-img' src={social} alt=''/></div>
                        <h3>Social</h3>
                        <p className='caption'>We organize fun events like picnics, game night, 
                        movie nights, and more! Come join us for our Lunch and Learn Sessions to 
                        learn something new from your peers.</p>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default About