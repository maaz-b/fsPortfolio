import React from 'react';
import { EmailIcon, GitHubIcon, LinkedinIcon } from './Icons.jsx';
import Gap from './Gap.jsx';

export default function Contact() {
    return (
        <div className='techStackBackground'>
            <div className='contactContainer'>
                <div className='row contactTitleRow'>
                    <p className='contactTitle'>Contact</p>
                </div>
                <p className='outroText'>Five years deep in mobile, web, and backend development. I architect systems that handle real traffic, ship features that users depend on, and solve problems that actually matter.
                    From pixel-perfect mobile interfaces to rock-solid APIs, I deliver solutions that work under pressure.</p>
                <Gap size={10} orientation='vertical' />

                <a href="mailto:maazbukhari99@live.com" className='row emailRow' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <EmailIcon size={25} />
                    <p className='emailText'>maazbukhari99@live.com</p>
                </a>
                <Gap size={10} orientation='vertical' />

                <div className='row socialRow'>
                    <a href="https://github.com/maazb/" target="_blank" rel="noopener noreferrer" className='githubIcon'> {/* Added Link */}
                        <GitHubIcon size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/syed-maaz-ur-rehman/" target="_blank" rel="noopener noreferrer" className='linkedinIcon'> {/* Added Link - Placeholder URL, user might need to update */}
                        <LinkedinIcon size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
}
