import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoAdd } from "react-icons/io5";

import DeleteUserModal from "../components/DeleteUserModal";
import Menu from "../components/Menu";
import Note from "../components/Note";
import Layout from "../components/Layout";
import CreateNote from "../components/CreateNote";

import { getNotes } from "../redux/notes";

function Home() {
  const dispatch = useDispatch();
  const accessToken = localStorage.accessToken;
  const stateNotes = useSelector((state) => state.notes);
  const [toggleNewNote, setToggleNewNote] = useState(false);
  const [toggleUserModal, setToggleUserModal] = useState(false);

  const notes = [...stateNotes]

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        await dispatch(getNotes(accessToken));
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, [dispatch, accessToken]);

  return (
    <Layout>
      <div className="max-w-4xl w-full pb-4 relative bg-gray-200 bg-opacity-20">
        <Menu
          setToggleUserModal={setToggleUserModal}
          toggleUserModal={toggleUserModal}
        />
        <div className="h-16"></div>
        {toggleUserModal && (
          <DeleteUserModal
            token={accessToken}
            setToggleUserModal={setToggleUserModal}
          />
        )}
        {toggleNewNote && (
          <CreateNote setToggleNewNote={setToggleNewNote} token={accessToken} />
        )}
        {/* Notes list */}
        <div className="relative z-10 mx-auto px-4 mt-4">
          {notes.sort((a,b) => a.complete - b.complete).map((note) => (
            <Note key={note._id} note={note} token={accessToken} />
          ))}
        </div>
        {/* Add new note button */}
        <button
          onClick={() => setToggleNewNote(!toggleNewNote)}
          className="fixed shadow-md md:absolute z-40 bottom-12 right-14  flex items-center justify-center w-12 h-12 ml-2 text-2xl text-white bg-purple-600 rounded-full hover:bg-purple-700"
          aria-label="Add new note"
        >
          <IoAdd />
        </button>
      </div>
    </Layout>
  );
}

export default Home;
