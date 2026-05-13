import { useRef } from 'react';

import { useBentoScrollEffects } from '../hooks/useBentoScrollEffects.js';
import { WebsiteIcon, WebsiteThemeIcon, AppIcon, RescueIcon, BackendIcon, OptimizeIcon } from './Icons.jsx';

const SERVICES = [
    {
        id: 'website-dev',
        area: 'g0',
        visual: 'browser',
        title: 'Website Development',
        description:
            'High-performance, responsive sites with modern stacks—fast loads, SEO, and a polished product feel.',
        icon: <WebsiteIcon size={36} />,
        variant: 'wide',
    },
    {
        id: 'website-redesign',
        area: 'g1',
        visual: 'floating',
        title: 'Website Redesign',
        description:
            'UI/UX modernization, accessibility, and performance so your product feels current and trustworthy.',
        icon: <WebsiteThemeIcon size={36} />,
        variant: 'wide',
    },
    {
        id: 'app-dev',
        area: 'g2',
        visual: 'rings',
        title: 'App Development',
        description:
            'Cross-platform Flutter & React Native apps—production-ready, scalable, and delightful to use.',
        icon: <AppIcon size={36} />,
        variant: 'tall',
    },
    {
        id: 'product-rescue',
        area: 'g3',
        visual: 'mark',
        title: 'Product Rescue',
        description: 'Stabilize, refactor, and ship again.',
        icon: <RescueIcon size={32} />,
        variant: 'mark',
    },
    {
        id: 'backend-dev',
        area: 'g4',
        visual: 'code',
        title: 'Backend Development',
        description:
            'Secure APIs, auth, and cloud integrations with Node—built for reliability and clear operational boundaries.',
        icon: <BackendIcon size={36} />,
        variant: 'tall',
    },
    {
        id: 'backend-opt',
        area: 'g5',
        visual: 'radar',
        title: 'Backend Optimization',
        description:
            'Database tuning, caching, and cost-aware infrastructure so systems stay fast as load grows.',
        icon: <OptimizeIcon size={36} />,
        variant: 'wideBottom',
    },
];

function BentoVisualBrowser({ idPrefix = 'svc' }) {
    const gid = `${idPrefix}-brGlow`;
    return (
        <svg className="serviceBentoSvg" viewBox="0 0 320 200" aria-hidden="true">
            <defs>
                <radialGradient id={gid} cx="50%" cy="40%" r="65%">
                    <stop offset="0%" stopColor="var(--hs-accent-to)" stopOpacity="0.35" />
                    <stop offset="55%" stopColor="var(--hs-accent-from)" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="transparent" />
                </radialGradient>
            </defs>
            <ellipse cx="160" cy="72" rx="130" ry="58" fill={`url(#${gid})`} />
            <rect
                x="48"
                y="44"
                width="224"
                height="132"
                rx="14"
                fill="rgba(0,0,0,0.25)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.2"
            />
            <rect x="62" y="58" width="196" height="14" rx="4" fill="rgba(255,255,255,0.08)" />
            <circle cx="72" cy="65" r="3" fill="rgba(255,255,255,0.2)" />
            <circle cx="84" cy="65" r="3" fill="rgba(255,255,255,0.12)" />
            <circle cx="96" cy="65" r="3" fill="rgba(255,255,255,0.08)" />
            <rect x="62" y="84" width="196" height="78" rx="8" fill="rgba(255,255,255,0.04)" />
        </svg>
    );
}

function BentoVisualFloating({ idPrefix = 'svc' }) {
    const gid = `${idPrefix}-flKey`;
    return (
        <svg className="serviceBentoSvg" viewBox="0 0 320 200" aria-hidden="true">
            <defs>
                <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                </linearGradient>
            </defs>
            <g opacity="0.9">
                <rect x="40" y="48" width="56" height="40" rx="8" fill={`url(#${gid})`} stroke="rgba(255,255,255,0.1)" />
                <rect x="52" y="60" width="32" height="6" rx="2" fill="rgba(255,255,255,0.12)" />
                <rect x="108" y="40" width="56" height="40" rx="8" fill={`url(#${gid})`} stroke="rgba(255,255,255,0.1)" />
                <rect x="120" y="52" width="32" height="6" rx="2" fill="rgba(255,255,255,0.12)" />
            </g>
            <rect
                x="188"
                y="52"
                width="92"
                height="128"
                rx="16"
                fill="rgba(0,0,0,0.28)"
                stroke="rgba(255,255,255,0.12)"
            />
            <rect x="200" y="68" width="68" height="96" rx="8" fill="rgba(255,255,255,0.05)" />
        </svg>
    );
}

function BentoVisualRings() {
    return (
        <svg className="serviceBentoSvg" viewBox="0 0 200 280" aria-hidden="true">
            <rect x="20" y="24" width="160" height="232" rx="36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
            <rect x="36" y="44" width="128" height="192" rx="28" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <rect x="52" y="64" width="96" height="152" rx="22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="100" cy="150" r="22" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        </svg>
    );
}

function BentoVisualMark() {
    return (
        <div className="serviceBentoMark" aria-hidden="true">
            <div className="serviceBentoMarkBlob" />
        </div>
    );
}

