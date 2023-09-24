import { auth } from "./firebase-config.js"; // Adjust the path accordingly
import { signOut } from "firebase/auth";

const SignOut = () => {
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      // Clear authentication-related cookies or tokens
      document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.error("Error during sign-out:", error);
    });
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
