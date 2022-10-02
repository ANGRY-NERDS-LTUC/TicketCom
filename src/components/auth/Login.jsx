import React, {useContext, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const context = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      await context.login({
        email,
        password,
        displayName
      })
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/', { replace: true });
    } catch (err) {
      navigate('/verifier', { replace: true });
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>TicketCom Chat</span>
        <span className='title'>Enter The Chat page</span>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Name'
          />
          <input
              type='email'
              placeholder='email'
          />
          <input
            type='password'
            placeholder='password'
          />
          <button>Enter</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You don't have an account?{' '}
          <Link to='/sign-up'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
