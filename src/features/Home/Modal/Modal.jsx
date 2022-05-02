import React from "react";
import "./Modal.css";

export function Modal() {
  return (
    <div className={`modal-container justify-center items-center fixed hidden`}>
      <div className="modal-container-main flex flex-col gap-4 p-4 rounded-xl w-1/4 md:w-4/5 ">
        <div>
          <i className="text-2xl fa-solid fa-angle-left cursor-pointer" />
          <i className="text-2xl fa-solid fa-circle-user ml-4" />
        </div>
        <div>
          <textarea
            className="w-full h-52 py-4 px-3 rounded-lg focus:outline-none"
            placeholder="What's on your mind..."
          ></textarea>
        </div>
        <div className="bg-white flex justify-between items-center rounded-lg px-1 py-1">
          <i className="fa-regular fa-image text-2xl ml-4 cursor-pointer" />
          <p className="text-gray-500">0/500</p>
          <button className="px-6 py-2 rounded-lg bg-blue-500 text-white font-bold">Post</button>
        </div>
      </div>
    </div>
  );
}
