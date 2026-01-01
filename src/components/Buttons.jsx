import React from 'react';


const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export function ButtonRow() {
    return (
        <div className='row buttonRow'>
            <button className='buttonPrimary' onClick={() => scrollToSection('contact')}>Get In Touch</button>
            <button className='buttonSecondary'>Download CV</button>
        </div>
    );
}

export function ProjectsButtonRow() {
    return (
        <div className='row buttonRow'>
            <button className='buttonSecondary'>See All Projects</button>
        </div>
    );
}
