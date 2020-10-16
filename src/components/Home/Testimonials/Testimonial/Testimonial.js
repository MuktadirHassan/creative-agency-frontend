import React from 'react';
import customer1 from '../../../../assets/images/customer-1.png';

const Testimonial = () => {
    return (
        <div className='col-md-4 border p-4 mb-3' style={{maxWidth:'370px'}}>
            
             <div className="d-flex justify-content-start align-items-center mb-4">
             <img src={customer1} alt="" className="rounded mr-3" width="60px"/>
                <div>
                    <h5 className="font-weight-bolder">Nash Patrik</h5 >
                    <h6>CEO, Manpal</h6>
                </div>
             </div>
             <div className="text-muted">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eveniet mollitia exercitationem hic eos facilis culpa rem illum ea inventore?
             </div>
            
        </div>
    );
};

export default Testimonial;