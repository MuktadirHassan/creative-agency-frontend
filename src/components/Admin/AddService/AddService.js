import React from 'react';

const AddService = () => {
    return (
        <div>
            <form action="" style={{maxWidth:'570px'}}>
                
                        <label htmlFor="title">Service Title</label>
                        <input type="text" placeholder="Enter title" id="title" className="form-control"/>
                   
                    
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile"/>
                            <label className="custom-file-label" for="customFile">Upload an Image</label>
                        </div>
                        <label htmlFor="serviceDescription">Service Description</label>
                        <textarea name="serviceDescription" id="serviceDescription" cols="30" rows="10" className="form-control" placeholder="Enter Description"></textarea>
                    
                        <input type="submit" className="btn btn-success px-3 py-2"value="Submit"/>
            </form>
        </div>
    );
};

export default AddService;