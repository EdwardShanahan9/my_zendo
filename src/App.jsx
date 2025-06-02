import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home/Home";
import AuthLayout from "./layouts/Auth/AuthLayout";
import SignUp from "./layouts/Auth/SignUp/Signup";
import Login from "./layouts/Auth/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="auth/" element={<AuthLayout />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="dashboard" element={<div>Dashboard</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
