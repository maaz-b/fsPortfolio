import { useState } from 'react'

import './App.css'
import { Assets } from './constants/assets.js'

// Components
import Header from './components/Header.jsx'
import Avatar from './components/Avatar.jsx'
import Banners from './components/Banners.jsx'
import { Intro, ProjectsIntro, ExperienceIntro } from './components/SectionIntros.jsx'
import { ButtonRow, ProjectsButtonRow } from './components/Buttons.jsx'
import TechStackMarquee from './components/TechStack.jsx'
import ProjectsCarousel from './components/Projects.jsx'
import ExperienceCard from './components/Experience.jsx'
import { ServicesRowRight, ServicesRowLeft } from './components/Services.jsx'
import { Testimonials, Testimonials2 } from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import ServicePopup from './components/ServicePopup.jsx'
import Gap from './components/Gap.jsx'
import { useEffect } from 'react';

function App() {
  const [activeService, setActiveService] = useState(null);
  useEffect(() => {
    document.title = "Maaz | Software Engineer";
  }, []);

  return (
    <>
      <Header />
      <div id="home">
        <Avatar />
      </div>
      <Banners />
      <Intro />
      <ButtonRow />
      <Gap size={60} orientation='vertical' />

      <div className='techStackBackground'>
        <Gap size={20} orientation='vertical'></Gap>
        <TechStackMarquee />
        <Gap size={20} orientation='vertical'></Gap>
      </div>

      <Gap size={150} orientation='vertical' className="sectionGap"></Gap>

      <div className='banner' id="projects">
        <p><span className='gradientProjects'>Excellence,</span> Delivered!</p>
      </div>
      <ProjectsIntro />
      <Gap size={10} orientation='vertical'></Gap>

      <ProjectsCarousel />

      <Gap size={50} orientation='vertical'></Gap>
      <ProjectsButtonRow />
      <Gap size={180} orientation='vertical' className="sectionGap"></Gap>

      <div className='banner' id="experience">
        <p>Experience? <span className='gradientExperience'>5 years!</span></p>
      </div>
      <ExperienceIntro />
      <Gap size={20} orientation='vertical'></Gap>

      <ExperienceCard
        logo={Assets.logos.lbLogo}
        role="Senior Software Engineer"
        company="Launchbox"
        duration="2024 - Present"
        description="I have a proven track record of managing and deploying critical features for multiple production-grade, high-traffic applications. My work ensures that applications are not just deployed, but that they represent validated, robust, and impactful success stories for the business."
      />

      <ExperienceCard
        logo={Assets.logos.doozieLogo}
        role="Software Engineer (Mobile)"
        company="Doozie Labs"
        duration="2022 - 2024"
        description="I have a proven track record of managing and deploying critical features for multiple production-grade, high-traffic applications. My work ensures that applications are not just deployed, but that they represent validated, robust, and impactful success stories for the business."
        delay={1.0} // Kept prop even if specialized usage was removed, component handles style internally now via useParallax which mostly ignores delay prop or uses it differently? 
      // Wait, I removed the delay prop from my ExperienceCard implementation in previous step as useParallax handles it via scroll. 
      // Passing it here is harmless but useless.
      />

      <ExperienceCard
        logo={Assets.logos.appickLogo}
        role="Flutter Developer"
        company="Appick"
        duration="2020 - 2022"
        description="I have a proven track record of managing and deploying critical features for multiple production-grade, high-traffic applications. My work ensures that applications are not just deployed, but that they represent validated, robust, and impactful success stories for the business."
        delay={2.0}
      />

      <Gap size={180} orientation='vertical' className="sectionGap"></Gap>

      <div className='banner'>
        <p>Elevate your</p>
        <Gap size={10} orientation='vertical'></Gap>
        <p><span className='gradientServices'>digital footprint!</span></p>
      </div>
      <Gap size={100} orientation="vertical" className="sectionGap" />

      <ServicesRowRight setActiveService={setActiveService} />

      {/* <Gap className="servicesGap" size={30} orientation="vertical" /> */}

      <ServicesRowLeft setActiveService={setActiveService} />

      <Gap size={200} orientation="vertical" className="sectionGap" />

      <div className='banner'>
        <p>What <span className='gradientTestimonials'>others say!</span></p>
      </div>

      <Gap size={100} orientation="vertical" className="sectionGap" />

      <Testimonials />
      <Testimonials2 />

      <Gap size={100} orientation="vertical" />

      <Gap size={100} orientation="vertical" />

      <div id="contact">
        <Contact />
      </div>

      <ServicePopup activeService={activeService} onClose={() => setActiveService(null)} />
    </>
  )
}

export default App
