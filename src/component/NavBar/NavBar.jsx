import React from "react";
import logo from "../../assets/social-logo.png";

export function NavBar() {
  return (
    <div className="hidden sticky top-0 bg-white px-3 py-1 z-20 md:block">
      <div className="flex justify-center items-center ">
        <img className="h-12" src={logo} />
        <p className="text-blue-400 title text-3xl ml-4 sm:ml-2 font-bold">Neogram</p>
      </div>
    </div>
  );
}
