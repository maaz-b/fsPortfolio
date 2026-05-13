import { ButtonRow } from './Buttons.jsx';
import HeroProjectsWShowcase from './HeroProjectsWShowcase.jsx';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';

export default function HomeHero() {
    useRevealOnScroll('.homeHeroReveal');

    return (
        <section id="home" className="homeHero" aria-labelledby="home-hero-heading">
            <div className="homeHeroAmbient" aria-hidden="true">
                <div className="homeHeroGlowPosition">
                    <div className="homeHeroGlow" />
                </div>
            </div>
            <div className="homeHeroInner">
                <div className="homeHeroGrid">
                    <div className="homeHeroCopyBlock homeHeroCopyBlock--stretch">
                        <p className="homeHeroEyebrow">Intro</p>
                        <h1 id="home-hero-heading" className="homeHeroTitle">
                            <span className="homeHeroTitleLine">Maaz Ur Rehman</span>
                        </h1>
                        <p className="homeHeroRole">
                            Software engineer — <span className="homeHeroRoleAccent">Flutter</span>, native mobile,
                            web, and backend systems.
                        </p>
                        <p className="homeHeroLead">
                            Five years shipping production software: habit-forming consumer apps, field tools with
                            offline sync, and ride platforms backed by real-time infrastructure. I own features end to
                            end—from UI polish to APIs and deployment—so what ships stays maintainable under load.
                        </p>
                        <div className="homeHeroTagline">
                            <span className="gradientWords">Efficient</span>
                            <span className="homeHeroTaglineSep">,</span>
                            <span className="gradientWords">deployable</span>
                            <span className="homeHeroTaglineEnd">, and built for real users.</span>
                        </div>

                        <ul className="homeHeroStats" aria-label="Highlights">
                            <li className="homeHeroStat">
                                <span className="homeHeroStatValue">5+</span>
                                <span className="homeHeroStatLabel">Years experience</span>
                            </li>
                            <li className="homeHeroStat">
                                <span className="homeHeroStatValue">20+</span>
                                <span className="homeHeroStatLabel">Shipped products</span>
                            </li>
                            <li className="homeHeroStat">
                                <span className="homeHeroStatValue">E2E</span>
                                <span className="homeHeroStatLabel">UI through APIs & release</span>
                            </li>
                        </ul>

                        <div className="homeHeroActions">
                            <ButtonRow />
                        </div>
                    </div>

                    <div className="homeHeroVisualBlock">
                        <HeroProjectsWShowcase className="homeHeroReveal" />
                    </div>
                </div>
            </div>
        </section>
    );
}
