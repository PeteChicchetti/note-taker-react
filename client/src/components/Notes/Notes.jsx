import React from 'react';
// import { Container } from 'react-bootstrap';
import { IoIosAddCircle } from "react-icons/io";
import {
    NotesMain,
    NotesContainer,
    AddBtn
} from './NotesElements'


const Notes = () => {
    return (
    <>
        <NotesMain>
            <NotesContainer >
                <AddBtn><IoIosAddCircle style={{ height: '50px', width: '50px', color: '#000', margin: '0 0 0 -5px' }} /></AddBtn>
            </NotesContainer>
        </NotesMain>    
    </>  
    )
};

export default Notes;