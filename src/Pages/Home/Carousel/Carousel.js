import React from 'react';

const Carousel = () => {
    return (
        <div>
            <h1 className='text-3xl text-center text-blue-600 font-bold uppercase my-12'>Upcoming Manufacturer Items</h1>
            <div id="carouselExampleCaptions" className="carousel slide relative mb-5" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full h-[45vw] overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src="https://i.ibb.co/pQyfBMd/mainbanner1-1903x621.jpg"
                            className="block h-[45vw] w-full"
                            alt="..."
                        />
                        <div className="carousel-caption md:block absolute md:text-left md:position-0">
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://i.ibb.co/MpcDbC7/mainbanner2-1903x621.jpg"
                            className="block h-[45vw] w-full"
                            alt="..."
                        />
                        <div className="carousel-caption md:block absolute text-center">


                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://i.ibb.co/3s8yfJp/mainbanner3-1903x621.jpg"
                            className="block h-[45vw] w-full"
                            alt="..."
                        />
                        <div className="carousel-caption md:block absolute text-center">


                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;