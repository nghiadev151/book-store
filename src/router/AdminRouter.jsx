import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from '../pages/admin/Home/Home';
import NewProduct from "../pages/admin/ProductManager/NewProduct";
import ProductManager from "../pages/admin/ProductManager/ProductManager";


function AdminRouter() {
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
              <Route path="/productManager" Component={ProductManager} />
            </Route>
          </Routes>
        </div>
        );
}

export default AdminRouter