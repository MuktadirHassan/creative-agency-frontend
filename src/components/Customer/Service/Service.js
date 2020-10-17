import React, { useEffect, useState } from 'react';
import ServiceStatus from './ServiceStatus';
import { DisappearedLoading } from 'react-loadingg';
const Service = () => {
    const [services, setServices] = useState([]);
    const api = 'https://fast-depths-25443.herokuapp.com/userSpecificService'

    useEffect(()=>{
        fetch(api,{
            headers:{
                'authToken' : sessionStorage.getItem('authToken')
            }})
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err))
    },[])
    return (
        <div className='row'>
            {
                services ? services.map(service => <ServiceStatus key={service._id} service={service}></ServiceStatus>) : <DisappearedLoading/>
            }
            {
                services.length === 0 && <p>No Previous Orders</p>
            }
            
        </div>
    );
};

export default Service;