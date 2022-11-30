import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

import "./Acess.css";

const Acess = ({ getUser }) => {
  const [user, setUser] = useState();
  const [side, setSide] = useState(true);
  const signUpButton = () => {
    setSide(false);
  };
  const loginButton = () => {
    setSide(true);
  };

  return (
    <section className="acess container flex-center">
      <div className="">
        <div className="acess-background flex-center">
          <div
            className={`user-info-box ${side ? "user-info-l" : "user-info-r"}`}
          >
            {side ? (
              <div className="user-info-login">
                <Login setter={setUser} user={user} getUser={getUser} />
              </div>
            ) : (
              <div className="user-info-signup">
                <Signup user={user} getUser={getUser} />
              </div>
            )}
          </div>
          <div className="login-side flex-center">
            <p>Have an account?</p>
            <button className="btn-login-side" onClick={loginButton}>
              Log In
            </button>
          </div>
          <div className="singup-side flex-center">
            <p>Don't have an account?</p>
            <button className="btn-singup-side" onClick={signUpButton}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acess;
