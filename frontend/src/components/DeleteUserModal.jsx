import { IoAlertCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteUser } from "../redux/users";

const DeleteUserModal = ({ setToggleUserModal }) => {
  const token = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleDelete = () => {
    dispatch(deleteUser(token));
    console.log("User deleted!");
    history.push("/login");
  };

  return (
    <div className="absolute min-h-screen h-full z-50 bg-gray-200 bg-opacity-70 flex justify-center w-full items-center">
      <div className="max-w-md shadow-md bg-gray-100 p-4 rounded-md">
        <div className="flex items-center mb-2">
          <IoAlertCircle className="text-3xl text-red-600 mr-2" />
          <div>
            <p>Are you sure you want to delete your account?</p>
            <p>This operation is irreversible!</p>
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="bg-gray-500 px-6 py-2 rounded-md text-white hover:bg-red-700"
        >
          Delete
        </button>
        <button
          onClick={() => setToggleUserModal(false)}
          className="ml-2  px-6 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
export default DeleteUserModal;
