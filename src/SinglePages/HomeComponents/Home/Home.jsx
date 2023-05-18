import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;