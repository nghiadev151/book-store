import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "../pages/user/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ProductDetail from "../pages/user/ProductDetail/ProductDetail";
import Shop from "../pages/user/Shop/Shop";
import Cart from "../pages/user/Cart/Cart";
import Checkout from "../pages/user/Checkout/Checkout";


function UserRouter() {
  const [isLogin, setIsLogin] = React.useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      if(token !== null){
        setIsLogin(true);
      }
      window.scrollTo(0, 0);
    }, [pathname, isLogin, token]);

    return null;
  }
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route>
        <Route path="/" exact  element={<Home />} />
          <Route path="/login" exact  element={<Login />} />
          <Route path="/register" exact  element={<Register />} />
          <Route path="/product/:id" exact  element={<ProductDetail />} />
          <Route path="/checkout" exact  element={<Checkout />} />
          <Route
            path="/shop" exact  element={<Shop />} />
            <Route
            path="/Cửa hàng" exact  element={<Shop />} />
          <Route
            path="/cart" exact element={isLogin ? <Cart /> : <Login/>} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default UserRouter;
