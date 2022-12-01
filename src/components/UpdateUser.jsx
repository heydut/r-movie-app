// design
import "./UpdateUser.css";
import userimg from "../imgs/user.png";

// libraries
import React, { useState } from "react";

// component
import DeleteUser from "./DeleteUser";

// backend component
import { updateUser } from "../utils";

//////////////////////////////////////////////////////////////

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
    <section className="user-card container  flex-center">
      <div className="">
        <div className="user-card-bg flex-center">
          <div className="user-card-info">
            <img src={userimg} alt="userimg" />
            <p>Hello, {user}!</p>
            <button>Edit my account</button>

            <DeleteUser user={user} />

            <button>Back to home</button>
          </div>
          <div className="user-change-info-fake flex-center"></div>
          <div className="user-change-info flex-center">
            <form onSubmit={updateUsername}>
              <label>
                <div>Change username</div>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your new username"
                ></input>
              </label>
              <button type="submit">
                <i class="fa-solid fa-circle-check"></i>
              </button>
            </form>

            <form onSubmit={updateEmail}>
              <label>
                <div>Change email</div>

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your new email"
                ></input>
              </label>
              <button type="submit">
                <i class="fa-solid fa-circle-check"></i>
              </button>
            </form>

            <form onSubmit={updatePassword}>
              <div>Change password</div>

              <label className="form-change">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your new password"
                ></input>
                <button type="submit">
                  <i class="fa-solid fa-circle-check"></i>
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateUser;
