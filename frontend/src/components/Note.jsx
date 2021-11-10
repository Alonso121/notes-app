import React from "react";
import { format } from "timeago.js";
import { IoCalendarOutline } from "react-icons/io5";
import DeleteNote from "./DeleteNote";
import CheckBox from "./CheckBox";
import StarNote from "./StarNote";

const Note = ({ note, token }) => {
  return (
    <div className="flex items-center justify-between mb-1 border-2 bg-gray-200  rounded-lg">
      <CheckBox complete={note.complete} id={note._id} token={token} />
      <div className="flex-1 font-semibold text-purple-900">
        <h2 className={note.complete ? "line-through" : "text-secondary"}>
          {note.title}
        </h2>
        <p className="flex items-center text-sm italic text-gray-700">
          <IoCalendarOutline size={16} />
          <span className="ml-0.5">{format(note.date)}</span>
        </p>
      </div>
      {note.complete ? (
        <DeleteNote id={note._id} token={token} />
      ) : (
        <StarNote id={note._id} token={token} starred={note.starred} />
      )}
    </div>
  );
};

export default Note;
