import { useRef, useState } from 'react';

import { Assets } from '../constants/assets.js';
import {
    EXPERIENCE_APPICK_DESCRIPTION,
    EXPERIENCE_CLOUD_PRIMERO_DESCRIPTION,
    EXPERIENCE_DOOZIE_DESCRIPTION,
    EXPERIENCE_LAUNCHBOX_DESCRIPTION,
} from '../constants/homeExperienceCopy.js';
import { useTimelineScroll } from '../hooks/useTimelineScroll.js';

const EXPERIENCE_ITEMS = [
    {
        id: 'launchbox',
        logo: Assets.logos.lbLogo,
        role: 'Senior Software Engineer',
        company: 'Launchbox / Dexnive',
        duration: '2024 — Present',
        description: EXPERIENCE_LAUNCHBOX_DESCRIPTION,
    },
    {
        id: 'cloud-primero',
        logo: Assets.logos.cloudPrimeroLogo,
        role: 'Senior Flutter Developer',
        company: 'Cloud Primero B.V.',
        duration: 'Contract · 3 months',
        description: EXPERIENCE_CLOUD_PRIMERO_DESCRIPTION,
    },
    {
        id: 'doozie',
        logo: Assets.logos.doozieLogo,
        role: 'Software Engineer (Mobile)',
        company: 'Doozie Labs',
        duration: '2022 — 2024',
        description: EXPERIENCE_DOOZIE_DESCRIPTION,
    },
    {
        id: 'appick',
        logo: Assets.logos.appickLogo,
        role: 'Flutter Developer',
        company: 'Appick',
        duration: '2020 — 2022',
        description: EXPERIENCE_APPICK_DESCRIPTION,
    },
];

function TimelineDeco() {
    return (
        <svg className="experienceTimelineDecoSvg" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="100" cy="100" r="52" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.65" />
            <path
                d="M100 36 L100 118 M72 76 L128 76 M84 140 Q100 124 116 140"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                opacity="0.85"
            />
        </svg>
    );
}

function DurationBadge({ duration }) {
    return (
        <div className="experienceDurationBadgeWrap">
            <div className="experienceTimelineDeco">
                <TimelineDeco />
            </div>
            <span className="experienceDurationBadge">{duration}</span>
        </div>
    );
}

function TimelineContentBlock({ id, logo, role, company, duration, description }) {
    const titleId = `experience-role-${id}`;
    return (
        <div className="experienceTimelineContent">
            <div className="experienceTimelineHeadingBlock">
                <h3 className="experienceTimelineRoleTitle" id={titleId}>
                    {role}
                </h3>
                <p className="experienceTimelinePlaceLine">
                    <span className="experienceTimelinePlace">({company})</span>
                </p>
            </div>
            <article
                className="experienceCard experienceCard--timelineAlt"
                aria-labelledby={titleId}
            >
                <div className="experienceCardSurface experienceCardSurface--timelineBody">
                    <div className="experienceTimelineCardTop">
                        <div className="experienceLogoMark experienceLogoMark--timeline">
                            <img className="experienceLogo" src={logo} alt="" />
                        </div>
                        <span className="experienceDurationInline">{duration}</span>
                    </div>
                    <div className="experienceCardDivider" aria-hidden="true" />
                    <p className="experienceDescription experienceDescription--timelineCard">{description}</p>
                </div>
            </article>
        </div>
    );
}

function ExperienceTimelineItem({ item, index, setItemRef }) {
    const isPhaseA = index % 2 === 0;
    const phaseClass = isPhaseA ? 'experienceTimelineItem--phase-a' : 'experienceTimelineItem--phase-b';

    return (
        <li className={`experienceTimelineItem ${phaseClass}`} ref={(el) => setItemRef(el, index)}>
            <div className="experienceTimelineCell experienceTimelineCell--primary">
                {isPhaseA ? (
                    <DurationBadge duration={item.duration} />
                ) : (
                    <TimelineContentBlock
                        id={item.id}
                        logo={item.logo}
                        role={item.role}
                        company={item.company}
                        duration={item.duration}
                        description={item.description}
                    />
                )}
            </div>

            <div className="experienceTimelineAxis" aria-hidden="true">
                <span className="experienceTimelineDot" />
            </div>

            <div className="experienceTimelineCell experienceTimelineCell--secondary">
                {isPhaseA ? (
                    <TimelineContentBlock
                        id={item.id}
                        logo={item.logo}
                        role={item.role}
                        company={item.company}
                        duration={item.duration}
                        description={item.description}
                    />
                ) : (
                    <DurationBadge duration={item.duration} />
                )}
            </div>
        </li>
    );
}

export default function ExperienceTimeline() {
    const [spineProgress, setSpineProgress] = useState(0);
    const stageRef = useRef(null);
    const itemRefs = useRef([]);

    const setItemRef = (el, index) => {
        itemRefs.current[index] = el;
    };

    useTimelineScroll({
        wrapRef: stageRef,
        itemRefs,
        itemCount: EXPERIENCE_ITEMS.length,
        onSpineProgress: setSpineProgress,
    });

    return (
        <div className="experienceTimelineStage" ref={stageRef}>
            <div className="experienceTimelineSpine" aria-hidden="true">
                <div
                    className="experienceTimelineSpineFill"
                    style={{ height: `${Math.round(spineProgress * 1000) / 10}%` }}
                />
            </div>
            <ol className="experienceTimeline" aria-label="Professional experience">
                {EXPERIENCE_ITEMS.map((item, index) => (
                    <ExperienceTimelineItem
                        key={item.id}
                        item={item}
                        index={index}
                        setItemRef={setItemRef}
                    />
                ))}
            </ol>
        </div>
    );
}
