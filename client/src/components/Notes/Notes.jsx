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

import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_NOTES } from '../../utils/queries';
import { ADD_Note } from '../../utils/mutations';


const Notes = () => {
    const [showNote, setShowNote] = useState(false)

    // const open = () => setShowNote(true)
    // const close = () => setShowNote(false)

    const [addNoteBtn, setAddNoteBTN] = useState(false)
    const add = () => setAddNoteBTN(true)
    const cancel = () => setAddNoteBTN(false)

    // LOAD NOTES
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];
    console.log(data);
    

    function handleClick(noteId) {

        const currentNote = notes.map((notes) => notes._id);
            console.log(currentNote);

        const activeNote = () => {
            // currentNote.forEach(function(value, key) {
            //     console.log(key + ' = ' + value);

            // })
            // const result = () => {
                for(let i=0; i<currentNote.length; i++) {
                    if (currentNote[i] === noteId)
                    console.log(currentNote[i] + ' & ' + noteId)
                    setShowNote(true)

                }

            //    }
            //    result()
            }

        activeNote()  
    }

    // ADD NOTE
    const [formState, setFormState] = useState({
        title: '',
        content: '',
      });


    const [addNote, { error }] = useMutation(ADD_Note);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // On form submit perform mutation using form data
        try {
          const { data } = addNote({
            variables: { ...formState },
          });
    
          //window.location.reload();
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
                <button className='addBtn' onClick={ () => {add()}}>Add Note</button>
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
                                <button type='submit' className='saveBtn'>SAVE</button>
                                <button className='cancelBtn' onClick={cancel}>CANCEL</button>
                        </span>
                    </form>
                </Card>
                :
                null
            }
                {notes.map((note) => (    
                    <>
                    { showNote ?
                        <Card className='noteCardOpen' key={note._id}>
                            <div className='noteCardHeader openHeader'>
                                <span className='titleContainer' onClick={() => handleClick(note._id)}>
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
                                    <RiDeleteBin6Line  className='noteBtns'/>
                                </span>
                                <span className="noteDate">Created on: <span className='date'>{note.createdAt}</span></span>
                            </div>
                        </Card>  
                        :
                        <Card className='noteCard' key={note._id}>
                            <div className='noteCardHeader'>
                                <span className='closedTitleContainer'  onClick={() => handleClick(note._id)}>
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
                        </Card>
                    }
                    </> 
                ))}
            </Container>
        </Card>
    </NotesContainer>
    </NotesMain>    
    </>  
    )
};

export default Notes;