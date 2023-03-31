import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { CiStickyNote } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Moment from 'react-moment';
import {
    NotesMain,
    NotesContainer,
    Title,
} from './NotesElements'


const Notes = () => {
    const [showNote, setShowNote] = useState(false)
    const open = () => setShowNote(true)
    const close = () => setShowNote(false)

    const [addNote, setAddNote] = useState(false)
    const add = () => setAddNote(true)
    const cancel = () => setAddNote(false)


    // const textarea = document.querySelector('textarea');
    // textarea.addEventListener('keyup', e => {
    //     let scHeight = e.target.scrollHeight;
    //     textarea.style.height = `${scHeight}px`;
    // });

    return (
    <>
    <NotesMain>
    <NotesContainer >
        <Card className='cardMain'>
            <Title>
                  <Moment className='headerDate' format='MMMM Do YYYY'></Moment>
                <button className='addBtn' onClick={ () => {add(); close();}}>Add Note</button></Title>
            <Container className='cardContainer'>
            { addNote ? 
                <Card className='addCard'>
                    <form className='addNoteForm'>
                        <div className='addNoteHeader'>
                            <input type="text" name='title' placeholder='Title' id='title' className='title'/>
                            <span className='addNoteBtns'>
                                <button className='saveBtn'>SAVE</button>
                                <button className='cancelBtn' onClick={cancel}>CANCEL</button>
                            </span>
                        </div>
                        <textarea type="text" name='content' placeholder='Content' id='content' className='content' />
                        <span className='addNoteBtnsMobile'>
                                <button className='saveBtn'>SAVE</button>
                                <button className='cancelBtn' onClick={cancel}>CANCEL</button>
                            </span>
                    </form>
                </Card>
                :
                null
            }    
            { showNote ?
                <Card className='noteCardOpen'>
                    <div className='noteCardHeader openHeader'>
                        <span className='titleContainer' onClick={close}>
                            <CiStickyNote className='noteIcon'/>
                            <h2 className='noteTitle'>What is Lorem Ipsum?</h2>
                        </span>
                    </div>
                    <div className='noteContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <div className='noteInfo'>
                        <span className='noteBtnContainer'><FaRegEdit className='noteBtns'/><RiDeleteBin6Line  className='noteBtns'/></span>
                        <span className="noteDate">Created on: <span className='date'>March 16th</span></span>
                    </div>
                </Card>
                : 
                <Card className='noteCard'>
                    <div className='noteCardHeader'>
                        <span className='titleContainer' onClick={ () => {open(); cancel()}}>
                            <CiStickyNote className='noteIcon'/>
                            <h2 className='noteTitle'>What is Lorem Ipsum?</h2>
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