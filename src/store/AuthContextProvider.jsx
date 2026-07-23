import { useState } from "react";
import AuthContext from "./AuthContext";

const initialToken = localStorage.getItem("token");
const initialEmail = localStorage.getItem("email");

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(initialToken);
  const [email,setEmail]=useState(initialEmail);

  const userIsLoggedIn = !!token;
 
  const loginHandler = (token,email) => {
     console.log("loginHandler email:", email);

    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email",email);
    console.log(localStorage.getItem("email"));
  };

  const logoutHandler = () => {
    setToken("");
    setEmail("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;