import './App.css';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import event1 from './assets/events/1.svg'
import event2 from './assets/events/2.svg'
import event3 from './assets/events/3.svg'
import Footer from './components/footer/Footer';
import hero from './assets/header-pic.svg'
import niha from './assets/team/niha.svg'
import ange from './assets/team/ange.svg'
import lily from './assets/team/lily.svg'
import grace from './assets/team/grace.svg'
import val from './assets/team/val.svg'
import uzma from './assets/team/uzma.svg'
import chidera from './assets/team/chidera.svg'
import one from './assets/companies/1.svg'
import two from './assets/companies/2.svg'
import three from './assets/companies/3.svg'
import four from './assets/companies/4.svg'
import five from './assets/companies/5.svg'
import six from './assets/companies/6.svg'
import seven from './assets/companies/7.svg'
import eight from './assets/companies/8.svg'
import nine from './assets/companies/9.svg'
import ten from './assets/companies/10.svg'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className='hero'>
        <div className='flex-container'>
          <div className='hero-text'> 
            <h1>The Future is Female</h1>
            <p>CCNY WiCS aims to create a community that 
            supports the advancement of women in Computer Science, academia, 
            and in the industry‍.</p>
          </div>
          <div className='img-mask'><img src={hero} alt=''/></div>
        </div>
      </header>

      <About />
      
      <section id='events'>
            <div className='container'>
                <h2>Upcoming Events</h2>
                <div className='grid'>
                    <div className='event-poster'>
                        <div><img className='img-mask poster' src={event2} alt=''/></div>
                        <a target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSeCqUGQ3E0qUjwskZmCmDD8kYDJrqgDLzgrVu0XibeK_XzPGQ/viewform'><button>RSVP</button></a>
                    </div>
                    <div className='event-poster'>
                        <div><img className='img-mask poster' src={event1} alt=''/></div>
                        <a target="_blank" href='https://www.hackerrank.com/ccny-wics-coding-challenge'><button>RSVP</button></a>
                    </div>
                    <div className='event-poster'>
                        <div><img className='img-mask poster' src={event3} alt=''/></div>
                        <a target="_blank" href='https://docs.google.com/forms/d/1TctQ0jy5IGBVk_k1pSzrKE25z7wnGY16Njc88uCYGfM/viewform?edit_requested=true'><button>RSVP</button></a>
                    </div>
                </div>
            </div>
        </section> 

      <section id='members'>
        <div className='container'>
          <h2>Meet the Team</h2>
          <div className='team'>
            <div><img className='img-mask team-pics' src={grace} alt=''></img></div>
            <div><img className='img-mask team-pics' src={uzma} alt=''></img></div>
            <div><img className='img-mask team-pics' src={ange} alt=''></img></div>
            <div><img className='img-mask team-pics' src={lily} alt=''></img></div>
            <div><img className='img-mask team-pics' src={niha} alt=''></img></div>
            <div><img className='img-mask team-pics' src={val} alt=''></img></div>
            <div><img className='img-mask team-pics' src={chidera} alt=''></img></div>
          </div>
        </div>
      </section>

      <section id='collabs' className='purple'>
        <div className='container'>
          <h2>Past Collaborators</h2>
          <p className='copy'>In the past we have invited professionals from top companies 
                  to give our members a chance to network <br></br> and gain amazing opportunities at 
                  their dream company!</p>
          <div className='collabs-grid'>
            <div><img className='company' src={one} alt=''></img></div>
            <div><img className='company' src={two} alt=''></img></div>
            <div><img className='company' src={three} alt=''></img></div>
            <div><img className='company' src={four} alt=''></img></div>
            <div><img className='company' src={five} alt=''></img></div>
            <div><img className='company' src={six} alt=''></img></div>
            <div><img className='company' src={seven} alt=''></img></div>
            <div><img className='company' src={eight} alt=''></img></div>
            <div><img className='company' src={nine} alt=''></img></div>
            <div><img className='company' src={ten} alt=''></img></div>
          </div>
        </div>
      </section>
  
      <Footer />
    </div>
  );
}

export default App;
