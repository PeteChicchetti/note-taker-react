import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import {
    SignupMain,
    SignupContainer,
} from './SignupElements'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);

    /// UPDATES STATE BASED ON INPUT ///
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
        ...formState,
        [name]: value,
        });
    };

    /// HANDLE SUBMISSION OF FORM ///
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
        const { data } = await addUser({
            variables: { ...formState },
        });

        Auth.login(data.addUser.token, data.addUser.user._id);
        } catch (error) {
        console.log(error);
        };
    };

    return (
    <>
    <SignupMain>
    <SignupContainer>
        <Card className='signupCard'>
        {data ? (
            <p className='signupSuccess'>Successfully created an account. Signing in...</p>
        ) : (
            <form onSubmit={handleFormSubmit}>
                <h2 className='signupTitle'>SignUp</h2>
                <div className='signupUsername'>
                    <h3>Username:</h3>  
                    <input
                        className='usernameBox'
                        placeholder='Username'
                        name='username'
                        type='text'
                        value={formState.username}
                        onChange={handleChange}
                    />
                </div>
                <div className='signupEmail'>
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
                <div className='signupPassword'>
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
            <div className='signupError'>{error.message}</div>
        )}
                <div className='signupBtnContainer'>
                    <button className='signupBtn' type='submit'>SignUp</button>
                </div>
                <div className='switch'>
                    <a href='/login' className='loginLink'>Switch to login form</a>
                </div>
            </form>
        )}          
        </Card>
    </SignupContainer>
    </SignupMain>
    </>    
        
    )
};

export default Signup;