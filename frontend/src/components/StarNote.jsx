import React from "react";
import { useDispatch } from "react-redux";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { starNote } from "../redux/notes";

const StarNote = ({ token, id, starred }) => {
  const dispatch = useDispatch();
  const handleStarNote = () => {
    dispatch(starNote({ id, token, starred }));
  };

  return (
    <>
      {starred ? (
        <AiFillStar
          className="w-8 h-8 m-2 text-purple-600 cursor-pointer"
          onClick={handleStarNote}
        />
      ) : (
        <AiOutlineStar
          className="w-8 h-8 m-2 text-purple-600 cursor-pointer"
          onClick={handleStarNote}
        />
      )}
    </>
  );
};

export default StarNote;
