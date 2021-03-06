import React, { useEffect, useState } from 'react';
import { DisappearedLoading } from 'react-loadingg';
import ServiceRow from './ServiceRow';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [changedStatus, setChangedStatus] = useState({});

    useEffect(()=>{
        const api = 'https://fast-depths-25443.herokuapp.com/admin/updateStatus'

        const updatedStatus = {
            _id:changedStatus._id,
            status:changedStatus.changedValue
        }
        fetch(api, {
            headers: {
                'authToken' : sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json'
            },
            method: 'PATCH',                                                              
            body: JSON.stringify(updatedStatus)                                        
          })
          .then(res => {
              if(res.ok){
                  console.log(res)
        }})
        .catch(err => console.log(err))

    },[changedStatus])
    
    
    useEffect(() => {
        const api = 'https://fast-depths-25443.herokuapp.com/admin/allOrders'
        fetch(api, {
            headers: {
                'authToken': sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <table className="table table-borderless">
            <thead style={{ backgroundColor: '#F5F6FA' }}>
                <tr>
                    <th scope="col" className="rounded">Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col" className="rounded">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    services ? services.map(service => <ServiceRow key={service._id} setChangedStatus={setChangedStatus} service={service}></ServiceRow>) : <DisappearedLoading />

                }


            </tbody>
        </table>
    );
};

export default ServiceList;