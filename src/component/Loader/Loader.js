import React from "react";
import loaderGif from "../../assets/loader.svg";
import "./Loader.css";
export function Loader() {
  return (
    <div className="loader-wrapper flex items-center justify-center w-2/4  md:w-full md:mx-4">
      <img src={loaderGif} className="loader"></img>
    </div>
  );
}
