import React from "react";
import Logo from "../../assets/icons/logo.svg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-[90%] md:w-[60%] lg:w-[90%] mx-auto flex flex-col lg:flex-row h-screen items-center justify-center">
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
        <img
          className="w-[28px] md:w-[32px] lg:w-[40px] mb-4 mx-auto lg:mx-0"
          src={Logo}
          alt="Zendo Logo"
        />

        <h1 className="text-2xl font-semibold mb-2">Welcome Back to Zendo</h1>

        <p className="sub-text max-w-md mx-auto lg:mx-0">
          Sign in or create an account to continue your mindful workflow.
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
