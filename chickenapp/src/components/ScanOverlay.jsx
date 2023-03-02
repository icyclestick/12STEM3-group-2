import React from 'react';

function ScanOverlay() {
    return (
        <svg width="100%" height="100%">
            {/* Background */}
            <rect width="100%" height="100%" fill="#000" opacity="0.7" />

            {/* QR Code Scanner */}
            <rect x="20%" y="20%" width="60%" height="60%" stroke="#fff" stroke-width="4" fill="none" />

            {/* QR Code Scanner Text */}
            <text x="50%" y="50%" textAnchor="middle" fill="#fff" fontSize="32">Scan QR Code</text>
        </svg>
    );
}

export default ScanOverlay;


