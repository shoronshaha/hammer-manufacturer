import React from 'react';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import ToolProduct from '../ToolProduct/ToolProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolProduct></ToolProduct>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;