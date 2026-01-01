import React from 'react';

export function ButtonRow() {
    return (
        <div className='row buttonRow'>
            <button className='buttonPrimary'>Get In Touch</button>
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
