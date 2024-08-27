import { useState } from "react";

import { Footer } from "../components/Footer";
import { TopHeader } from "../components/TopHeader";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <TopHeader />
      <div className="SignUp-page">
        <div className="left-sign-up-side">
          <figure>
            <img src="/public/images/Side Image.png" alt="" />
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
                value={user.email}
                onChange={HandleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
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
      <Footer />
    </>
  );
};
