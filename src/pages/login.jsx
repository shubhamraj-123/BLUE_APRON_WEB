import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      // navigate();
    } else {
      alert("You have enter wrong details!!");
    }
  };
  return (
    <div className="cover">
      <h1>Log In</h1>
      <input
        name="email"
        value={input.email}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
        type="text"
        placeholder="Enter your Email"
      />
      <input
        name="password"
        value={input.password}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
        type="password"
        placeholder="Enter your Password"
      />
      <button className="login-btn" onClick={handleLogin}>
        LOG IN
      </button>
      <p className="text">Or Login Using</p>
      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>
      <p>
        Don't have an account?
        <Link to={"/signup"}>
          <u>Signup Here</u>
        </Link>
      </p>
    </div>
  );
};
export default Login;
