import React from 'react';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Summary from '../Summary/Summary';
import ToolProduct from '../ToolProduct/ToolProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolProduct></ToolProduct>
            <Carousel></Carousel>
            <Summary></Summary>
        </div>
    );
};

export default Home;