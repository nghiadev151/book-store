import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/user/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
function UserRouter() {
  return (
    <Routes>
        <Route>
        <Route path="/"  exact Component={Home} />
        <Route path="/login"  Component={Login} />
        <Route path="/register" element={<Register/>} />
        </Route>
    </Routes>
  )
}

export default UserRouter