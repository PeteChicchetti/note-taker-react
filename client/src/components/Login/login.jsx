import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import {
    LoginMain,
    LoginContainer,
} from './LoginElements'

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';


const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    /// HANDLE CHANGE ///
    const handleChange = (e) => {
    const { name, value } = e.target;

        setFormState({
        ...formState,
        [name]: value,
        });
    };

    /// FORM SUBMISSION ///
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
        const { data } = await login({
            variables: { ...formState },
        });

        Auth.login(data.login.token, data.login.user._id);
        } catch (error) {
        console.log(error);
        }

        setFormState({
        email: '',
        password: '',
        });
    };

    return (
    <>
    <LoginMain>
    <LoginContainer>
        <Card className='loginCard'>
        {data ? (
            <p className=''>Successfully logged in!</p>
        ) : (
            <form onSubmit={handleFormSubmit}>
                <h2 className='loginTitle'>Login</h2>
                <div className='loginEmail'>
                    <h3>Email:</h3>
                    <input 
                        className='emailBox' 
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='loginPassword'>
                    <h3>Password:</h3>
                    <input 
                        className='passwordBox'
                        placeholder='Password'
                        name='password'
                        type='password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                </div>
        {error && (
            <div className='loginError'>{error.message}</div>
        )}
                <div className='loginBtnContainer'>
                    <button className='loginBtn' type='submit'>Log In</button>
                </div>
                <p className='switch'>Switch to signup form</p>
            </form>
        )}
        </Card>
    </LoginContainer>
    </LoginMain>
    </>
    )
};

export default Login;