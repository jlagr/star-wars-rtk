import React from 'react'

function Separator() {
    return (
        <div className='py-5'>
            <svg width="500" height="3">
                <defs>
                    <linearGradient id="fade" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="red" stopOpacity=".5" />
                    <stop offset="100%" stopColor="red" stopOpacity="1" />
                    <stop offset="0%" stopColor="red" stopOpacity=".5" />
                    </linearGradient>
                </defs>
                <line x1="0" y1="1.5" x2="500" y2="5" stroke="url(#fade)" strokeWidth="3" />
            </svg>
        </div>
    )
}
export default Separator;
