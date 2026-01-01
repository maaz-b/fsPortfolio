import React from 'react';

export default function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='appbar'>
            <div className='row'>
                <span className='item' onClick={() => scrollToSection('home')}>Home</span>
                <span className='item' onClick={() => scrollToSection('projects')}>Projects</span>
                <span className='item' onClick={() => scrollToSection('experience')}>Experience</span>
                <span className='item' onClick={() => scrollToSection('contact')}>Contact</span>
            </div>
        </div>
    );
}
