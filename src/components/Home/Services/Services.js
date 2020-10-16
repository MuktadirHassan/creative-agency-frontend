import React from 'react';
import Service from './Service/Service';

const Services = () => {
    return (
        <section className="container my-5">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Provide awesome <span className="text-secondary">services</span></h1>
            <div className="row justify-content-center align-items-center">
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </div>
        </section>
    );
};

export default Services;