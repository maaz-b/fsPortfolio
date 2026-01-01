import React, { useRef } from 'react';
import { useParallax } from '../hooks/useParallax.js';
import { WebsiteIcon, WebsiteThemeIcon, AppIcon, RescueIcon, BackendIcon, OptimizeIcon } from './Icons.jsx';

const services = [
    {
        title: "Website Development",
        description: "High-performance, responsive websites built with modern frameworks, optimized for speed, SEO, and scalability.",
    },
    {
        title: "Website Redesign",
        description: "UI/UX modernization, performance improvements, and accessibility enhancements for existing products.",
    },
    {
        title: "App Development",
        description: "Cross-platform mobile applications using Flutter and React Native, production-ready and scalable.",
    },
    {
        title: "Product Rescue",
        description: "Stabilizing broken products, fixing architecture issues, improving performance, and restoring delivery velocity.",
    },
    {
        title: "Backend Development",
        description: "Secure, scalable backend systems using Node.js, REST/GraphQL APIs, authentication, and cloud integrations.",
    },
    {
        title: "Backend Optimization",
        description: "Database tuning, API performance optimization, caching strategies, and infrastructure cost reduction.",
    },
];

export function ServicesRowRight({ setActiveService }) {
    const rowRef = useRef(null);
    const style = useParallax(rowRef, 'right');

    return (
        <div ref={rowRef} className="row servicesRow" style={style}>
            <div className="serviceCard" onClick={() => setActiveService(services[0])} >
                <WebsiteIcon size={50} />
                <p className="serviceTitle">Website Development</p>
            </div>

            <div className="serviceCard" onClick={() => setActiveService(services[1])}>
                <WebsiteThemeIcon size={50} />
                <p className="serviceTitle">Website Redesign</p>
            </div>

            <div className="serviceCard" onClick={() => setActiveService(services[2])}>
                <AppIcon size={50} />
                <p className="serviceTitle">App Development</p>
            </div>
        </div>
    );
}

export function ServicesRowLeft({ setActiveService }) {
    const rowRef = useRef(null);
    const style = useParallax(rowRef, 'left');

    return (
        <div ref={rowRef} className="row servicesRow" style={style}>
            <div className="serviceCard" onClick={() => setActiveService(services[3])}>
                <RescueIcon size={50} />
                <p className="serviceTitle">Product Rescue</p>
            </div>

            <div className="serviceCard" onClick={() => setActiveService(services[4])}>
                <BackendIcon size={50} />
                <p className="serviceTitle">Backend Development</p>
            </div>

            <div className="serviceCard" onClick={() => setActiveService(services[5])}>
                <OptimizeIcon size={50} />
                <p className="serviceTitle">Backend Optimization</p>
            </div>
        </div>
    );
}
