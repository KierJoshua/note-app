import React from "react";
import NotesMenuItem from "./NotesMenuItem";

const NotesMenu = () => {
  return (
    <div className="my-5">
      <ul className="flex border-b cursor-pointer">
        <NotesMenuItem title="ALL" link="all"/>
        <NotesMenuItem title="PERSONAL" link="personal"/>
        <NotesMenuItem title="HOME" link="home"/>
        <NotesMenuItem title="BUSINESS" link="business"/>
      </ul>
    </div>
  );
};

export default NotesMenu;
