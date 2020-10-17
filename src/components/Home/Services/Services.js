import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import { DisappearedLoading } from 'react-loadingg';
const Services = () => {
    const api = 'https://fast-depths-25443.herokuapp.com/getServices'
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(api)
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err,'Error getting services'))
    },[])
    return (
        <section className="container my-5">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Provide awesome <span className="text-secondary">services</span></h1>
            <div className="row justify-content-center align-items-center">
                {
                    services ? (
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    ) : ( <DisappearedLoading/> )
                }
            </div>
        </section>
    );
};

export default Services;