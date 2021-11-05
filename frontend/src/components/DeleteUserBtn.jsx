import React from "react";

const DeleteUserBtn = ({ setToggleUserModal, setShowDropdown }) => {
  const showModal = () => {
    setShowDropdown(false);
    setToggleUserModal(true);
  };
  return (
    <button
      onClick={showModal}
      className="text-white hover:bg-purple-700 w-full p-1 rounded-md"
    >
      <span>Delete Account</span>
    </button>
  );
};

export default DeleteUserBtn;
