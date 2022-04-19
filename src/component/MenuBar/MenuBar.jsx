import { NavLink, useNavigate } from "react-router-dom";
import "./MenuBar.css";
import logo from "../../assets/social-logo.png";
import { useModal } from "../../context/modal-context/modalContext";
import { useAuth } from "../../context/auth/authContext";

export function MenuBar() {
  const { setModal } = useModal();
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");
    setUser();
    setToken("");
    navigate("/login");
  };
  return (
    <aside
      className={`aside-container flex flex-col mr-2 w-1/4 md:mr-0 md:fixed md:bottom-0 md:z-30 md:w-full `}
    >
      <div className="sticky top-8">
        <header className="flex items-center font-bold text-blue-400 md:hidden">
          <img className="h-12" src={logo} />
          <p className="title text-3xl ml-2">Neogram</p>
        </header>
        <main className="my-8 pr-4 md:pr-0 md:my-1 md:flex md:justify-around md:text-2xl md:pt-2">
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
              to="/notification"
              className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}
            >
              <i className="fa-solid fa-bell mr-3 md:mr-0" />
              <span className="md:hidden">NOTIFICATION</span>
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
          <li className="aside-option" onClick={() => logOutHandler()}>
            <i className="fa-solid fa-arrow-right-from-bracket mr-3 md:mr-0" />
            <span className="md:hidden">LOGOUT</span>
          </li>
          <li className="md:hidden">
            <button
              className="w-full cursor-pointer text-white bg-blue-400 font-bold rounded-2xl py-2 hover:opacity-80"
              onClick={() => setModal(true)}
            >
              Post
            </button>
          </li>
        </main>
      </div>
    </aside>
  );
}
