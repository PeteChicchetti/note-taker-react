import React, { useState } from 'react';
import { ReactNode } from "react";
import { Alert, Container, Card } from 'react-bootstrap';
import { CiStickyNote } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Moment from 'react-moment';
import {
    NotesMain,
    NotesContainer,
    Title,
} from './NotesElements'

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { QUERY_NOTES } from '../../utils/queries';
import { ADD_NOTE } from '../../utils/mutations';
import { DELETE_NOTE } from '../../utils/mutations';

const Notes = () => {
    const [showNote, setShowNote] = useState(false)
    const [editNote, setEditNote] = useState(false)
    const [addNoteBtn, setAddNoteBTN] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // OPEN and CLOSE add note or open note
    const add = () => setAddNoteBTN(true)
    const cancel = () => setAddNoteBTN(false)

    // LOAD NOTES
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];
    console.log("Notes:", notes);

    
    const [addNote, { error }] = useMutation(ADD_NOTE);
    const [deleteNote, { error2 }] = useMutation(DELETE_NOTE);

    // ADD NOTE
    const [formState, setFormState] = useState({
        title: '',
        content: '',
      });
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // On form submit perform mutation using form data
        try {
          const { data } = addNote({
            variables: { ...formState },
          });
    
        } catch (err) {
          console.error(err);
        }
      };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'title') {
            setFormState({ ...formState, [name]: value });
        } else if (name === 'content') {
            setFormState({ ...formState, [name]: value });
        }
    };



    const noteDeleteById = async (note_id) => {
        const data = await deleteNote({
            variables: { noteid: note_id },
        });
    };
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
                <button className='addBtn' onClick={ () => {add(); setSelectedIndex(-1)}}>Add Note</button>
            </Title>
            <Container className='cardContainer'>
            { addNoteBtn ? 
                <Card className='addCard'>
                    <form className='addNoteForm' onSubmit={handleFormSubmit}>
                        <div className='addNoteHeader'>
                            <input type="text" name='title' placeholder='Title' id='title' className='title' onChange={handleChange}/>
                            <span className='addNoteBtns'>
                                <button className='saveBtn'>SAVE</button>
                                <button className='cancelBtn' onClick={cancel}>CANCEL</button>
                            </span>
                        </div>
                        <textarea type="text" name='content' placeholder='Content' id='content' className='content' onChange={handleChange} />
                        <span className='addNoteBtnsMobile'>
                                <button type='submit' className='saveBtn' onClick={() => {setShowAlert(true)}}>SAVE</button>
                                <button className='cancelBtn' onClick={cancel}>CANCEL</button>
                        </span>
                    </form>
                </Card>
                :
                null
            }
                    <Alert showAlert={showAlert} variant="primary" onClose={() => setShowAlert(false)} dismissible>
                        <Alert.Heading>Success!</Alert.Heading>
                        <p>
                            Your note has been added!
                        </p>
                    </Alert>
                    {!showAlert && null }  

            {notes.length === 0 && <p className='noNotes'>No notes found</p>}
            {notes.map((note, index) => (    
                <Card className='noteCard' key={note._id}>
                { selectedIndex === index ?
                <>
                    <div className='noteCardHeader openHeader'>
                        <span className='titleContainer'>
                            <CiStickyNote className='noteIcon'/>
                            <h2 className='noteTitle'>{note.title}</h2>
                        </span>
                    </div>
                    <div className='noteBorder'>
                        <div className='noteContent'>{note.content}</div>
                    </div>
                    <div className='noteInfo'>
                        <span className='noteBtnContainer'>
                            <FaRegEdit className='noteBtns'/>
                            <RiDeleteBin6Line className='noteBtns' onClick={() => { noteDeleteById(note._id); cancel() }} />
                        </span>
                        <span className="noteDate">Created on: <span className='date'>{note.createdAt}</span></span>
                    </div>
                </>
                :
                <>
                    <div className='noteCardHeader'>
                        <span className='closedTitleContainer'  onClick={() => { setSelectedIndex(index); cancel() }}>
                                <span className='closedTitle'>
                                    <CiStickyNote className='noteIcon'/>
                                    <h2 className='noteTitle'>{note.title}</h2>
                                </span>
                                <div className='mobileDateContainer'>
                                    <span className="mobileNoteDate">Created on: <span className='date'>{note.createdAt}</span></span>
                                </div>
                        </span>
                        <span className="closedNoteDate">Created on: <span className='date'>{note.createdAt}</span></span>
                    </div>
                </> 
                }
                </Card>
            ))}
            </Container>
        </Card>
    </NotesContainer>
    </NotesMain>    
    </>  
    )
};

export default Notes;