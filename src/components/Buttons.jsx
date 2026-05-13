import { Link } from 'react-router-dom';

import { getCvDownloadUrl } from '../constants/site.js';

function IconMail({ size = 20 }) {
    return (
        <svg className="ctaBtnIcon" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M4 6h16v12H4V6zm0 0 8 6 8-6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconDownload({ size = 20 }) {
    return (
        <svg className="ctaBtnIcon" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M12 4v10m0 0 4-4.5M12 14 8 9.5M5 20h14"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconArrowRight({ size = 18 }) {
    return (
        <svg className="ctaBtnIcon" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M5 12h12m0 0-4.5-4.5M17 12l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function ButtonRow() {
    const cvUrl = getCvDownloadUrl();

    return (
        <div className="row ctaButtonRow">
            <Link className="ctaBtn ctaBtnPrimary buttonLink" to="/contact">
                <IconMail />
                <span>Get in touch</span>
            </Link>
            <a
                className="ctaBtn ctaBtnGhost"
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconDownload />
                <span>Download CV</span>
            </a>
        </div>
    );
}

export function ProjectsButtonRow() {
    return (
        <div className="row ctaButtonRow">
            <Link className="ctaBtn ctaBtnOutline buttonLink" to="/projects">
                <span>See all projects</span>
                <IconArrowRight />
            </Link>
        </div>
    );
}
