import React, { useRef } from 'react';
import { useParallax } from '../hooks/useParallax.js';

function ExperienceCard({ logo, role, company, duration, description }) {
    const cardRef = useRef(null);
    useParallax(cardRef, 'left');

    return (
        <div
            ref={cardRef}
            className='experienceCard'
        >
            <div className='row experienceCardRow'>
                <div className='experienceLogoCircle'>
                    <img className='experienceLogo' src={logo} alt={`${company} logo`} />
                </div>

                <div className='row experienceDetailsRow'>
                    <p className='experienceRole'>{role}<span className='roleNormal'> at {company}</span></p>
                    <p className='experienceDuration'>{duration}</p>
                </div>
            </div>
            <p className='introPara experiencePara'>{description}</p>
        </div>
    );
}

export default ExperienceCard;
