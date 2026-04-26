import { useState, useEffect } from 'react';

import { Assets } from '../constants/assets.js';

import Header from '../components/Header.jsx';
import Avatar from '../components/Avatar.jsx';
import Banners from '../components/Banners.jsx';
import { Intro, ProjectsIntro, ExperienceIntro } from '../components/SectionIntros.jsx';
import { ButtonRow, ProjectsButtonRow } from '../components/Buttons.jsx';
import TechStackMarquee from '../components/TechStack.jsx';
import ProjectsCarousel from '../components/Projects.jsx';
import ExperienceCard from '../components/Experience.jsx';
import { ServicesRowRight, ServicesRowLeft } from '../components/Services.jsx';
import { Testimonials, Testimonials2 } from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';
import ServicePopup from '../components/ServicePopup.jsx';
import Gap from '../components/Gap.jsx';

export default function HomePage() {
    const [activeService, setActiveService] = useState(null);

    useEffect(() => {
        document.title = 'Maaz | Software Engineer';
    }, []);

    return (
        <>
            <div id="home">
                <Avatar />
            </div>
            <Banners />
            <Intro />
            <ButtonRow />
            <Gap size={60} orientation="vertical" />

            <div className="techStackBackground">
                <Gap size={20} orientation="vertical"></Gap>
                <TechStackMarquee />
                <Gap size={20} orientation="vertical"></Gap>
            </div>

            <Gap size={150} orientation="vertical" className="sectionGap"></Gap>

            <div className="banner" id="projects">
                <p>
                    <span className="gradientProjects">Excellence,</span> Delivered!
                </p>
            </div>
            <ProjectsIntro />
            <Gap size={10} orientation="vertical"></Gap>

            <ProjectsCarousel />

            <Gap size={50} orientation="vertical"></Gap>
            <ProjectsButtonRow />
            <Gap size={180} orientation="vertical" className="sectionGap"></Gap>

            <div className="banner" id="experience">
                <p>
                    Experience? <span className="gradientExperience">5 years!</span>
                </p>
            </div>
            <ExperienceIntro />
            <Gap size={20} orientation="vertical"></Gap>

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
                delay={1.0}
            />

            <ExperienceCard
                logo={Assets.logos.appickLogo}
                role="Flutter Developer"
                company="Appick"
                duration="2020 - 2022"
                description="I have a proven track record of managing and deploying critical features for multiple production-grade, high-traffic applications. My work ensures that applications are not just deployed, but that they represent validated, robust, and impactful success stories for the business."
                delay={2.0}
            />

            <Gap size={180} orientation="vertical" className="sectionGap"></Gap>

            <section className="homeServicesSection" aria-labelledby="home-services-heading">
                <div className="homeServicesSectionAmbient" aria-hidden="true">
                    <div className="homeServicesSectionGlow" />
                </div>
                <div className="homeServicesSectionInner">
                    <div className="banner" id="home-services-heading">
                        <p>Elevate your</p>
                        <Gap size={10} orientation="vertical"></Gap>
                        <p>
                            <span className="gradientServices">digital footprint!</span>
                        </p>
                    </div>
                    <Gap size={100} orientation="vertical" className="sectionGap" />

                    <ServicesRowRight setActiveService={setActiveService} />

                    <ServicesRowLeft setActiveService={setActiveService} />
                </div>
            </section>

            <Gap size={200} orientation="vertical" className="sectionGap" />

            <section className="homeTestimonialsSection" aria-labelledby="home-testimonials-heading">
                <div className="homeTestimonialsSectionAmbient" aria-hidden="true">
                    <div className="homeTestimonialsSectionGlow" />
                </div>
                <div className="homeTestimonialsSectionInner">
                    <div className="banner" id="home-testimonials-heading">
                        <p>
                            What <span className="gradientTestimonials">others say!</span>
                        </p>
                    </div>

                    <Gap size={100} orientation="vertical" className="sectionGap" />

                    <Testimonials />
                    <Testimonials2 />
                </div>
            </section>

            <Gap size={100} orientation="vertical" />

            <Gap size={100} orientation="vertical" />

            <div id="contact">
                <Contact />
            </div>

            <ServicePopup activeService={activeService} onClose={() => setActiveService(null)} />
        </>
    );
}
