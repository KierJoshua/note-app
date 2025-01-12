import React from "react";
import { NavLink } from "react-router-dom";

const NotesMenuItem = ({ title, link }) => {
  return (
    <NavLink to={`/${link}`}>
      {({ isActive }) => (
        <li
          className={`group relative px-5 text-slate-700 font-medium hover:text-[#4CC9FE] ${
            isActive ? "text-[#4CC9FE]" : ""
          }`}
        >
          {title}
          <span
            className={`absolute left-0 bottom-0 w-full h-[2px] bg-slate-700 transition-all duration-300 group-hover:bg-[#4CC9FE] ${
              isActive ? "bg-[#4CC9FE]" : ""
            }`}
          ></span>
        </li>
      )}
    </NavLink>
  );
};

export default NotesMenuItem;
