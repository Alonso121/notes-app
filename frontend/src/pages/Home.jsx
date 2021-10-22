import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getNotes } from "../redux/notes";

function Home({ accessToken }) {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await dispatch(getNotes(accessToken)).unwrap();
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, [dispatch, accessToken]);

  if (notes.length < 1)
    return <div className="text-green-900">"Loading ..."</div>;

  return (
    <div className="text-3xl text-blue-800">
      <button>Set Token</button>
    </div>
  );
}

export default Home;
