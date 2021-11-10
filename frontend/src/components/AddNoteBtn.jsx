import { IoAdd } from "react-icons/io5";

const AddNoteBtn = ({setToggleNewNote, toggleNewNote}) => {
    return (
        <button
          onClick={() => setToggleNewNote(!toggleNewNote)}
          className="fixed shadow-md md:absolute z-40 bottom-12 right-14  flex items-center justify-center w-12 h-12 ml-2 text-2xl text-white bg-purple-600 rounded-full hover:bg-purple-700"
          aria-label="Add new note"
        >
          <IoAdd />
        </button>
    )
}

export default AddNoteBtn
