import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Footer } from "../components/Footer";
import { TopHeader } from "../components/TopHeader";
import { Login } from "./Login";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import sideimage from "../assets/images/Side Image.png";
import { app } from "../firebase/firebase";

const auth = getAuth(app);
export const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const [isLogin, setIsLogin] = useState(false);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      alert("successfully created account", res);
      console.log(res);
    });

    e.preventDefault();
    console.log(user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };
  if (isLogin) {
    return <Login />;
  }

  return (
    <>
      <TopHeader />
      <div className="SignUp-page">
        <div className="left-sign-up-side">
          <figure>
            <img src={sideimage} alt="" />
          </figure>
        </div>
        <div className="right-sign-up-side">
          <div className="right-sign-up-content">
            <h1>Create an account</h1>
            <p>enter you details below</p>
            <form action="" onSubmit={HandleSubmit}>
              <div className="input-fields">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={HandleChange}
                />
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
              <button className="create-account selling-view-all-btn ">
                create account
              </button>
            </form>
            <div className="google-sign-up">
              <div className="sign-up-content">
                <p>Sign up with Google</p>
                <FcGoogle className="google-icon" />
              </div>
            </div>
          </div>
          <div className="login-content">
            <p>Already have account?</p>
            <p className="login" onClick={() => setIsLogin(true)}>
              Log in
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
