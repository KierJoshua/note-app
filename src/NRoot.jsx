import React from 'react'
import Header from './assets/components/Header'
import Notes from './assets/components/Notes'
import { useState } from 'react'
import notesData from './assets/components/notesData'
import { useEffect } from 'react'


const NRoot = () => {
  const[toggleAddNote, setToggleAddNote] = useState(false);
  const [newNoteData, setNewNoteData] = useState(notesData);
  const [filteredNotes, setFilteredNotes] = useState(notesData);

  const searchHandler = ((query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = newNoteData.filter((notes) =>
      Object.values(notes).some((value) =>
        value.toString().toLowerCase().includes(lowerCaseQuery)
      )
    );
    setFilteredNotes(filtered);
  })

  const handleToggleAddNote = () => {
    setToggleAddNote(!toggleAddNote);
  }

  useEffect(() => {
    setFilteredNotes(newNoteData);
  }, [newNoteData]);

  return (
    <div className="flex flex-col items-center bg-slate-200 min-h-screen">
    <Header noteClick={handleToggleAddNote} searchHandler={searchHandler}/>
    <Notes toggleAddNote={toggleAddNote} setToggleAddNote={setToggleAddNote} filteredNotes={filteredNotes} newNoteData={newNoteData} setNewNoteData={setNewNoteData}/>
    </div>
  )
}

export default NRoot