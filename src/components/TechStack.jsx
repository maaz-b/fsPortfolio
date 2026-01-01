import React from 'react';
import { Assets } from '../constants/assets.js';

export default function TechStackMarquee() {
    const stack = [
        { icon: Assets.icons.angular, label: "Angular" },
        { icon: Assets.icons.react, label: "React" },
        { icon: Assets.icons.flutter, label: "Flutter" },
        { icon: Assets.icons.flutterflow, label: "FlutterFlow" },
        { icon: Assets.icons.nodejs, label: "Node.js" },
        { icon: Assets.icons.html5, label: "HTML5" },
        { icon: Assets.icons.css3, label: "CSS3" },
        { icon: Assets.icons.javascript, label: "JavaScript" },
        { icon: Assets.icons.aws, label: "AWS" },
        { icon: Assets.icons.claude, label: "Claude" },
        { icon: Assets.icons.firebase, label: "Firebase" },
        { icon: Assets.icons.bitbucket, label: "Bitbucket" },
        { icon: Assets.icons.git, label: "Git" },
        { icon: Assets.icons.gitlab, label: "GitHub" },
        { icon: Assets.icons.figma, label: "Figma" },
        { icon: Assets.icons.canva, label: "Canva" },
        { icon: Assets.icons.stripe, label: "Stripe" },
        { icon: Assets.icons.onesignal, label: "OneSignal" },
        { icon: Assets.icons.kotlin, label: "Kotlin" },
        { icon: Assets.icons.googleplay, label: "Google Play" },
        { icon: Assets.icons.appstore, label: "App Store" },
    ];

    // Duplicate items for seamless loop
    const loopStack = [...stack, ...stack, ...stack, ...stack, ...stack, ...stack, ...stack, ...stack];

    return (
        <div className="techStackMarqueeWrapper">
            <div className="techStackMarquee">
                {loopStack.map((item, index) => (
                    <div className="techStackItem" key={index}>
                        <img className="techStackLogo" src={item.icon} alt={item.label} />
                    </div>
                ))}
            </div>
        </div>
    );
}
