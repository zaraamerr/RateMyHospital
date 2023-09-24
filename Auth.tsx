"use strict";

import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./src/firebase-config.js";
import Cookies from "universal-cookie";

const cookies = new Cookies();

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
  margin:"10px",
};



const Auth = () => {
  
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={wrapper}>
      <p>Sign in With Google to continue</p>
      <button style={buttonStyle} onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Auth;
