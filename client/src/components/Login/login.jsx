import React from 'react';
import { Card } from 'react-bootstrap';
import {
    LoginMain,
    LoginContainer,
} from './LoginElements'

const Login = () => {

    return (
    <>
    <LoginMain>
    <LoginContainer>
        <Card className='loginCard'>
            <form className='loginInfo'>
                <h2 className='loginTitle'>Login</h2>
                <div>
                    <input className='loginEmail' placeholder='Email'></input>
                </div>
                <input className='loginPassword' placeholder='Password'></input>
            </form>
        </Card>
    </LoginContainer>
    </LoginMain>
    </>
    )
};

export default Login;