function BentoVisualRadar({ idPrefix = 'svc' }) {
    const gid = `${idPrefix}-radarGrad`;
    return (
        <svg className="serviceBentoSvg serviceBentoSvg--radar" viewBox="0 0 280 160" aria-hidden="true">
            <defs>
                <linearGradient id={gid} x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--hs-accent-from)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--hs-accent-to)" stopOpacity="0.1" />
                </linearGradient>
            </defs>
            <path
                d="M 40 140 A 100 100 0 0 1 240 140"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.2"
            />
            <path
                d="M 80 140 A 60 60 0 0 1 200 140"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
            />
            <g className="serviceBentoRadarSweep" style={{ transformOrigin: '140px 140px' }}>
                <path d="M 140 140 L 140 52 A 88 88 0 0 1 210 96 Z" fill={`url(#${gid})`} opacity="0.35" />
            </g>
            <circle cx="170" cy="96" r="3" fill="rgba(255,255,255,0.35)" />
            <circle cx="118" cy="108" r="2.5" fill="rgba(255,255,255,0.2)" />
        </svg>
    );
}

function BentoVisualCodeBackdrop() {
    return (
        <div className="serviceBentoCodeScene" aria-hidden="true">
            <pre className="serviceBentoCodeWallpaper">{`const app = express();
app.use(helmet());
app.get('/api/ready', (_req, res) => {
  res.json({ status: 'ok' });
});`}</pre>
        </div>
    );
}

function BentoVisualCodeSnippet() {
    return (
        <div className="serviceBentoCode" aria-hidden="true">
            <div className="serviceBentoCodeBar" />
            <pre className="serviceBentoCodePre">
                <span className="serviceBentoCodeMuted">import</span>{' '}
                <span className="serviceBentoCodeGreen">express</span>{' '}
                <span className="serviceBentoCodeMuted">from</span>{' '}
                <span className="serviceBentoCodeAmber">&apos;express&apos;</span>
                <span className="serviceBentoCodeMuted">;</span>
                {'\n'}
                <span className="serviceBentoCodeMuted">const</span>{' '}
                <span className="serviceBentoCodeGreen">app</span>{' '}
                <span className="serviceBentoCodeMuted">=</span>{' '}
                <span className="serviceBentoCodePink">express</span>
                <span className="serviceBentoCodeMuted">();</span>
                {'\n'}
                {'\n'}
                <span className="serviceBentoCodeGreen">app</span>
                <span className="serviceBentoCodeMuted">.</span>
                <span className="serviceBentoCodePink">get</span>
                <span className="serviceBentoCodeMuted">(</span>
                <span className="serviceBentoCodeAmber">&apos;/api/health&apos;</span>
                <span className="serviceBentoCodeMuted">, (req, res) =&gt; {'{'}</span>
                {'\n'}
                <span className="serviceBentoCodeMuted">  res.</span>
                <span className="serviceBentoCodePink">json</span>
                <span className="serviceBentoCodeMuted">({'{'} status: </span>
                <span className="serviceBentoCodeAmber">&apos;ok&apos;</span>
                <span className="serviceBentoCodeMuted">{'}'});</span>
                {'\n'}
                <span className="serviceBentoCodeMuted">{'}'});</span>
                {'\n'}
                {'\n'}
                <span className="serviceBentoCodeGreen">app</span>
                <span className="serviceBentoCodeMuted">.</span>
                <span className="serviceBentoCodePink">listen</span>
                <span className="serviceBentoCodeMuted">(</span>
                <span className="serviceBentoCodeAmber">3000</span>
                <span className="serviceBentoCodeMuted">);</span>
            </pre>
        </div>
    );
}

function BentoVisual({ type, idPrefix = 'svc' }) {
    switch (type) {
        case 'browser':
            return <BentoVisualBrowser idPrefix={idPrefix} />;
        case 'floating':
            return <BentoVisualFloating idPrefix={idPrefix} />;
        case 'rings':
            return <BentoVisualRings />;
        case 'mark':
            return <BentoVisualMark />;
        case 'radar':
            return <BentoVisualRadar idPrefix={idPrefix} />;
        case 'code':
            return <BentoVisualCodeBackdrop />;
        default:
            return null;
    }
}

function ServiceBentoCell({ service, setItemRef, index }) {
    const variantClass =
        service.variant === 'mark'
            ? ' serviceBentoCell--mark'
            : service.variant === 'tall'
              ? ' serviceBentoCell--tall'
              : service.variant === 'wideBottom'
                ? ' serviceBentoCell--wideBottom'
                : '';

    const codeClass = service.visual === 'code' ? ' serviceBentoCell--code' : '';

    return (
        <article
            ref={(el) => setItemRef(el, index)}
            className={`serviceBentoCell${variantClass}${codeClass}`}
            style={{ gridArea: service.area }}
            aria-labelledby={`svc-title-${service.id}`}
            role="listitem"
        >
            <div className="serviceBentoCellGlow" aria-hidden="true" />
            <div className="serviceBentoVisualLayer">
                <BentoVisual type={service.visual} idPrefix={`card-${service.id}`} />
            </div>
            <div className="serviceBentoBody">
                <div className="serviceBentoIcon" aria-hidden="true">
                    {service.icon}
                </div>
                <h3 className="serviceBentoTitle" id={`svc-title-${service.id}`}>
                    {service.title}
                </h3>
                <p className="serviceBentoDesc">{service.description}</p>
            </div>
            {service.visual === 'code' ? <BentoVisualCodeSnippet /> : null}
        </article>
    );
}

export function ServicesBento() {
    const itemRefs = useRef([]);

    const setItemRef = (el, index) => {
        itemRefs.current[index] = el;
    };

    useBentoScrollEffects({
        itemRefs,
        itemCount: SERVICES.length,
    });

    return (
        <div className="servicesBento" role="list">
            {SERVICES.map((service, index) => (
                <ServiceBentoCell key={service.id} service={service} setItemRef={setItemRef} index={index} />
            ))}
        </div>
    );
}
