import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignUp = () => {
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <div className="cover">
      <h1>Sign Up</h1>
      <input
        name="name"
        value={input.name}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
        type="text"
        placeholder="Enter your Name"
      />
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
      <button className="signup-btn" onClick={handleSignUp}>
        SIGN UP
      </button>
      <p className="text">Or Sign Up Using</p>
      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>
      <p>
        Already have an account?
        <Link to={"/login"}>
          <u> Login</u>
        </Link>
      </p>
    </div>
  );
};
export default Signup;
