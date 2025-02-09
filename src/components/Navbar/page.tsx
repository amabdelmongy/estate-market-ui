"use client";
import React from "react";
import Left from "./LeftSection";
import Center from "./CenterSection";
import Right from "./RightSection";

// Main navbar index component with sub components with seperate sections

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-20 flex w-full items-center justify-between bg-white bg-opacity-90 px-2 py-4 shadow-lg backdrop-blur-md dark:bg-slate-900 tablet:flex-row">
        {/* Left */}
        <div className="flex basis-1/3 items-center justify-start space-x-4">
          <Left />
        </div>
        {/* Center */}
        <div className="hidden basis-1/3 items-center justify-center space-x-4 laptop:flex">
          <Center />
        </div>
        {/* Right */}
        <div className="flex basis-1/3 items-center justify-end space-x-4 ">
          <Right />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
