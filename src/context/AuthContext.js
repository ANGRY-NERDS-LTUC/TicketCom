import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { encode } from "js-base64";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const signUp = ({ displayName, email, password, file }, company = false) => {
    let route = "/auth/user/signup";
    if (company) {
      route = "/auth/companies/signup";
    }
    return axios.post(`http://localhost:3001${route}`, {
      displayName,
      email,
      password,
    });
  };
  const setUserInfo = (userInfo = {}) => {
    setCurrentUser({ ...currentUser, ...userInfo });
  };
  const login = async ({ password, displayName }) => {
    const userInfo64 = encode(`${displayName}:${password}`, true);
    const user = await axios.post(
      "http://localhost:3001/auth/login",
      {},
      {
        headers: {
          Authorization: `Basic ${userInfo64}`,
        },
      }
    );
    if (user.data === "email did not verified please check your email") {
      setUserInfo({ user: { displayName, password } });
      throw new Error("verified");
    }
    cookies.set("data", user.data.user, { path: "/" });
    setUserInfo(user.data);
  };
  const logout = () => {
    cookies.remove("data", { path: "/" });
    setCurrentUser({});
    window.location.reload();
  };
  const userToken = () => {
    return cookies.get("data");
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });

    return () => {
      unsub();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signUp, setUserInfo, login, logout, userToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
