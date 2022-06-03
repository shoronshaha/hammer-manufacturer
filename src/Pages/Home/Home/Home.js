import React from 'react';
import PageTitle from '../../Shared/PageTitle';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import FeedBack from '../FeedBack/FeedBack';
import Summary from '../Summary/Summary';
import Testimonial from '../Testimonials/Testimonial';
import ToolProduct from '../ToolProduct/ToolProduct';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <ToolProduct></ToolProduct>
            <Carousel></Carousel>
            <Summary></Summary>
            <Testimonial></Testimonial>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;