import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/social-logo.png";

export function Login() {
  return (
    <div className="w-full h-screen text-gray-800  px-4 py-6 flex flex-col justify-center sm:py-12">
      <div className="w-2/5 py-3 sm:max-w-xl mx-auto text-center md:w-3/4">
        <div className="mt-4 bg-white shadow-md sm:rounded-lg text-left">
          <div className="h-2 bg-blue-500 rounded-t-md"></div>
          <div className="flex justify-center items-center pt-8 md:hidden">
            <img className="h-12" src={logo} />
            <p className="text-blue-400 title text-3xl ml-2 font-bold">Welcome to Neogram</p>
          </div>
          <div className="px-12 py-4 pb-8">
            <span className="text-2xl flex justify-center font-semibold border-b-2 border-blue-400 pb-2">
              Sign In
            </span>
            <div className="pt-8">
              <label className="block font-semibold">Username or Email</label>
              <input
                type="text"
                placeholder="Email"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                required
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                required
              />
              <div>
                <Link to="/">
                  <button className="font-semibold w-full my-6 bg-blue-400 text-white py-2 px-6 rounded-lg hover:bg-blue-500">
                    Sign In With Test
                  </button>
                </Link>
              </div>
              <div className="text-center font-semibold">
                <Link to="/sign-up">
                  <p className="cursor-pointer hover:underline">Create New Account</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
