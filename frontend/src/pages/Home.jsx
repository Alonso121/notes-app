import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DeleteUserModal from "../components/DeleteUserModal";
import Menu from "../components/Menu";
import Note from "../components/Note";
import Layout from "../components/Layout";
import CreateNote from "../components/CreateNote";

import { getNotes } from "../redux/notes";
import Instructions from "../components/Instructions";
import AddNoteBtn from "../components/AddNoteBtn";
import Spinner from "../components/Spinner";

function Home() {
  const dispatch = useDispatch();
  const accessToken = localStorage.accessToken;
  const stateNotes = useSelector((state) => state.notes);
  const [toggleNewNote, setToggleNewNote] = useState(false);
  const [toggleUserModal, setToggleUserModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const notes = [...stateNotes]

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        await dispatch(getNotes(accessToken));
        await setIsLoading(false)
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
        {/* Filler div for nav since position fixed */}
        {isLoading ? (<div className="mt-28 flex items-center justify-center"><Spinner isLarge={true} ><p className="text-white">Loading...</p></Spinner></div>) : 
        <div className="mt-20">
        {/* Delete user modal */}
        {toggleUserModal && (
          <DeleteUserModal
            token={accessToken}
            setToggleUserModal={setToggleUserModal}
          />
        )}
        {/* Create a new note component */}
        {toggleNewNote && (
          <CreateNote setToggleNewNote={setToggleNewNote} token={accessToken} />
        )}
        {/* Show instructions if there are no notes. */}
        {notes.length < 1 && <Instructions />}
        {/* Notes list */}
        <div className="relative z-10 mx-auto px-4 mt-4">
          {notes.sort((a,b) => a.complete - b.complete).map((note) => (
            <Note key={note._id} note={note} token={accessToken} />
          ))}
        </div>
        {/* Add new note button */}
        <AddNoteBtn setToggleNewNote={setToggleNewNote} toggleNewNote={toggleNewNote} />
      </div>}
      </div>
    </Layout>
  );
}

export default Home;
