import React from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: async (email, password) => {},
  signup: async (email, password) => {},
  logout: () => {},
});

export default AuthContext;