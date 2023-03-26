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
                <input className='loginEmail'></input>
                <input className='loginPassword'></input>
            </form>
        </Card>
    </LoginContainer>
    </LoginMain>
    </>
    )
};

export default Login;