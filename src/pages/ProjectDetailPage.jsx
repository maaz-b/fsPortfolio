import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { Assets } from '../constants/assets.js';
import { getProjectById } from '../constants/projectsData.js';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';
import { useParallax } from '../hooks/useParallax.js';
import Gap from '../components/Gap.jsx';

function CodePanel({ title, language, code }) {
    return (
        <div className="codePanel projectDetailReveal">
            <div className="codePanelHeader">
                <span className="codePanelTitle">{title}</span>
                <span className="codePanelLang">{language}</span>
            </div>
            <pre className="codePanelBody">
                <code>{code.trimEnd()}</code>
            </pre>
        </div>
    );
}

function StoreLinks({ storeLinks }) {
    if (!storeLinks?.googlePlay && !storeLinks?.appStore) return null;

    return (
        <div className="projectDetailStoreRow">
            {storeLinks.googlePlay ? (
                <a
                    className="storeBadge storeBadgeGoogle"
                    href={storeLinks.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Assets.icons.googleplay} alt="" className="storeBadgeIcon" width={26} height={26} />
                    <span className="storeBadgeText">
                        <span className="storeBadgeKicker">Get it on</span>
                        <span className="storeBadgeTitle">Google Play</span>
                    </span>
                </a>
            ) : null}
            {storeLinks.appStore ? (
                <a
                    className="storeBadge storeBadgeApple"
                    href={storeLinks.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Assets.icons.appstore} alt="" className="storeBadgeIcon" width={26} height={26} />
                    <span className="storeBadgeText">
                        <span className="storeBadgeKicker">Download on the</span>
                        <span className="storeBadgeTitle">App Store</span>
                    </span>
                </a>
            ) : null}
        </div>
    );
}

