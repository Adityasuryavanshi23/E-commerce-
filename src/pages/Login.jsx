import { useState } from "react";

import sideimage from "../assets/images/Side Image.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase";

const auth = getAuth(app);
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("successfully logged in");
        console.log("user logged in", value.user);
      })
      .catch((err) => {
        alert("invalid credentials");
        console.log("error during signed in", err);
      });
    e.preventDefault();
    console.log(user);
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="SignUp-page">
      <div className="left-sign-up-side">
        <figure>
          <img src={sideimage} alt="" />
        </figure>
      </div>
      <div className=" login-container right-sign-up-content">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <form action="" onSubmit={HandleSubmit}>
          <div className="input-fields">
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={HandleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={HandleChange}
            />
          </div>
          <div className="login-last">
            <button className="login-btn btn">log in</button>
            <p>forgot password?</p>
          </div>
        </form>
      </div>
    </div>
  );
};
