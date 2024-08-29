import React from 'react';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import Menu from '../../shared/menu/Menu';
import Feature from '../feature/Feature';
import Testimonial from '../testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Feature></Feature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;