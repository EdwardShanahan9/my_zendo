import React from "react";
import Logo from "../../assets/icons/logo.svg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div>
        <img
          className="w-[28px] md:w-[32px] lg:w-[40px]"
          src={Logo}
          alt="Zendo Logo"
        />

        <h1>Welcome to Your Space of Focus</h1>

        <p>
          Zendo is your calm corner of the internet — where tasks feel lighter,
          and progress feels natural. Whether you're just joining us or
          returning to continue your flow, you're in the right place.
        </p>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
