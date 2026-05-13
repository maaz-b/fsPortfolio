import React from 'react';
import { EXPERIENCE_SECTION_LEAD } from '../constants/homeExperienceCopy.js';

export function ProjectsIntro() {
    return (
        <div className='row intro'>
            <div className='introPara'>
                <p>My journey is defined by successfully delivered software solutions, particularly within environments demanding high availability and peak performance. I have a proven track record of managing and deploying critical features for multiple production-grade, high-traffic applications. My work ensures that applications are not just deployed, but that they represent validated, robust, and impactful success stories for the business.</p>
            </div>
        </div>
    );
}

export function ExperienceIntro() {
    return <p className="experienceSectionLead">{EXPERIENCE_SECTION_LEAD}</p>;
}
