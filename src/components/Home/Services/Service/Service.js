import React from 'react';
import './Service.scss';
import service1 from '../../../../assets/images/icons/service1.png';
const Service = () => {
    return (
        <div className='col-md-4 service-card'>
            <div className="d-flex flex-column justify-content-center align-items-center py-4 my-2">
                <img src={service1} alt="..." width="100px"/>
                <h3 className='font-weight-bolder text-center mt-3 py-2'>Graphic Design</h3>
                <p className='text-muted text-center my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat debitis minus quaerat voluptas quis provident.</p>
            </div>
        </div>
    );
};

export default Service;