import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const ChatHome = () => {
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
