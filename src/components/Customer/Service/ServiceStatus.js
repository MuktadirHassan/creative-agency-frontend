import React from 'react';
import img1 from '../../../assets/images/icons/service1.png'
const ServiceStatus = () => {
    return (
        <div className="col-md-4 border rounded p-3 mb-3 mr-1">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <img src={img1} alt="" width="60px"/>
                <span className="badge badge-success">Pending</span>
            </div>
            <h4 className="font-weight-bolder">Web Design</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nesciunt.</p>
        </div>
    );
};

export default ServiceStatus;