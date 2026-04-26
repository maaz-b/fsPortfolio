import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { projects } from '../constants/projectsData.js';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';
import Gap from '../components/Gap.jsx';

export default function AllProjectsPage() {
    useRevealOnScroll('.allProjectsCard');

    useEffect(() => {
        document.title = 'All Projects | Maaz';
    }, []);

    return (
        <>
            <Gap size={56} orientation="vertical" />
            <div className="banner allProjectsBanner">
                <p>
                    <span className="gradientProjects">Selected</span> work
                </p>
            </div>
            <div className="row intro">
                <div className="introPara">
                    <p>
                        A curated set of shipped products and platforms—mobile-first experiences,
                        marketplaces, and education tooling—built for reliability under real traffic.
                    </p>
                </div>
            </div>
            <Gap size={36} orientation="vertical" />

            <div className="allProjectsGrid">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        className="allProjectsCard"
                    >
                        <div className="allProjectsCardInner">
                            <div className="allProjectsCardMedia">
                                <div className="allProjectsCardMediaFrame">
                                    <img src={project.thumb} alt="" className="allProjectsCardImg" />
                                </div>
                                <span className="allProjectsCardYearBadge">{project.year}</span>
                                <div className="allProjectsCardOverlay">
                                    <h2 className="allProjectsCardTitle">{project.title}</h2>
                                    <p className="allProjectsCardTagline">{project.tagline}</p>
                                </div>
                            </div>
                            <div className="allProjectsCardMeta">
                                <span className="allProjectsCardAccentBar" aria-hidden="true" />
                                <div className="allProjectsCardStacks">
                                    {project.stack.slice(0, 4).map((t) => (
                                        <span key={t} className="allProjectsChip">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="allProjectsCardFooter">
                                    <span className="allProjectsCardCtaLabel">Case study</span>
                                    <span className="allProjectsCardCtaIcon" aria-hidden="true">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M7 17L17 7M17 7H9M17 7V15"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Gap size={80} orientation="vertical" />
        </>
    );
}
