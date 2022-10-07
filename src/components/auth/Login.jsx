import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import Add from '../Chat/img/addAvatar.png';
import { auth, db, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

import './styles.css';

const Login = () => {
  const [err, setErr] = useState(false);
  const [errSign, setErrSign] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const loginBtn = useRef();
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    const company = e.target[4].checked;

    try {
      // todo handle sign up type
      const user = await context.signUp(
        { displayName, email, password },
        company,
      );
      context.setUserInfo(user.data);
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {});
          } catch (err) {
            console.log(err);
            setErrSign(true);
            setLoading(false);
          }
        });
      });
      loginBtn.current.click();
      setLoading(false);
      setErrSign(false);
    } catch (err) {
      setErrSign(true);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      await context.login({
        email,
        password,
        displayName,
      });
      console.log('done');
      navigate('/');
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='body'>
      <div className='main'>
        <input
          type='checkbox'
          id='chk'
          aria-hidden='true'
        />

        <div className='signup'>
          <form onSubmit={handleSubmitSignup}>
            <label
              className='label-primary'
              for='chk'
              aria-hidden='true'>
              Sign up
            </label>
            <input
              type='text'
              name='txt'
              placeholder='Display Name'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
            />
            <input
              type='password'
              name='pswd'
              placeholder='Password'
              required
            />
            <div className='file'>
              <input
                required
                style={{ display: 'none' }}
                type='file'
                id='file'
              />
              <label htmlFor='file'>
                <img
                  src={Add}
                  alt=''
                />
                <span>Add an avatar</span>
              </label>
            </div>
            <div className='checkbox'>
              <input
                type='checkbox'
                id='company'
              />
              <label htmlFor='company'>Sign up as company</label>
            </div>
            {loading && (
              <span style={{ color: '#eee' }}>
                Uploading and compressing the image please wait...
              </span>
            )}
            {errSign && (
              <span style={{ color: '#eee' }}>Something went wrong</span>
            )}
            <button disabled={loading}>Sign up</button>
          </form>
        </div>

        <div className='login'>
          <form onSubmit={handleSubmit}>
            <label
              ref={loginBtn}
              for='chk'
              aria-hidden='true'>
              Login
            </label>
            <input
              type='text'
              name='name'
              placeholder='Display Name'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
            />
            <input
              type='password'
              name='pswd'
              placeholder='Password'
              required
            />
            <button>Login</button>
            {err && <span>Something went wrong</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
