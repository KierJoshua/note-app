
import { useState } from "react";
import { useEffect } from "react";

const EditNotes = ({selectedNote, editNote}) => {
  const [editNoteData, setEditNoteData] = useState({
    title: "",
    type: "Type",
    content : ""
  });

  useEffect (() => {
    if(selectedNote){
        setEditNoteData({
                title: selectedNote.title,
                type: selectedNote.type,
                content : selectedNote.content
              })
        }
  },[selectedNote])

  const setNoteType = (type) => {
    setEditNoteData((prev) => ({ ...prev, type }));
  };

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setEditNoteData((prev) => ({...prev,[name] : value}));
  }

  const handleSaveNote = () => {
    editNote({ ...editNoteData, id: selectedNote.id });
    const modal = document.getElementById("my_modal_1");
    modal && modal.close();
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-slate-200">
        <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
          <div className="flex justify-center items-center w-full mt-3">
            <div className="grid grid-cols-12 gap-3 my-3 w-full max-w-md">
              <input
                type="text"
                className="input col-span-12 sm:col-span-8"
                placeholder="Title"
                name="title"
                value={editNoteData.title}
                onChange={handleInputChange}
              />
              <details className="dropdown col-span-12 sm:col-span-4">
                <summary className="btn w-full">{editNoteData.type}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow w-full" onChange={handleInputChange} value={editNoteData.type}>
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
                value={editNoteData.content}
                onChange={handleInputChange}
              ></textarea>
              <button className="btn col-span-12" onClick={handleSaveNote}>Save Note</button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditNotes;
