import React, { useContext, useRef } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Verifier = () => {
  const ref = useRef();
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await axios.post(`http://localhost:5000/auth/verify`, {
        code: ref.current.value,
      });
      context.setUserInfo(userInfo);
      navigate('/login', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };
  console.log(context.currentUser);
  if (!context.currentUser?.displayName || context.currentUser?.isVerify) {
    return (
      <Navigate
        to='/'
        replace
      />
    );
  }
  return (
    <form
      onSubmit={handleVerify}
      style={{ marginTop: '150px' }}>
      <label htmlFor='code'>Enter your code</label>
      <input
        ref={ref}
        type='text'
        name='code'
        id='code'
      />
    </form>
  );
};

export default Verifier;
