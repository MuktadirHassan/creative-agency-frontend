import React, { createContext, useEffect, useState } from 'react';
import app from './firebaseInit';
import { BoxLoading } from 'react-loadingg';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    const setToken = () => {
        app.auth().currentUser.getIdToken(true)
        .then((token) => sessionStorage.setItem('authToken', token || null))
        .catch(error => console.log(error));
    }
    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false);
            setToken();
        });
    },[])

    if(pending){
        return <>
            <BoxLoading/>
        </>
    }

    return (
        <AuthContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
};
