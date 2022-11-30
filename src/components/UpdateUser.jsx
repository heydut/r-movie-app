import React, { useEffect, useState } from "react";
import { updateUser } from "../utils";
import "./UpdateUser.css";
import userimg from "../imgs/user.png";
import DeleteUser from "./DeleteUser";

const UpdateUser = ({ user }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const updateUsername = async (e) => {
    e.preventDefault();
    await updateUser(user, "username", username);
  };

  const updateEmail = async (e) => {
    e.preventDefault();
    await updateUser(user, "email", email);
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    await updateUser(user, "password", password);
  };

  return (
    <section id="user-card">
      <div>
        <div class="user-card-back">
          <div class="user-card-front">
            <img src={userimg} alt="userimg" />
            <p>Hello, {user}!</p>
          </div>
        </div>
        <div class="user-card-text-bg">
          <div class="user-card-text-front">
            <form onSubmit={updateUsername}>
              <label>
                <div>Update your username:</div>
                <input onChange={(e) => setUsername(e.target.value)}></input>
              </label>
              <button type="submit">Update your username</button>
            </form>

            <form onSubmit={updateEmail}>
              <label>
                <div>Update your email:</div>
                <input onChange={(e) => setEmail(e.target.value)}></input>
              </label>
              <button type="submit">Update your email</button>
            </form>

            <form onSubmit={updatePassword}>
              <label>
                <div>Update your password:</div>
                <input onChange={(e) => setPassword(e.target.value)}></input>
              </label>
              <button type="submit">Update your password</button>
            </form>
            <div>
              <button>Back to home</button>
              <DeleteUser user={user} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateUser;
