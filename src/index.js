import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';

import { ChatContextProvider } from './components/Chat/context/ChatContext';
import {AuthContextProvider} from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
          <CookiesProvider>
              <App />
          </CookiesProvider>
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
