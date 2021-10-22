import React from 'react'
import event1 from '../../assets/1.svg'
import event2 from '../../assets/2.svg'
import event3 from '../../assets/3.svg'

function Events() {
    return (
    <>
        <section id='events'>
            <div className='container'>
                <h2>Upcoming Events</h2>
                <div className='grid'>
                    <div className='event-poster'>
                        <div><img className='img-mask poster' src={event1} alt=''/></div>
                        <a href='https://linktr.ee/ccny.wics'><button>RSVP</button></a>
                    </div>
                    <div className='event-poster'>
                        <div><img className='img-mask poster' src={event2} alt=''/></div>
                        <a href='https://linktr.ee/ccny.wics'><button>RSVP</button></a>
                    </div>
                    <div className='event-poster'>
                        <div><img className='img-mask poster' src={event3} alt=''/></div>
                        <a href='https://linktr.ee/ccny.wics'><button>RSVP</button></a>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Events