import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { CiStickyNote } from "react-icons/ci";
import {
    NotesMain,
    NotesContainer,
    Title
} from './NotesElements'


const Notes = () => {
    const [showNote, setShowNote] = useState(false)
    const open = () => setShowNote(true)
    const close = () => setShowNote(false)

    return (
    <>
    <NotesMain>
    <NotesContainer >
        <Card className='cardMain'>
            <Title><h1 className='cardTitle'>Lets add some notes!</h1><button className='addBtn'>Add Note</button></Title>
            <Container className='cardContainer'>
            { showNote ?
                <Card className='noteCard'>
                    <div className='noteCardHeader openHeader'>
                        <span className='titleContainer' onClick={close}>
                            <CiStickyNote className='noteIcon'/>
                            <h2 className='noteTitle'>What is Lorem Ipsum?</h2>
                        </span>
                        <span className='btnContainer'>
                            <button className='editBtn'>EDIT</button>
                            <button className='deleteBtn'>DELETE</button>
                        </span>
                    </div>
                    <div className='noteContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <span className="noteDate">Created on: <span className='date'>March 16th</span></span>
                </Card>
                : 
                <Card className='noteCard'>
                    <div className='noteCardHeader'>
                        <span className='titleContainer' onClick={open}>
                            <CiStickyNote className='noteIcon'/>
                            <h2 className='noteTitle'>What is Lorem Ipsum?</h2>
                        </span>
                        <span className='btnContainer'>
                            <button className='editBtn'>EDIT</button>
                            <button className='deleteBtn'>DELETE</button>
                        </span>
                    </div>
                </Card> 
            }
            </Container>
        </Card>
    </NotesContainer>
    </NotesMain>    
    </>  
    )
};

export default Notes;