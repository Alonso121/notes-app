import { useState } from "react";
import { useDispatch } from "react-redux";

import { createNote } from "../redux/notes";
import { IoWarningOutline } from "react-icons/io5";

function CreateNote({ setToggleNewNote, token }) {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    date: "",
    time: "",
  });
  const [displayInfo, setDisplayInfo] = useState("");
  const [showReminder, setShowReminder] = useState(false);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleCreateNote = async (e) => {
    e.preventDefault();
    if (note.title.length < 3)
      return setDisplayInfo("Note should have more than 3 characters!");
    const { title, date, time } = note;
    dispatch(createNote({ title, date, time, token }));
    setToggleNewNote(false);
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(1, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <form
      onSubmit={handleCreateNote}
      className="z-50 px-8 py-10 bg-white opacity-95 shadow-xl sm:px-12 rounded-b-2xl"
    >
      <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer text-purple-700">
        Create new Note
      </h1>

      <div className="space-y-4">
        {/* Title input */}{" "}
        <label htmlFor="title">
          Title:
          <input
            type="text"
            placeholder="Buy some coffee."
            className="block w-full px-4 py-3 text-sm border-4 border-double rounded-lg outline-none focus:border-purple-800"
            name="title"
            value={note.title}
            onChange={onChangeInput}
          />
        </label>
        <p
          onClick={() => setShowReminder(!showReminder)}
          className="p-1  inline-block italic cursor-pointer underline hover:text-purple-700"
        >
          Add Reminder
        </p>
        {showReminder && (
          <div className="flex flex-wrap justify-between">
            {/* Date input */}
            <label htmlFor="date">
              Date: <span className="text-gray-400 italic">(optional)</span>
              <input
                type="date"
                className="block mb-4 w-full px-4 py-3 text-sm border-4 border-double rounded-lg outline-none focus:border-purple-800"
                name="date"
                value={note.date}
                min={disablePastDate()}
                onChange={onChangeInput}
              />
            </label>
            {/* Time input */}
            <div>
              <label htmlFor="time">
                Time: <span className="text-gray-400 italic">(optional)</span>
              </label>
              <br />
              <input
                type="time"
                id="time"
                name="time"
                onChange={onChangeInput}
                className="block mb-4 w-full px-4 py-3 text-sm border-4 border-double rounded-lg outline-none focus:border-purple-800"
              />
            </div>
          </div>
        )}
      </div>
      {/* Submit button */}
      <div className="flex mt-2 text-center">
        <button
          type="submit"
          className="relative w-36 py-3 text-xl text-white transition-colors duration-200 bg-purple-500 hover:bg-purple-600 rounded-lg"
        >
          Submit
        </button>
        <button
          onClick={() => setToggleNewNote(false)}
          className="ml-4 w-36 bg-gray-500 px-2 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
      {displayInfo && (
        <p className="mt-4 flex items-center p-2 transition-colors duration-300 bg-purple-200 rounded-md -bottom-12 ">
          <span className="mx-2 text-red-800">
            <IoWarningOutline className="text-3xl" />
          </span>
          <span className="text-red-900">{displayInfo}</span>
        </p>
      )}
    </form>
  );
}

export default CreateNote;
