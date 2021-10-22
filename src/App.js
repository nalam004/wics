import './App.css';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Events from './components/events/Events';
import Footer from './components/footer/Footer';
import hero from './assets/header-pic.svg'
import niharika from './assets/niharika.svg'
import ange from './assets/ange.svg'
import lily from './assets/lily.svg'
import grace from './assets/grace.svg'
import val from './assets/val.svg'
import uzma from './assets/uzma.svg'
import chidera from './assets/chidera.svg'
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
      <Events />

      <section id='members'>
        <div className='container'>
          <h2>E-Board Members</h2>
          <div className='grid'>
            <div><img className='img-mask' src={grace} alt=''></img></div>
            <div><img className='img-mask' src={uzma} alt=''></img></div>
            <div><img className='img-mask' src={ange} alt=''></img></div>
            <div><img className='img-mask' src={lily} alt=''></img></div>
            <div><img className='img-mask' src={niharika} alt=''></img></div>
            <div><img className='img-mask' src={val} alt=''></img></div>
            <div><img className='img-mask' src={chidera} alt=''></img></div>
          </div>
        </div>
      </section>

      <section id='collabs' className='purple'>
        <div className='container'>
          <h2>Past Collaborators</h2>
          <p className='copy'>In the past we have invited professionals from top companies 
                  to give our members a chance to network and gain amazing opportunities at 
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
