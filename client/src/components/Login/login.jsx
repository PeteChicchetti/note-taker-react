import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import {
    LoginMain,
    LoginContainer,
} from './LoginElements'

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {

    return (
    <>
    <LoginMain>
    <LoginContainer>
        <Card className='loginCard'>
            <form className='loginInfo'>
                <h2 className='loginTitle'>Login</h2>
                <div className='loginEmail'>
                    <h3>Email:</h3>
                    <input className='emailBox' placeholder='Email'></input>
                </div>
                <div className='loginPassword'>
                    <h3>Password:</h3>
                    <input className='passwordBox'  placeholder='Password'></input>
                </div>
                <div className='loginBtnContainer'>
                    <button className='loginBtn'>Log In</button>
                </div>
                <p className='switch'>Switch to signup form</p>
            </form>
        </Card>
    </LoginContainer>
    </LoginMain>
    </>
    )
};

export default Login;