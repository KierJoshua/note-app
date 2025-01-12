import React from 'react'
import { useState } from 'react'

const AddNotes = ({addNote}) => {
  const [addNoteData, setAddNoteData] = useState({
    title: "",
    type: "Type",
    content : "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setAddNoteData((prev) => ({...prev  , [name]: value})); 
  };

  const setNoteType = (type) => {
    setAddNoteData((prev) => ({ ...prev, type }));
  };

  const handleSaveNote = () => {
    if(!addNoteData.title || addNoteData.type === "Type"|| !addNoteData.content) {
      alert("Please fill all the fields");
      return;
    }
    addNote(addNoteData);
    setAddNoteData({
      title: "",
      type: "Type",
      content: "",

    });
  };

  return (
    <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-12 gap-3 my-3 w-full max-w-md">
          <input
            type="text"
            className="input col-span-12 sm:col-span-8"
            placeholder="Title"
            name="title"
            value={addNoteData.title}
            onChange={handleInputChange}
          />
          <details className="dropdown col-span-12 sm:col-span-4">
            <summary className="btn w-full">{addNoteData.type}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow w-full" onChange={handleInputChange} value={addNoteData.type}>
              <li onClick={() => setNoteType("Personal")}>
                <a>Personal</a>
              </li>
              <li onClick={() => setNoteType("Home")}>
                <a>Home</a>
              </li>
              <li onClick={() => setNoteType("Business")}>
                <a>Business</a>
              </li>
            </ul>
          </details>
          <textarea
            className="textarea col-span-12"
            placeholder="Start writing"
            name="content"
            value={addNoteData.content}
            onChange={handleInputChange}
          ></textarea>
          <button className="btn col-span-12" onClick={handleSaveNote}>Add Note</button>
        </div>
      </div>
  )
}

export default AddNotes