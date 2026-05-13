import { Link } from 'react-router-dom';

import { getProjectById, projects } from '../constants/projectsData.js';

const PREFERRED_IDS = ['myskool', 'quranly', 'scope-inspect'];

function getShowcaseItems() {
    const out = [];
    for (const id of PREFERRED_IDS) {
        const p = getProjectById(id);
        if (p?.mockups?.[0]) out.push({ project: p, shot: p.mockups[0] });
    }
    if (out.length < 3) {
        for (const p of projects) {
            if (out.some((o) => o.project.id === p.id)) continue;
            if (p.mockups?.[0]) out.push({ project: p, shot: p.mockups[0] });
            if (out.length >= 3) break;
        }
    }
    return out.slice(0, 3);
}

const POSITIONS = ['left', 'center', 'right'];

export default function HeroProjectsWShowcase({ className = '' }) {
    const items = getShowcaseItems();
    if (items.length === 0) return null;

    return (
        <Link
            to="/projects"
            className={['heroWShowcase', className].filter(Boolean).join(' ')}
            aria-label="View all portfolio projects"
        >
            <span className="heroWShowcaseGlow" aria-hidden="true" />
            <span className="heroWShowcaseSheen" aria-hidden="true" />

            <div className="heroWShowcaseFrame">
                <div className="heroWShowcaseStage">
                    {items.map(({ project, shot }, i) => (
                        <div
                            key={project.id}
                            className={`heroWShowcaseCard heroWShowcaseCard--${POSITIONS[i] ?? 'left'}`}
                        >
                            <div className="heroWShowcaseBezel">
                                <img
                                    src={shot.src}
                                    alt={shot.alt || `${project.title} screenshot`}
                                    className="heroWShowcaseImg"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="heroWShowcaseRail" aria-hidden="true" />

                <div className="heroWShowcaseFooter">
                    <span className="heroWShowcaseCta">Explore all projects</span>
                    <span className="heroWShowcaseArrow">→</span>
                </div>
            </div>
        </Link>
    );
}
