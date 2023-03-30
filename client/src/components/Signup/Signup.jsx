import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import {
    SignupMain,
    SignupContainer,
} from './SignupElements'

const Signup = () => {
    return (
    <>
    <SignupMain>
    <SignupContainer>
        <Card className='signupCard'>
            <form>
                <h2 className='signupTitle'>SignUp</h2>
                <div className='signupUsername'>
                    <h3>Username:</h3>  
                    <input
                        className='usernameBox'
                        placeholder='Username'
                        name='username'
                        type='text'
                    />
                </div>
                <div className='signupEmail'>
                    <h3>Email:</h3>
                    <input 
                        className='emailBox' 
                        placeholder='Email'
                        name='email'
                        type='email'
                    />
                </div>
                <div className='signupPassword'>
                    <h3>Password:</h3>
                    <input 
                        className='passwordBox'
                        placeholder='Password'
                        name='password'
                        type='password'
                    />
                </div>
            </form>        
        </Card>
    </SignupContainer>
    </SignupMain>
    </>    
        
    )
};

export default Signup;