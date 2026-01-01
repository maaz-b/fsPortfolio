import React from 'react';

export default function Gap({ size = 16, orientation = 'vertical', className = '', ...props }) {
    const style =
        orientation === 'vertical'
            ? { height: size }
            : { width: size, display: 'inline-block' };

    return <div className={className} style={style} {...props} />;
}
