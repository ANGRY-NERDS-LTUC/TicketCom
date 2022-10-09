import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const ChatHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
  return (
    <div className='ChatHome'>
      <div className='container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};


export default ChatHome;
