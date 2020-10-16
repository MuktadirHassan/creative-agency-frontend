import React from 'react';

const Review = () => {
    return (
        <div>
            <form action="" style={{maxWidth:'570px'}}>
            <input type="text" name="name" placeholder="Your name/ Company name" className="form-control"/>
            <input type="text" name="company" placeholder="Company's name / Designation" className="form-control"/>
            <textarea name="review" placeholder="Review" cols="30" rows="10" className="form-control"></textarea>
            <input type="submit" className="btn btn-primary px-3 py-2"value="Submit"/>
            </form>
        </div>
    );
};

export default Review;