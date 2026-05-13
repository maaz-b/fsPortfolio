import { useEffect } from 'react';

import HomeHero from '../components/HomeHero.jsx';
import { ProjectsIntro, ExperienceIntro } from '../components/SectionIntros.jsx';
import { ProjectsButtonRow } from '../components/Buttons.jsx';
import TechStackMarquee from '../components/TechStack.jsx';
import ProjectsCarousel from '../components/Projects.jsx';
import ExperienceTimeline from '../components/Experience.jsx';
import { ServicesBento } from '../components/Services.jsx';
import { Testimonials, Testimonials2 } from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';

export default function HomePage() {
    useEffect(() => {
        document.title = 'Maaz | Software Engineer';
    }, []);

    return (
        <main className="homePage">
            <HomeHero />
            <div className="homeSpacer homeSpacer--block" aria-hidden="true" />

            <div className="techStackBackground">
                <div className="homeSpacer homeSpacer--xs" aria-hidden="true" />
                <TechStackMarquee />
                <div className="homeSpacer homeSpacer--xs" aria-hidden="true" />
            </div>

            <div className="homeSpacer homeSpacer--section" aria-hidden="true" />

            <div className="banner" id="projects">
                <p>
                    <span className="gradientProjects">Excellence,</span> Delivered!
                </p>
            </div>
            <ProjectsIntro />
            <div className="homeSpacer homeSpacer--xs" aria-hidden="true" />

            <ProjectsCarousel />

            <div className="homeSpacer homeSpacer--tight" aria-hidden="true" />
            <ProjectsButtonRow />
            <div className="homeSpacer homeSpacer--section" aria-hidden="true" />

            <section className="experienceSection" id="experience" aria-labelledby="experience-heading">
                <div className="experienceSectionAmbient" aria-hidden="true">
                    <div className="experienceSectionGlow" />
                </div>
                <div className="experienceSectionInner">
                    <header className="experienceSectionHeader">
                        <h2 id="experience-heading" className="experienceSectionTitle">
                            Experience <span className="gradientExperience">5 years</span>
                        </h2>
                    </header>
                    <ExperienceIntro />
                    <ExperienceTimeline />
                </div>
            </section>

            <div className="homeSpacer homeSpacer--section" aria-hidden="true" />

            <section className="homeServicesSection" id="services" aria-labelledby="home-services-heading">
                <div className="homeServicesSectionAmbient" aria-hidden="true">
                    <div className="homeServicesSectionGlow" />
                </div>
                <div className="homeServicesSectionInner">
                    <div className="banner" id="home-services-heading">
                        <p>Elevate your</p>
                        <div className="homeSpacer homeSpacer--xs" aria-hidden="true" />
                        <p>
                            <span className="gradientServices">digital footprint!</span>
                        </p>
                    </div>
                    <div className="homeSpacer homeSpacer--block" aria-hidden="true" />

                    <ServicesBento />
                </div>
            </section>

            <div className="homeSpacer homeSpacer--2xl" aria-hidden="true" />

            <section className="homeTestimonialsSection" id="testimonials" aria-labelledby="home-testimonials-heading">
                <div className="homeTestimonialsSectionAmbient" aria-hidden="true">
                    <div className="homeTestimonialsSectionGlow" />
                </div>
                <div className="homeTestimonialsSectionInner">
                    <div className="banner" id="home-testimonials-heading">
                        <p>
                            What <span className="gradientTestimonials">others say!</span>
                        </p>
                    </div>

                    <div className="homeSpacer homeSpacer--block" aria-hidden="true" />

                    <Testimonials />
                    <Testimonials2 />
                </div>
            </section>

            <div className="homeSpacer homeSpacer--section" aria-hidden="true" />

            <div id="contact">
                <Contact />
            </div>
        </main>
    );
}
