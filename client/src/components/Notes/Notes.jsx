import React from 'react';
import { Container } from 'react-bootstrap';
import {
    AddBtn
} from './NotesElements'


const Notes = () => {
    return (
    <>
        <Container style={{ background: '#414141', margin: '80px 0px 0px 0px', height: 'calc(100vh - 80px)'}}>
            <AddBtn>Test</AddBtn>
        </Container>
    </>  
    )
};

export default Notes;