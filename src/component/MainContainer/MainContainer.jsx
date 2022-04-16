import React from "react";
import { FollowBar, MenuBar } from "../index";

export function MainContainer({ children }) {
  return (
    <div className="flex my-8">
      <MenuBar />
      {children}
      <FollowBar />
    </div>
  );
}
