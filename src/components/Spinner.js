import React from 'react'
import lightsabre from '../assets/images/lightsabre.gif';

const Spinner = () => {
    return (
        <div className="flex flex-col items-center">
            <img src={lightsabre} alt='' className='w-32'/>
            <p className="text-sm font-bold">Don't miss the hope, I'm loading...</p>
        </div>
    )
}

export default Spinner;
