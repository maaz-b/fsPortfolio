import React from 'react';

export default function Banners() {
    return (
        <div className='bannerColumn'>
            <div className='banner'>
                <span>I write code</span>
            </div>
            <div className='banner 2'>
                <p>it's <span className='gradientWords'>efficient</span>, and <span className='gradientWords'>deployable!</span></p>
            </div>
        </div>
    );
}
