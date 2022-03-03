import React, { useState, use } from "react";
import "./Login.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        Navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const Register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        Navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__img"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="login_logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZONE FAKE CLONE condition pf use $
          sale. Please see your privacy Notice, our cokkies notice and our
          INterest-based ads Notice.
        </p>

        <button className="login__registerButton" onClick={Register}>
          Create your amazone account
        </button>
      </div>
    </div>
  );
};

export default Login;
