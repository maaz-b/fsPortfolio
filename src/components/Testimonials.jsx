import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js';
import { QuoteIcon } from './Icons.jsx';
import Gap from './Gap.jsx';

export function Testimonials() {

    useRevealOnScroll('.testimonialCard');
    return (
        <div className='row testimonialRow' >
            <div className='testimonialCard'>
                <div className=' row testimonialIcon'>
                    <QuoteIcon size={40} />
                </div>
                <Gap size={5} orientation="vertical" />
                <p className='testimonialText'>"Working with Maaz was a game-changer for our project. Their expertise in app development and keen eye for design transformed our initial concept into a sleek, user-friendly application that exceeded our expectations. Their dedication to quality and attention to detail truly set them apart."</p>
                <p className='testimonialAuthor'>- Alex Johnson, CEO of CodeCroft</p>
            </div>
            <div className='testimonialCard'>
                <div className=' row testimonialIcon'>
                    <QuoteIcon size={40} />
                </div>
                <Gap size={5} orientation="vertical" />
                <p className='testimonialText'>"I can't recommend Maaz enough! Their ability to understand our vision and translate it into a functional, beautiful website was impressive. They were communicative, professional, and delivered the project on time. Our online presence has never looked better!"</p>
                <p className='testimonialAuthor'>- M Kamil, Tech Lead at Launchbox</p>
            </div>
        </div>
    );
}

export function Testimonials2() {

    // reusing the hook might add listeners again if selector matches multiple.
    // The selector '.testimonialCard' matches ALL cards. Ideally we scope it or accept it's fine.
    // In the original code, it was called in `TestimonialRow1` but applied to `.testimonialCard`.
    // Here if I call it twice, we might add dual observers?
    // `useRevealOnScroll` uses `document.querySelectorAll(selector)`.
    // If we render both components, both effects run.
    // Effect 1: observes all `.testimonialCard`.
    // Effect 2: observes all `.testimonialCard`.
    // This causes double animation or double logic.
    // Fix: Move the hook call to a parent or ensure it runs once.
    // OR: accept it (logic adds class 'show', adding it twice is harmless).
    // The delay calculation might be affected if the index counts from 0 for all elements found.
    // If we have 4 cards total.
    // Effect 1 finds 4 cards. Card 0 delay 0, Card 1 delay 120...
    // Effect 2 finds 4 cards. Card 0 delay 0...
    // It should be fine as they overwrite the same style property.

    useRevealOnScroll('.testimonialCard');
    return (
        <div className='row testimonialRow' >
            <div className='testimonialCard'>
                <div className=' row testimonialIcon'>
                    <QuoteIcon size={40} />
                </div>
                <Gap size={5} orientation="vertical" />
                <p className='testimonialText'>"Maaz has demonstrated his ability to work
                    independently as well as part of a team. He has been an excellent communicator and has
                    always been willing to go the extra mile to ensure the success of the project. His dedication
                    and hard work have contributed to the success of several key projects."</p>
                <p className='testimonialAuthor'>- Muhammad Akbar, MD Appick Solutions</p>
            </div>
            <div className='testimonialCard'>
                <div className=' row testimonialIcon'>
                    <QuoteIcon size={40} />
                </div>
                <Gap size={5} orientation="vertical" />
                <p className='testimonialText'>"I can't recommend Maaz enough! Their ability to understand our vision and translate it into a functional, beautiful website was impressive. They were communicative, professional, and delivered the project on time. Our online presence has never looked better!"</p>
                <p className='testimonialAuthor'>- Hammad Al-Saud, CTO Tawseel Group</p>
            </div>
        </div>
    );
}
