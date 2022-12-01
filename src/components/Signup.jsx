// design
import "./Signup.css";

// libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// backend component
import { addUser } from "../utils";

const Signup = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [user, setUser] = useState();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await addUser(username, email, password, setter);

    console.log("Response: ", response.user);
    setter(response.user);

    if (response.user) {
      navigate("/library");
    }
  };

  return (
    <section id="signup-section">
      <form onSubmit={submitHandler} className="signup-form">
        <h2>Join us today:</h2>
        <label>
          <div className="label-text">Your email here:</div>
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email"
          />
        </label>
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

        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default Signup;
