import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/social-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "./authSlice";

export function SignUp() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpFields = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [signUpForm, setSignUpForm] = useState(signUpFields);

  useEffect(() => token && navigate("/"), [token]);

  const signUpHandler = () => {
    const { email, password, firstName, lastName } = signUpForm;
    if (email && password && firstName && lastName !== "") {
      (async () => {
        await dispatch(signUpUser(signUpForm));
      })();
    }
  };

  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setSignUpForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <div className="w-full h-screen text-gray-800  px-4 py-6 flex flex-col justify-center sm:py-12">
      <div className="w-2/5 py-3 sm:max-w-xl mx-auto text-center sm:w-11/12">
        <div className="mt-4 bg-white shadow-md sm:rounded-lg text-left">
          <div className="h-2 bg-blue-500 rounded-t-md"></div>
          <div className="flex justify-center items-center pt-8 md:hidden">
            <img className="h-12" src={logo} />
            <p className="text-blue-400 title text-3xl ml-2 font-bold">Welcome to Neogram</p>
          </div>
          <div className="px-12 py-4 pb-8 ">
            <span className="text-2xl flex justify-center font-semibold border-b-2 border-blue-400 pb-2">
              Sign Up
            </span>
            <div className="pt-8">
              <div className="flex gap-4 sm:flex-col mb-4">
                <div>
                  <label className="block font-semibold">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                    value={signUpForm.firstName}
                    onChange={(e) => fillFormValue(e, "firstName")}
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                    value={signUpForm.lastName}
                    onChange={(e) => fillFormValue(e, "lastName")}
                    required
                  />
                </div>
              </div>
              <label className="block font-semibold">Username or Email</label>
              <input
                type="text"
                placeholder="Email"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                value={signUpForm.email}
                onChange={(e) => fillFormValue(e, "email")}
                required
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                value={signUpForm.password}
                onChange={(e) => fillFormValue(e, "password")}
                required
              />
              <div>
                <button
                  className="font-semibold w-full my-6 bg-blue-400 text-white py-2 px-6 rounded-lg hover:bg-blue-500"
                  onClick={() => signUpHandler()}
                >
                  Create Account
                </button>
              </div>
              <div className="text-center  font-semibold">
                <Link to="/login">
                  <p className="cursor-pointer hover:underline">Already Have An Account ?</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
