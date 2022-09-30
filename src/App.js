import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AdminPackages from './components/adminPackages/adminPackages';
import Cart from './components/Cart/cart';
import CompanyPackages from './components/companyPackages/companyPackages';
import CreatePackage from './components/createPackage/createPackage';
import Header from './components/header/header';
import Home from './components/home/home';
import Wishlist from './components/Wishlist/wishlist';
import ChatHome from './components/Chat/pages/ChatHome';
import ChatLogin from './components/Chat/pages/ChatLogin';
import ChatRegister from './components/Chat/pages/ChatRegister';
import { AuthContext } from './components/Chat/context/AuthContext';
import './App.css';
import './components/Chat/style.scss';

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/chathome/chatlogin' />;
    }

    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/createPackage'
            element={<CreatePackage />}
          />
          <Route
            path='/companyPackages'
            element={<CompanyPackages />}
          />
          <Route
            path='/adminPackages'
            element={<AdminPackages />}
          />
          <Route
            path='/wishlist'
            element={<Wishlist />}
          />
          <Route
            path='/cart'
            element={<Cart />}
          />
          <Route path='/chathome'>
            <Route
              index
              element={
                <ProtectedRoute>
                  <ChatHome />
                </ProtectedRoute>
              }
            />
            <Route
              path='/chathome/chatlogin'
              element={<ChatLogin />}
            />
            <Route
              path='/chathome/chatregister'
              element={<ChatRegister />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
