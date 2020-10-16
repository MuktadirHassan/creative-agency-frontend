import React from 'react';
import Testimonial from './Testimonial/Testimonial';

const Testimonials = () => {
    return (
        <section className="container py-5 mb-5">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Clients <span className="text-secondary">Feedback</span></h1>
            <div className="row justify-content-between pt-4">
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
            </div>
        </section>
    );
};

export default Testimonials;