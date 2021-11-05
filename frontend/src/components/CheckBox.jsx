import { BsCheckLg } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { toggleCompleteNote } from "../redux/notes";

function CheckBox({ complete, id, token }) {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleCompleteNote({ id, complete, token }));
  };
  return (
    <div
      type="checkbox"
      className="relative m-2 mr-3 border-2 border-purple-600 rounded-lg cursor-pointer w-7 h-7 "
      onClick={handleComplete}
    >
      <BsCheckLg
        className={`absolute right-1 top-1 h-4  text-purple-600  ${
          complete ? "visible" : "invisible"
        }`}
      />
    </div>
  );
}

export default CheckBox;
