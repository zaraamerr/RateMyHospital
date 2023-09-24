import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./src/firebase-config.js";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);  // Set isAuth to true after successful sign-in
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    hoverBackgroundColor: "blue-500",
    color: "blue-700",
    fontWeight: "bold",
    hoverTextColor: "white",
    padding: "2px 4px",
    border: "1px solid blue-500",
    hoverBorder: "transparent",
    borderRadius: "0.375rem",
  };

  const wrapper = {
    margin: "10px",
  };

  return (
    <div style={wrapper}>
      <p>Sign in With Google to continue</p>
      <button style={buttonStyle} onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};

export default Auth;
