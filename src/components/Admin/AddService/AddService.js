import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
        const api = 'https://fast-depths-25443.herokuapp.com/admin/addService';

        const formData = new FormData();
        formData.append('image', data.file[0]);
        formData.append('serviceTitle',data.serviceTitle);
        formData.append('serviceDescription',data.serviceDescription);      
    
        fetch(api, {
            method: 'POST',
            headers: {
                'authToken': sessionStorage.getItem('authToken')
            },
            body: formData
        })
        .then(response => {
            if(response.ok){
                reset();
                alert('Successfully added service.');
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '570px' }} encType="multipart/form-data">

                <label htmlFor="serviceTitle">Service Title</label>
                <input type="text" placeholder="Enter title" name="serviceTitle" id="serviceTitle" className="form-control" ref={register({ required: true })} />
                {errors.serviceTitle && <span className="text-danger"><small>Service Title is required</small></span>}

                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" name="file" ref={register({ required: true })} />
                    <label className="custom-file-label" htmlFor="customFile">Upload an Image</label>
                </div>
                {errors.serviceImage && <span className="text-danger"><small>Service Thumbnail is required</small></span>}
                <br></br>
                <label htmlFor="serviceDescription">Service Description</label>
                <textarea name="serviceDescription" id="serviceDescription" cols="30" rows="10" ref={register({ required: true })} className="form-control" placeholder="Enter Description"></textarea>
                {errors.serviceDescription && <span className="text-danger"><small>Short description is required</small></span>}
                <br></br>
                <input type="submit" className="btn btn-success px-3 py-2" value="Submit" />
            </form>
        </div>
    );
};

export default AddService;