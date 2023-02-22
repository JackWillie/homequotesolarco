import React from "react";
import logo from "../assets/images/logo.webp";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full flex justify-center p-5 absolute h-[100px]">
        <img className="w-[130px] h-auto" src={logo} alt="logo" />
      </div>
      {children}
    </>
  );
};

export default Layout;
