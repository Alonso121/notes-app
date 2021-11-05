import React from "react";
import { useDispatch } from "react-redux";

import { deleteNote } from "../redux/notes";
import { TiDeleteOutline } from "react-icons/ti";

const DeleteNote = ({ id, token }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote({ id, token }));
  };

  return (
    <TiDeleteOutline
      className="w-8 h-8 m-2 text-red-600 transition duration-200 cursor-pointer hover:text-secondary"
      onClick={handleDelete}
    />
  );
};

export default DeleteNote;
