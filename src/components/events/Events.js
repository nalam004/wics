import React from 'react'
import event1 from '../../assets/1.svg'
import event2 from '../../assets/2.svg'
import event3 from '../../assets/3.svg'

function Events() {
    return (
    <>
        <section id='events'>
            <div className='container'>
                <h2 className='heading'>Upcoming Events</h2>
                <div className='events-grid'>
                    <div className='event-poster'>
                        <div className='img-mask'><img src={event1} alt=''/></div>
                        <a href='https://linktr.ee/ccny.wics' className='rsvp-btn'>RSVP</a>
                    </div>
                    <div className='event-poster'>
                        <div className='img-mask'><img src={event2} alt=''/></div>
                        <a href='https://linktr.ee/ccny.wics' className='rsvp-btn'>RSVP</a>
                    </div>
                    <div className='event-poster'>
                        <div className='img-mask'><img src={event3} alt=''/></div>
                        <a href='https://linktr.ee/ccny.wics' className='rsvp-btn'>RSVP</a>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Events