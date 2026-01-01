import React from 'react';

export default function ServicePopup({ activeService, onClose }) {
    if (!activeService) return null;

    return (
        <div className="servicePopupBackdrop" onClick={onClose}>
            <div className="servicePopup" onClick={(e) => e.stopPropagation()}>
                <h3>{activeService.title}</h3>
                <p>{activeService.description}</p>
                <button className="popupCloseBtn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
