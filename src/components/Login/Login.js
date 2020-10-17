import React, { useContext, useEffect } from 'react';

import * as firebase from 'firebase/app';

import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png';
import './Login.scss';
import googleLogo from '../../assets/images/icons/google.png';
import { AuthContext } from '../../authentication/AuthContext';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const {currentUser, setCurrentUser} = useContext(AuthContext);
    const {from} = location.state || {from:{pathname:'/'}};

    const setToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then((token) => sessionStorage.setItem('authToken', token))
        .catch(error => console.log(error));
    }

    useEffect(()=>{
        setToken();
        history.replace(from);
    },[currentUser])

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            setCurrentUser(result);
        })
        .catch(error => console.log(error));
    }
    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="py-5">
                    <Link to="/">
                        <img src={logo} alt="" width="180px" />
                    </Link>
                </div>
                <div className="login-area border p-5 rounded d-flex flex-column align-items-center">
                    <h3 className="font-weight-bold mb-3">Login With</h3>
                    <button className="login-button mb-3 px-5 py-2" onClick={handleGoogleLogin}>
                    <img src={googleLogo} alt="" width="16px" className="mr-2"/>Continue with Google
                    </button>
                    <p><small className='text-muted'>Don't have an account? <a href="/login">Create an account.</a></small></p>
                </div>
            </div>
        </main>
    );
};

export default Login;