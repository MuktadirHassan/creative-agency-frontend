import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
            <form action="" style={{maxWidth:'570px'}}>
                <label htmlFor="makeAdminEmail">Email</label>
                <input type="email" id="makeAdminEmail" name="makeAdminEmail" placeholder="john@gmail.com" className="form-control"/>
                <input type="submit" className="btn btn-success px-3 py-2"value="Submit"/>
            </form>
        </div>
    );
};

export default MakeAdmin;