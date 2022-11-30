import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils";
import "./Login.css";

const Login = ({ setter, user, getUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    await loginUser(username, email, password, setter);
  };

  const navigate = useNavigate();
  const handleLogin = async () => {
    if (user) {
      await getUser(user);
      navigate("/library");
    } else {
      console.log("no user found");
    }
  };

  return (
    <section id="login-section">
      <form onSubmit={submitHandler} className="login-form">
        <h2>Welcome back!</h2>
        <label>
          <div className="label-text">Your username here:</div>
          <input
            onChange={(event) => setUsername(event.target.value)}
            placeholder="username"
          />
        </label>
        <label>
          <div className="label-text">Your password here:</div>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="password"
          />
        </label>
        <button className="login-btn" type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