function MockupGallery({ mockups, asideText, projectId }) {
    const mockCopyRef = useRef(null);
    const mockFramesRef = useRef(null);
    const pb = parallaxBlock(projectId);
    useParallax(mockCopyRef, { direction: 'left', ...pb });
    useParallax(mockFramesRef, { direction: 'right', ...pb });
    const pair = (mockups ?? []).slice(0, 2);

    if (pair.length === 0) return null;

    const copy = asideText?.trim() || '';

    return (
        <section className="projectDetailSection projectDetailMockupsBand">
            <div className="projectDetailMockupsPanel">
                <div className="projectDetailMockupsLayout">
                    <div ref={mockCopyRef} className="projectDetailMockupsCopy">
                        <span className="projectDetailMockupsRule" aria-hidden="true" />
                        {copy ? <p className="projectDetailMockupsText">{copy}</p> : null}
                    </div>
                    <div ref={mockFramesRef} className="projectDetailMockupsFrames">
                        {pair.map((item, index) => (
                            <div key={`${item.src}-${index}`} className="projectDetailMockupCell">
                                <figure className="projectDetailMockupFigure">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="projectDetailMockupImg"
                                        loading="lazy"
                                    />
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const parallaxBlock = (projectId) => ({
    multiplier: 2.5,
    distance: 150,
    depKey: projectId,
});

export default function ProjectDetailPage() {
    const { projectId } = useParams();
    const project = getProjectById(projectId);

    const codeBandRef = useRef(null);
    const overviewRef = useRef(null);
    const highlightsRef = useRef(null);

    const pb = parallaxBlock(projectId);

    useParallax(codeBandRef, { direction: 'left', ...pb });
    useParallax(overviewRef, { direction: 'left', ...pb });
    useParallax(highlightsRef, { direction: 'right', ...pb });

    useRevealOnScroll('.projectDetailReveal', projectId);

    useEffect(() => {
        if (project) document.title = `${project.title} | Maaz`;
    }, [project]);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    const accentFrom = project.detailTheme?.accentFrom ?? '#ff8660';
    const accentTo = project.detailTheme?.accentTo ?? '#9a33ff';

    return (
        <div
            className="projectDetailPage"
            key={projectId}
            style={{
                '--pd-accent-from': accentFrom,
                '--pd-accent-to': accentTo,
            }}
        >
            <div className="projectDetailAmbient" aria-hidden="true">
                <div className="projectDetailOrb projectDetailOrbA" />
                <div className="projectDetailOrb projectDetailOrbB" />
                <div className="projectDetailGrain" />
            </div>

            <div className="projectDetailMain">
                <Gap size={72} orientation="vertical" />
                <div className="projectDetailBackRow">
                    <Link to="/projects" className="projectDetailBack">
                        ← All projects
                    </Link>
                </div>
                <Gap size={40} orientation="vertical" />

                <header className="projectDetailHero">
                    <div className="projectDetailHeroBento">
                        <div className="projectDetailHeroCopy">
                            <div className="projectDetailHeroKickerRow">
                                <span className="projectDetailHeroLine" aria-hidden="true" />
                                <p className="projectDetailEyebrow">
                                    {project.year} · {project.role}
                                </p>
                            </div>
                            <h1 className="projectDetailTitle">{project.title}</h1>
                            <p className="projectDetailTagline">{project.tagline}</p>
                            <div className="projectDetailStackRow">
                                {project.stack.map((t) => (
                                    <span key={t} className="projectDetailChip">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <Gap size={20} orientation="vertical" />
                            <StoreLinks storeLinks={project.storeLinks} />
                        </div>
                        <div className="projectDetailHeroVisual">
                            <div className="projectDetailHeroVisualRing" aria-hidden="true" />
                            <div className="projectDetailHeroVisualInner">
                                <div className="projectDetailHeroParallax">
                                    <img
                                        src={project.detailHeroImage ?? project.image}
                                        alt=""
                                        className="projectDetailHeroImg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Gap size={104} orientation="vertical" />

                <section className="projectDetailSection">
                    <div ref={overviewRef} className="projectDetailProseCard">
                        <h2 className="projectDetailSectionTitle">Overview</h2>
                        <p className="projectDetailBody">{project.shortDescription}</p>
                    </div>
                </section>

                <Gap size={40} orientation="vertical" />

                <section className="projectDetailSection">
                    <div
                        ref={highlightsRef}
                        className="projectDetailProseCard projectDetailProseCard--highlights"
                    >
                        <h2 className="projectDetailSectionTitle">Highlights</h2>
                        <ul className="projectDetailList projectDetailList--accent">
                            {project.highlights.map((line) => (
                                <li key={line}>{line}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <Gap size={48} orientation="vertical" />

                <MockupGallery
                    mockups={project.mockups}
                    asideText={project.mockupAside ?? project.shortDescription}
                    projectId={projectId}
                />

                {project.mockups?.length ? <Gap size={48} orientation="vertical" /> : null}

                <section className="projectDetailCodeSection">
                    <div ref={codeBandRef} className="projectDetailCodeBand">
                        <h2 className="projectDetailSectionTitle">Implementation notes</h2>
                        <p className="projectDetailLead">
                            Representative patterns from the codebase—scheduling, geometry, data models, and
                            sync—illustrating how features were structured for clarity and scale.
                        </p>
                    </div>
                    <Gap size={24} orientation="vertical" />
                    <div className="projectDetailCodeGrid">
                        {project.snippets.map((snippet) => (
                            <CodePanel key={snippet.title} {...snippet} />
                        ))}
                    </div>
                </section>

                <Gap size={64} orientation="vertical" />

                <div className="projectDetailFooterCta projectDetailReveal">
                    <Link to="/projects" className="buttonSecondary">
                        More projects
                    </Link>
                    <Link to="/contact" className="buttonPrimary projectDetailContactBtn">
                        Start a conversation
                    </Link>
                </div>
                <Gap size={80} orientation="vertical" />
            </div>
        </div>
    );
}
