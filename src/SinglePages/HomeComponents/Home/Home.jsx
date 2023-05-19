import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import UserReview from '../UserReview/UserReview';
import FeaturedSellers from '../FeaturedSellers/FeaturedSellers';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('GoPlay - Home')
    return (
        <div>
            <Carousel></Carousel>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <FeaturedSellers></FeaturedSellers>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;