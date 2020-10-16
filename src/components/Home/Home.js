import React from 'react';
import Brands from './Brands/Brands';
import ContactUs from './ContactUs/ContactUs';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Works from './Works/Works';

const Home = () => {
    document.title = 'Creative Agency | Home';
    return (
        <>
            <Header></Header>
            <Brands></Brands>
            <Services></Services>
            <Works></Works>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;