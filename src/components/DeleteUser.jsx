import React from "react";
import { deleteUser } from "../utils";

const DeleteUser = ({ user }) => {
  const deleteAccount = async () => {
    await deleteUser(user);
  };

  return (
    <div>
      <form onSubmit={deleteAccount}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteUser;
