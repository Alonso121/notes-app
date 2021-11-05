import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../redux/users";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem("accessToken");
    dispatch(logout());
    history.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="text-white hover:bg-purple-700 w-full p-1 rounded-md"
    >
      <span className="mr-1">Logout</span>
    </button>
  );
};

export default Logout;
