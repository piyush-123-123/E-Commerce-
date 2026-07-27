import { useState } from "react";
import AuthContext from "./AuthContext";


const API_KEY = "AIzaSyDOusCY-amGR3fTRaS8yq9GTm93N7RJbTk";

const initialToken = localStorage.getItem("token");
const initialEmail = localStorage.getItem("email");

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(initialToken || "");
  const [email, setEmail] = useState(initialEmail || "");

  const userIsLoggedIn = !!token;

  const loginHandler = async (email, password) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || "Authentication Failed");
    }

    setToken(data.idToken);
    setEmail(data.email);

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("email", data.email);
  };

  const signupHandler = async (email, password) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || "Signup Failed");
    }

    setToken(data.idToken);
    setEmail(data.email);

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("email", data.email);
  };

  const logoutHandler = () => {
    setToken("");
    setEmail("");

    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const contextValue = {
    token,
    email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    signup: signupHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;