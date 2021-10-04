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
        <div className='container'>
          <div className='hero-text'> 
            <h1>The Future is Female</h1>
            <p style={{color: '#56599E'}} className='about'>CCNY WiCS aims to create a community that 
            supports the advancement of women in Computer Science, academia, 
            and in the industry‍CCNY WiCS aims to create a community that 
            supports the advancement of women in Computer Science, academia, 
            and in the industry</p>
          </div>
          <div className='img-mask'><img src={hero} alt=''/></div>
        </div>
      </header>

      <About />
      <Events />

      <section id='members'>
        <div className='container'>
          <h2 className='heading'>E-Board Members</h2>
          <ul className='members-grid'>
            <li><img src={grace} alt=''></img></li>
            <li><img src={uzma} alt=''></img></li>
            <li><img src={ange} alt=''></img></li>
            <li><img src={lily} alt=''></img></li>
            <li><img src={niharika} alt=''></img></li>
            <li><img src={val} alt=''></img></li>
            <li><img src={chidera} alt=''></img></li>
          </ul>
        </div>
      </section>

      <section id='collabs' className='purple'>
        <div className='container'>
          <h2 className='heading'>Past Collaborators</h2>
          <p className='blurb'>In the past we have invited professionals from top companies 
                  to give our members a chance to network and gain amazing opportunities at 
                  their dream company!</p>
          <ul className='collabs-grid'>
            <li><img src={one} alt=''></img></li>
            <li><img src={two} alt=''></img></li>
            <li><img src={three} alt=''></img></li>
            <li><img src={four} alt=''></img></li>
            <li><img src={five} alt=''></img></li>
            <li><img src={six} alt=''></img></li>
            <li><img src={seven} alt=''></img></li>
            <li><img src={eight} alt=''></img></li>
            <li><img src={nine} alt=''></img></li>
            <li><img src={ten} alt=''></img></li>
          </ul>
        </div>
      </section>

      <section id='subscribe'>
        <div className='container'>
          <h2 className='heading'>Subscribe to our newsletter!</h2>
          <p>Sign up to never miss out on opportunities and events.</p>
          <div>
            <input type="text" placeholder="Name" name="name" required />
            <input type="submit" value="Subscribe" />
          </div>
        </div>
      </section>
  
      <Footer />
    </div>
  );
}

export default App;
