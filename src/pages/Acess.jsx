import { useContext, useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { User } from "../App";

import "./Acess.css";

const Acess = () => {
  const context = useContext(User);

  // const [user, setUser] = useState();
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
                <Login setter={context.setUser} user={context.user} />
              </div>
            ) : (
              <div className="user-info-signup">
                <Signup setter={context.setUser} user={context.user} />
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
