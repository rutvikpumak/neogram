import { NavLink } from "react-router-dom";
import "./MenuBar.css";
import logo from "../../assets/social-logo.png";
import { logoutUser } from "../../features/Auth/authSlice";
import { useDispatch } from "react-redux";
import { openPostModal } from "../../features/Home/Modal/postModalSlice";
import { toast } from "react-toastify";

export function MenuBar() {
  const dispatch = useDispatch();
  return (
    <aside
      className={`aside-container flex flex-col mr-2 w-1/4 md:mr-0 md:fixed md:bottom-0 md:z-30 md:w-full `}
    >
      <div className="sticky top-6">
        <header className="flex items-center font-bold text-blue-400 md:hidden">
          <img className="h-12" src={logo} />
          <p className="title text-3xl ml-4 sm:ml-2">Neogram</p>
        </header>
        <main className="my-6 pr-4 md:pr-0 md:my-1 md:flex md:justify-around md:text-2xl md:pt-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-house-chimney mr-3 md:mr-0" />
              <span className="md:hidden">FEED</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-compass mr-3 md:mr-0" />
              <span className="md:hidden">EXPLORE</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookmark"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-bookmark mr-3 md:mr-0" />
              <span className="md:hidden">BOOKMARK</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-circle-user mr-3 md:mr-0" />
              <span className="md:hidden"> PROFILE</span>
            </NavLink>
          </li>
          <li
            className="aside-option"
            onClick={() => {
              dispatch(logoutUser());
              toast.success("Logged Out !");
            }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket mr-3 md:mr-0" />
            <span className="md:hidden">LOGOUT</span>
          </li>
          <li className="md:hidden">
            <button
              className="w-full cursor-pointer text-white bg-blue-400 font-bold rounded-2xl py-2 hover:opacity-80"
              onClick={() => dispatch(openPostModal())}
            >
              Post
            </button>
          </li>
        </main>
      </div>
    </aside>
  );
}
