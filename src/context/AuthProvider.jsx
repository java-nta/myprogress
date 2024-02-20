import Cookies from "js-cookie";
import API from "../utils/API";

const { createContext, useState, useEffect, useContext } = require("react");

const AuthContext = createContext({
  token: "",
  user: {},
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

  const [user, setUser] = useState(Cookies.get("user") || null);
  const _setUser = (username) => {
    const data = { username: username };
    Cookies.set("user", data, { expires: 10, secure: true });
    setUser(data);
  };

  // Get the token from the server
  const getToken = (username, password) => {
    setErrors(null);
    API.post("/auth/login", { username, password })
      .then((response) => {
        if (response.status === 200) {
          const { token, username } = response.data;

          _setToken(token);
          _setUser(username);
        }
      })
      .catch((e) => {
        console.log(e);
        setErrors(e.response.data);
      });
  };
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
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
        user,
        getToken,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
