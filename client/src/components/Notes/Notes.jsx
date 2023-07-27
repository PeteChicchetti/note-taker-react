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

import { QUERY_USER } from '../../utils/queries';
import { QUERY_NOTES } from '../../utils/queries';
import { ADD_NOTE } from '../../utils/mutations';
import { DELETE_NOTE } from '../../utils/mutations';

const Notes = () => {
    const [showNote, setShowNote] = useState(false);
    const [editNote, setEditNote] = useState(false);
    const [addNoteBtn, setAddNoteBTN] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const [editTitle, setEditTitle] = useState(false);
    const [editContent, setEditContent] = useState(false);
    const [editButtons, setEditButtons] = useState(false);

    // OPEN and CLOSE add note or open note
    const add = () => setAddNoteBTN(true);
    const cancel = () => setAddNoteBTN(false);
    const cancelEdit = () => { setEditTitle(false); setEditContent(false); setEditButtons(false); }

    // LOAD NOTES
    const { loading, data, refetch } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];
    console.log("Notes:", notes);
    console.log("All Data:", data);
    
    // const { loading, data, refetch } = useQuery(QUERY_USER);
    // console.log(data);

    const [addNote, { error }] = useMutation(ADD_NOTE);
    const [deleteNote, { error2 }] = useMutation(DELETE_NOTE);

    // ADD NOTE FORM
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
          refetch();
          cancel();
          setDeleteAlert(false);
          setSuccessAlert(true);
    
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
        refetch();
        setSuccessAlert(false);
        setDeleteAlert(true);
    };


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
                                <button type='submit' className='saveBtn' onClick={() => {setSuccessAlert(true)}}>SAVE</button>
                                <button className='cancelBtn' onClick={cancel}>CANCEL</button>
                        </span>
                    </form>
                </Card>
                :
                null
            }
                    { successAlert ? <Alert variant="primary" onClose={() => setSuccessAlert(false)} dismissible>
                        <Alert.Heading>Success!</Alert.Heading>
                            <p>
                                Your note has been added!
                            </p>
                        </Alert>
                    :
                        null
                    } 
                    { deleteAlert ? <Alert variant="danger" onClose={() => setDeleteAlert(false)} dismissible>
                        <Alert.Heading>Note Deleted!</Alert.Heading>
                            <p>
                                Your note has been deleted!
                            </p>
                        </Alert>
                    :
                        null
                    } 

            {notes.length === 0 && <p className='noNotes'>No notes found</p>}
            {notes.map((note, index) => (    
                <Card className='noteCard' key={note._id}>
                { selectedIndex === index ?
                <>
                    <>
                    { editTitle === false ?
                        <div className='noteCardHeader openHeader'>
                            <span className='titleContainer'>
                                <CiStickyNote className='noteIcon'/>
                                <h2 className='noteTitle'>{note.title}</h2>
                            </span>
                        </div>
                    :
                        <form>
                            <input className='editTitle' id='editTitle' placeholder='Edit Title'></input>
                        </form>
                     }
                    </>
                    <div className='noteBorder'>
                        { editContent === false ?
                            <div className='noteContent'>{note.content}</div>
                        :
                            <form>
                                <textarea className='editContent' id='editContent' placeholder='Edit Content'></textarea>
                            </form>
                        }
                    </div>
                    <div className='noteInfo'>
                        {/* <span className='noteBtnContainer'> */}
                            { editButtons === false ?
                                <span>
                                    <FaRegEdit className='noteBtns' onClick={() => { setEditTitle(true); setEditContent(true); setEditButtons(true) }}/>
                                    <RiDeleteBin6Line className='noteBtns' onClick={() => { noteDeleteById(note._id); cancel() }}/>
                                </span>
                            :
                                <span>
                                    <button type='submit' className='updateBtn' onClick={() => {setSuccessAlert(true)}}>UPDATE</button>
                                    <button className='cancelBtn' onClick={cancelEdit}>CANCEL</button>
                                </span>
                            }
                        {/* </span> */}
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