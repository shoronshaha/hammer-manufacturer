import React from 'react';
import PageTitle from '../Shared/PageTitle';


const MyPortfolio = () => {
    return (
        <div className='mb-32'>
            <PageTitle title='My Portfolio'></PageTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:mt-10 sm:mt-5'>
                <div className='m-10'>
                    <h1 className='text-6xl text-orange-500 font-bold'>Shoron <span className='text-blue-400'>Shaha</span></h1>
                    <p className='mt-5 text-[30px] text-purple-500 font-bold'>Junior Developer</p>
                    <p className='font-bold'>My objective is to obtain a challenging position in a high quality engineering environment where my resourceful experience and academic skills will add value to organizational operations.</p>
                    <p>Email: smaranshaha@gmail.com</p>
                    <p>Phone: 01762938077</p>
                    <div className='my-10'>
                        <h1 className='text-2xl font-bold'> My projects</h1>
                        <p>Smart TV Warehouse: <span className='text-blue-600'>https://warehouse-auth-server.web.app/</span></p>
                        <p>Stylist Photographer: <span className='text-blue-600'>https://stylist-photographer-services.web.app/</span></p>
                        <p>FireArms: <span className='text-blue-600'>https://firearms.netlify.app/</span></p>
                    </div>



                </div>

                <div className=''>
                    <img className='w-[300px] mt-10 rounded-full' src="https://i.ibb.co/GMs0T5n/profile.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;