import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import { encode, decode } from 'js-base64';
import { useCookies } from 'react-cookie';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const signUp = ({ displayName, email, password, file }, company = false) => {
    let route = '/auth/user/signup';
    if (company) {
      route = '/auth/companies/signup';
    }
    return axios.post(`http://localhost:5000${route}`, {
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
      'http://localhost:5000/auth/login',
      {},
      {
        headers: {
          Authorization: `Basic ${userInfo64}`,
        },
      },
    );
    if (user.data === 'email did not verified please check your email') {
      setUserInfo({ user: { displayName, password } });
      throw new Error('verified');
    }
    setCookie('token', user.data.user.token, { path: '/' });
    setUserInfo(user.data);
  };
  const logout = () => {
    removeCookie('token');
    setCurrentUser({});
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
      // console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signUp, setUserInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
