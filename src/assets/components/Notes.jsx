import React from "react";
import NotesMenu from "./notesMenu/NotesMenu";
import { Outlet } from "react-router-dom";
import AddNotes from "./AddNotes";
import { useState } from 'react'  
import EditNotes from "./EditNotes";

const Notes = ({toggleAddNote, filteredNotes, newNoteData, setNewNoteData}) => {


  const [selectedNote, setSelectedNote] = useState(null);



  const addNewNote = (note) => {
    // setNewNoteData((prev) => [...prev,note]);
    setNewNoteData((prev) => {
      const maxId = prev.length > 0 ? Math.max(...prev.map((n) => n.id)) : 0;
      return [...prev, { ...note, id: maxId + 1 }];
    });
  };

  const editNoteHandler = (updatedNote) => {
    setNewNoteData((prev) => prev.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
}


  const openEditNote = (note) => {
    setSelectedNote(note);
    document.getElementById('my_modal_1').showModal();
    console.log("Edit Note", note);
  };

  const deleteNote = (noteToDelete) => {
    setNewNoteData((prev) => prev.filter((note) => note.id !== noteToDelete.id));
  }

  return (
    <div className="w-full max-w-7xl mt-20">
      <h1 className="text-2xl font-semibold">Your Notes</h1>
      {toggleAddNote && <AddNotes addNote={addNewNote}/>}
      <EditNotes selectedNote={selectedNote} editNote={editNoteHandler}/>
      <NotesMenu />
      <Outlet context={{newNoteData , openEditNote, deleteNote , filteredNotes}}/>
    </div>
  );
};

export default Notes;
