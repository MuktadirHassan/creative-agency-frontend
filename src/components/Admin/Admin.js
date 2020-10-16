import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CustomerHeader from '../Customer/CustomerHeader/CustomerHeader';
import AddService from './AddService/AddService';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ServiceList from './ServiceList/ServiceList';

const Admin = () => {
    const {path} = useRouteMatch();

    return (
        <div className="container">
            

            <div className="row">
                <CustomerHeader></CustomerHeader>
                <AdminSidebar></AdminSidebar>
                <div className="col-md-9">
                    <Switch>
                        <Route path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/add-service`}>
                            <AddService></AddService>
                        </Route>
                        <Route path={`${path}`}>
                            <ServiceList></ServiceList>
                        </Route>
                    </Switch>
                </div>
            </div>
        
            
        </div>
    );
};

export default Admin;