import React from "react";
import "./ProfileModal.css";

export function ProfileModal() {
  return (
    <div className={`modal-container justify-center items-center hidden`}>
      <div className="modal-container-main flex flex-col gap-4 p-4 rounded-xl w-1/5 md:w-4/5">
        <div>
          <i className="text-2xl fa-solid fa-angle-left cursor-pointer" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex ">
            <p className="text-gray-500 font-semibold gap-4 mr-4">Avatar </p>
            <div className="relative">
              <img
                src="https://pbs.twimg.com/profile_images/1499426863193595910/-r88VRAQ_400x400.jpg"
                className="h-12 rounded-full w-fit ml-6"
              />
              <i className="fa-solid fa-camera absolute right-0 top-8 cursor-pointer bg-white rounded-full p-1" />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold gap-4">Link </p>{" "}
            <input className="w-9/12  py-1 px-3 rounded-lg focus:outline-none" />
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold gap-4">Bio </p>
            <textarea className="w-9/12  py-1 px-3 rounded-lg focus:outline-none" />
          </div>
        </div>
        <div className="px-1 py-1 text-right">
          <button className="px-4 py-1 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-400">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
