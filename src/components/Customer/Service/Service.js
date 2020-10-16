import React from 'react';
import ServiceStatus from './ServiceStatus';

const Service = () => {
    return (
        <div className='row'>
            <ServiceStatus></ServiceStatus>
            <ServiceStatus></ServiceStatus>
            <ServiceStatus></ServiceStatus>
            <ServiceStatus></ServiceStatus>
        </div>
    );
};

export default Service;