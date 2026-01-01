import React from 'react';
import { Assets } from '../constants/assets.js';

export default function Avatar() {
    return (
        <div>
            <a target="_blank" href="https://github.com/maazb" rel="noopener noreferrer"> {/* Added proper anchor interaction */}
                <img src={Assets.logos.avatar} className="logo" alt="avatar" />
            </a>
        </div>
    );
}
