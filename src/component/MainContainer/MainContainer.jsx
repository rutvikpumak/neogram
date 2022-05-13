import React from "react";
import { FollowBar, MenuBar } from "../index";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "../Loader/Loader";

export function MainContainer({ children }) {
  return (
    <div className="flex my-8">
      <MenuBar />
      {children}
      <FollowBar />
    </div>
  );
}
