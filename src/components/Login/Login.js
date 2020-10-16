import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png';
import './Login.scss';
import googleLogo from '../../assets/images/icons/google.png';
const Login = () => {
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
                    <button className="login-button mb-3 px-5 py-2">
                    <img src={googleLogo} alt="" width="16px" className="mr-2"/>Continue with Google
                    </button>
                    <p><small className='text-muted'>Don't have an account? <a href="/login">Create an account.</a></small></p>
                </div>
            </div>
        </main>
    );
};

export default Login;