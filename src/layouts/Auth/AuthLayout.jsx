import React from "react";
import Logo from "../../assets/icons/logo.svg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="py-8 w-[90%] md:w-[60%] lg:w-[90%] mx-auto flex flex-col lg:flex-row md:h-screen items-center justify-center">
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0  ">
        <img
          className="w-[28px] md:w-[32px] lg:w-[40px] mb-4 mx-auto lg:mx-0"
          src={Logo}
          alt="Zendo Logo"
        />

        <h1 className="mb-4">Welcome Back to Zendo</h1>

        <p className="sub-text max-w-md mx-auto lg:mx-0 mb-8">
          Your peaceful space for productivity starts here. Log in or create an
          account to begin your mindful journey.
        </p>
      </div>

      <div className="w-full lg:w-1/3">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
