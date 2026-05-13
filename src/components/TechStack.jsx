import React, { useEffect, useState } from 'react';
import { Assets } from '../constants/assets.js';

const STACK = [
    { icon: Assets.icons.dart, label: 'Dart' },
    { icon: Assets.icons.kotlin, label: 'Kotlin' },
    { icon: Assets.icons.javascript, label: 'JavaScript' },
    { icon: Assets.icons.html5, label: 'HTML5' },
    { icon: Assets.icons.css3, label: 'CSS3' },
    { icon: Assets.icons.angular, label: 'Angular' },
    { icon: Assets.icons.react, label: 'React' },
    { icon: Assets.icons.flutter, label: 'Flutter' },
    { icon: Assets.icons.flutterflow, label: 'FlutterFlow' },
    { icon: Assets.icons.nodejs, label: 'Node.js' },
    { icon: Assets.icons.firebase, label: 'Firebase' },
    { icon: Assets.icons.aws, label: 'AWS' },
    { icon: Assets.icons.azure, label: 'Azure' },
    { icon: Assets.icons.git, label: 'Git' },
    { icon: Assets.icons.bitbucket, label: 'Bitbucket' },
    { icon: Assets.icons.gitlab, label: 'GitLab' },
    { icon: Assets.icons.figma, label: 'Figma' },
    { icon: Assets.icons.canva, label: 'Canva' },
    { icon: Assets.icons.stripe, label: 'Stripe' },
    { icon: Assets.icons.onesignal, label: 'OneSignal' },
    { icon: Assets.icons.claude, label: 'Claude' },
    { icon: Assets.icons.googleplay, label: 'Google Play' },
    { icon: Assets.icons.appstore, label: 'App Store' },
];

function getInitialReducedMotion() {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(getInitialReducedMotion);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReduced(mq.matches);
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    return reduced;
}

export default function TechStackMarquee() {
    const reducedMotion = usePrefersReducedMotion();
    const row = reducedMotion ? STACK : [...STACK, ...STACK];
    const summary = STACK.map((item) => item.label).join(', ');

    return (
        <div className="techStackMarqueeRegion" role="region" aria-label="Technologies and platforms">
            <p className="sr-only">Technologies and platforms: {summary}.</p>

            <div className="techStackMarqueeWrapper">
                <div
                    className={`techStackMarquee${reducedMotion ? ' techStackMarquee--static' : ''}`}
                    aria-hidden="true"
                >
                    {row.map((item, index) => (
                        <div className="techStackItem" key={`${item.label}-${index}`}>
                            <div className="techStackItemSurface">
                                <img className="techStackMarqueeLogo" src={item.icon} alt="" draggable={false} />
                                <span className="techStackLabel">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
