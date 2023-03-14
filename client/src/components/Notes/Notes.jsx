import React from 'react';
import { Container, Card } from 'react-bootstrap';
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
                <AddBtn><IoIosAddCircle className='addIcon' /></AddBtn>
            </NotesContainer>
            <Container className='cardContainer'>
                <Card className='noteCard'>
                    <h1 className='cardTitle'>What is Lorem Ipsum?</h1>
                    <div className='cardContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </Card>
            </Container>
        </NotesMain>    
    </>  
    )
};

export default Notes;