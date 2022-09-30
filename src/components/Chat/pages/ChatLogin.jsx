import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const ChatLogin = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/chathome');
    } catch (err) {
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
          <Link to='/chathome/chatregister'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default ChatLogin;
