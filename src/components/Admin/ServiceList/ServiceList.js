import React from 'react';

const ServiceList = () => {
    return (
        <table className="table table-borderless">
        <thead style={{backgroundColor: '#F5F6FA'}}>
            <tr>   
            <th scope="col" className="rounded">Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Service</th>
            <th scope="col">Project Details</th>
            <th scope="col" className="rounded">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>        
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                    <select name="status" id="status" className="px-2">
                        <option value="pending">Pending</option>
                        <option value="pending">On Going</option>
                        <option value="complete">Complete</option>
                    </select>
                </td>
            </tr>
           
        </tbody>
</table>
    );
};

export default ServiceList;