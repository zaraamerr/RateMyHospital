import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Auth from "../Auth";
import Cookies from "universal-cookie";
import "./App.css"; // Import your CSS file
import host from "./hos.webp";

const cookies = new Cookies();

const clientId = "800205927052-mavhqd2mt2ks4tcsve3l0pol07inckf0.apps.googleusercontent.com";

const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [userName] = useState("");

  const navigateToHTML = () => {
    window.location.href = "../intro.html";
  };

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", start);
  }, []);


  if(!isAuth){
    return (
      <div>
        <h2 className="h1">Rate My Hospital</h2>
      <div className="login-container" style={{ backgroundColor: "#A6BAAF" }}>
        <div className="login-content" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
        <img src={host} alt="Logo" className="logo-image" />
            <Auth />
        </div>
      </div>
      </div>
    );
  }
  {
    navigateToHTML(); // Redirect to intro.html
    return null; // Return null or any other component you want to show temporarily
  }

};

export default App;
