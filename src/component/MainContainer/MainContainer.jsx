import React from "react";
import { FollowBar, MenuBar } from "../index";
import { Search } from "../Search/Search";

export function MainContainer({ children }) {
  return (
    <div className="flex my-4">
      <MenuBar />
      <div className="relative w-2/4 md:w-full md:mx-4">
        <Search />
        <div className=" mt-1 sm:mt-16">{children}</div>
      </div>
      <FollowBar />
    </div>
  );
}
