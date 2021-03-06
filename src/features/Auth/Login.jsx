import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/social-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import "./Auth.css";
export function Login() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    (() => {
      if (loginForm.email && loginForm.password !== "") {
        dispatch(loginUser(loginForm));
      }
    })();
  }, [loginForm.email, loginForm.password]);

  const loginHandler = () => {
    setLoginForm((form) => ({
      ...form,
      email: "rutvikumak@gmail.com",
      password: "rutvik123",
    }));
  };

  useEffect(() => token && navigate("/"), [token]);
  return (
    <div className="auth-container w-full h-screen text-gray-800  px-4 py-6 flex flex-col justify-center sm:py-12 sm:h-full">
      <div className="w-2/5 py-3 sm:max-w-xl mx-auto text-center sm:w-11/12">
        <div className="mt-4 bg-white shadow-md sm:rounded-lg text-left">
          <div className="h-2 bg-blue-500 rounded-t-md"></div>
          <div className="flex flex-col justify-center items-center pt-2 my-2">
            <div className="flex  justify-center items-center pt-2 md:hidden">
              <img className="h-12" src={logo} />
              <p className="text-blue-400 title text-3xl ml-2 font-bold">Welcome to Neogram</p>
            </div>
            <p className="text-blue-400 title text-md ml-2 font-bold">Connecting People</p>
          </div>
          <div className="px-12 py-4 pb-8 sm:px-6 sm:pt-0 sm:py-3">
            <span className="text-2xl flex justify-center font-semibold border-b-2 border-blue-400 pb-2 sm:text-xl">
              Sign In
            </span>
            <div className="pt-8">
              <label className="block font-semibold">Username or Email</label>
              <input
                type="text"
                placeholder="Email"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md sm:py-4"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                required
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md sm:py-4 sm:mt-1"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                required
              />
              <div>
                <button
                  className="font-semibold w-full my-6 bg-blue-400 text-white py-2 px-6 rounded-lg hover:bg-blue-500 sm:py-1"
                  onClick={() => loginHandler()}
                >
                  Sign In With Test
                </button>
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
