import { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { useSelector } from "react-redux";
import DeleteUserBtn from "./DeleteUserBtn";

import Logout from "./Logout";

function Menu({ setToggleUserModal, toggleUserModal }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const userName = useSelector((state) => state.user.username);
  console.log(userName);
  return (
    <nav className="z-50 fixed w-full max-w-4xl  flex justify-between items-center px-4 py-2 bg-purple-600">
      <h1 className="text-2xl font-semibold text-white ">My Notes</h1>

      <div className="flex items-center">
        <span className="text-white mr-2">{userName}</span>
        {/* User dropdown menu */}
        {/* ----Astronaut button---- */}
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="z-20 border-gray-400 border flex items-center justify-center w-12 h-12 text-2xl text-white  rounded-full hover:bg-purple-700"
          aria-label="User settings"
        >
          <FaUserAstronaut />
        </button>
      </div>
      {/* ----Dropdown menu---- */}
      <div
        className={`absolute right-0 top-14 transform ${
          showDropdown ? " visible" : "invisible"
        } bg-purple-600 w-36 p-2 rounded-md  transition-all`}
      >
        <Logout />
        <DeleteUserBtn
          setShowDropdown={setShowDropdown}
          setToggleUserModal={setToggleUserModal}
          toggleUserModal={toggleUserModal}
        />
      </div>
    </nav>
  );
}

export default Menu;
