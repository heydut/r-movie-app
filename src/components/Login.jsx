// design
import "./Login.css";

// libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// backend component
import { loginUser } from "../utils";

const Login = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState(); // I'm not using email at login, just username/password
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await loginUser(username, email, password, setter);

    console.log("Response: ", response.username);
    setter(response.username);

    if (response.username) {
      navigate("/library");
    }
  };

  // const handleLogin = async () => {
  //   if (user) {
  //     await getUser(user);
  //     navigate("/library");
  //   } else {
  //     console.log("no user found");
  //   }
  // };

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
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
