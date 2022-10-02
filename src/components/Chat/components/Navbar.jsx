import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className='user'>
        <img
          src={currentUser.photoURL}
          alt=''
        />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>
          <Link to='/'>Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
