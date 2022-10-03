import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPackages from "./components/adminPackages/adminPackages";
import Cart from "./components/Cart/cart";
import CompanyPackages from "./components/companyPackages/companyPackages";
import CreatePackage from "./components/createPackage/createPackage";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Wishlist from "./components/Wishlist/wishlist";
import ChatHome from "./components/Chat/pages/ChatHome";
import "./App.css";
import "./components/Chat/style.scss";
import SignUp from "./components/auth/SignUp";
import Guard from "./components/auth/Guard";
import Login from "./components/auth/Login";
import CompanyGuard from "./components/auth/CompanyGuard";
import Footer from "./components/footer/footer";
import AboutUs from "./components/aboutUs/aboutUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AboutUs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route
            path="/createPackage"
            element={
              <Guard>
                <CompanyGuard>
                  <CreatePackage />
                </CompanyGuard>
              </Guard>
            }
          />
          <Route
            path="/companyPackages"
            element={
              <Guard>
                <CompanyGuard>
                  <CompanyPackages />
                </CompanyGuard>
              </Guard>
            }
          />
          <Route path="/adminPackages" element={<AdminPackages />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/chathome">
            <Route
              index
              element={
                <Guard>
                  <ChatHome />
                </Guard>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
