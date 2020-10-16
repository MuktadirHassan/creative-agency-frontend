import React from 'react';

const Order = () => {
    return (
        <main className="">
            <form action="" style={{maxWidth:'570px'}}>
                <input type="text" name="name" placeholder="Your name/ Company name" className="form-control"/>
                <input type="email" name="email" placeholder="Your email address" className="form-control"/>
                <input type="text" name="service" placeholder="Graphic Design" className="form-control"/>
                <textarea name="project-details" placeholder="Project Details" cols="30" rows="10" className="form-control"></textarea>
                <div className="row">
                    <div className="col">
                        <input type="number" name="price" placeholder="Price" className="form-control"/>
                    </div>
                    <div className="col">
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile"/>
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                    </div>
                </div>
                    <input type="submit" className="btn btn-primary px-4 py-2" value="Send"/>
            </form>
        </main>
    );
};

export default Order;