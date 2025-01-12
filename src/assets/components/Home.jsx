import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { filteredNotes , openEditNote , deleteNote } = useOutletContext();

  return (
    <div className="grid grid-cols-12 gap-3">
    <div className="col-span-12">
      <h1 className="text-3xl font-bold text-center">Home</h1>
    </div>
   {
        filteredNotes.length > 0 ? (
          filteredNotes
          .filter((note) => note.type === "Home")
          .map((note, key) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4" key={key}>
              <div className="bg-white p-5 rounded-lg shadow-sm mb-5">
                <div className="flex justify-end mb-3">
                    <button className="text-gray-600 px-2 py-1 transform transition-transform duration-200 hover:scale-110" onClick={() => deleteNote(note)}>
                      <h3 className="text-2xl">
                        <RiDeleteBack2Line />
                      </h3>
                    </button>
                    <button className="text-gray-600 px-2 py-1 transform transition-transform duration-200 hover:scale-110" onClick={() => openEditNote(note)}>
                      <h3 className="text-2xl">
                        <MdOutlineEdit />
                      </h3>
                    </button>
                </div>
                <h2 className="text-xl font-semibold mb-3">{note.title}</h2>
                <p className="text-gray-600">{note.content}</p>
              </div>
            </div>
          ))
        ): (
          <div className="col-span-12">
            <h1 className="text-3xl font-bold text-center">No Notes Found</h1>
          </div>
        )
      }
  </div>
  )
}

export default Home