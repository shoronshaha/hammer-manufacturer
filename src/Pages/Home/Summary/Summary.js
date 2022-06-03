import React from 'react';
import SummaryCard from './SummaryCard';

const Summary = () => {
    const summaries = [
        {
            _id: 1,
            name: 'Countries',
            number: '48',
            img: " https://i.ibb.co/F0Gm6ZT/icons8-empty-flag-96.png"
        },
        {
            _id: 2,
            name: 'Projects',
            number: '152+',
            img: "https://i.ibb.co/kKmgdKL/icons8-projects-58.png"
        },
        {
            _id: 3,
            name: 'Clients',
            number: '700+',
            img: "https://i.ibb.co/2cjFXjx/icons8-clients-64.png"
        },
        {
            _id: 4,
            name: 'Feedbacks',
            number: '500+',
            img: "https://i.ibb.co/RvYQ5KH/icons8-feedback-58.png"
        }

    ];

    return (
        <div>
            <div className='mt-24 '>
                <div className='text-center mb-10 '>
                    <h2 className='text-blue-500 lg:text-4xl sm:text-2xl font-bold uppercase'>millions business trust us</h2>
                    <h2 className='lg:text-2xl sm:text-xl uppercase'>Try to understand users expectation</h2>
                </div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-12 justify-items-center'>
                    {
                        summaries.map(summary => <SummaryCard
                            key={summary._id}
                            summary={summary}
                        ></SummaryCard>)
                    }
                </div>
            </div>

            <div className=" card  bg-base-100  shadow-lg shadow-blue-800 justify-center  lg:container sm:container  mx-auto mb-10">
                <div className=" card-body">
                    <h2 className="card-title text-3xl text-primary">Have any question about us or get a products request ?</h2>
                    <h2 className="card-title text-2xl ">Don't hesitate to contact us</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Request For Quote</button>
                        <button className="btn btn-secondary">Contact Us</button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Summary;