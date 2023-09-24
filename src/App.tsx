import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Auth from "../Auth";
import Cookies from "universal-cookie";
import "./App.css"; // Import your CSS file
import host from "./hos.webp";

const cookies = new Cookies();

const clientId = "800205927052-mavhqd2mt2ks4tcsve3l0pol07inckf0.apps.googleusercontent.com";

const App = () => {
  const [isAuth, setIsAuth] = useState(!!cookies.get("auth-token")); // Convert to boolean

  const navigateToHTML = () => {
    window.location.href = "../intro.html";
  };

  const handleSignOut = () => {
    // Perform logout actions here, if needed
    // For this example, we'll just clear the authentication token cookie
    cookies.remove("auth-token");
    setIsAuth(false);
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

  useEffect(() => {
    if (isAuth) {
      navigateToHTML(); // Redirect to intro.html
    }
  }, [isAuth]);

  return (
    <div>
      <h2 className="h1">Rate My Hospital</h2>
      <div className="login-container" style={{ backgroundColor: "#A6BAAF" }}>
        <div className="login-content" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
          <img src={host} alt="Logo" className="logo-image" />
          <Auth setIsAuth={setIsAuth} /> {/* Pass setIsAuth to Auth component */}
        </div>
      </div>
      {isAuth && (
        <button onClick={handleSignOut} className="sign-out-button">
          Sign Out
        </button>
      )}
    </div>
  );
};

export default App;
