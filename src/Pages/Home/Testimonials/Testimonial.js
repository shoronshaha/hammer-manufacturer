import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import './Testimonial.css'


const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://calm-refuge-39895.herokuapp.com/testimonial')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (


        <div className=' my-10'>
            <h1 className='md:text-[3vw] font-bold text-center text-blue-500'>TESTIMONIAL</h1>
            <Slider  {...settings}>

                {
                    testimonials.map(testimonial => {
                        return (
                            <div key={testimonial._id} className='px-4 pt-5 pb-10 mx-auto max-w-7xl md:px-2'>

                                <div className='grid grid-cols-1 justify-items-center'>
                                    <div className='rounded-lg shadow-lg bg-orange-100 max-w-sm-[2rem] p-5 h-[400px] hover:bg-blue-50 mx-2 my-3'>
                                        <div className='flex rounded-full w-[100px]'>
                                            <img className='rounded-full' src={testimonial.img} alt="" />
                                            <h1 className='text-2xl text-center p-5'>{testimonial.name}</h1>
                                        </div>
                                        {/* <div className='flex justify-center'>
                                            <Rating
                                                initialRating={testimonial.rating}
                                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                                readonly
                                            ></Rating>
                                        </div> */}
                                        <div>
                                            <p className='p-10'>{testimonial.description}</p>

                                        </div>
                                    </div >
                                </div >
                            </div >
                        )
                    })
                }
            </Slider >
        </div >
    );
};

export default Testimonial;