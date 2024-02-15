import Cookies from "js-cookie";
import API from "../utils/API";

const { createContext, useState, useEffect, useContext } = require("react");

const AuthContext = createContext({
  token: "",
  errors: {},
  getToken: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  // handle the errors
  const [errors, setErrors] = useState(null);
  // This where and how I store the token
  const [token, setToken] = useState(Cookies.get("token") || null);
  const _setToken = (token) => {
    Cookies.set("token", token, { expires: 10, secure: true });
    setToken(token);
  };

  // Get the token from the server
  const getToken = (username, password) => {
    setErrors(null);
    API.post("/auth/login", { username, password })
      .then((response) => {
        if (response.status === 200) _setToken(response.data.token);
      })
      .catch((e) => {
        setErrors(e.response.data);
      });
  };
  const logout = () => {
    Cookies.remove("token");
    setToken(null);
  };

  // If the token is present I will check if it valid
  useEffect(() => {
    setErrors(null);
    if (token) {
      API.get("/auth/testToken").catch((e) => console.error(e));
    }
  }, [token]);
  return (
    <AuthContext.Provider
      value={{
        token,
        logout,
        getToken,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
