import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../pages/user/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ProductDetail from "../pages/user/ProductDetail/ProductDetail";
import Shop from "../pages/user/Shop/Shop";
import Cart from "../pages/user/Cart/Cart";
function UserRouter() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route>
          <Route path="/" exact Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/shop" Component={Shop} />
          <Route path="/cart" Component={Cart} />
        </Route>
      </Routes>
    </div>
  );
}

export default UserRouter;
