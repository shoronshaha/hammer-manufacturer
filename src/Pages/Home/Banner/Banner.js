import React from 'react';
import banner from '../../../Images/banner/banner.png'

const Banner = () => {
    return (
        <div>
            <img className='lg:min-w-full' src={banner} alt="" />
        </div>
    );
};

export default Banner;