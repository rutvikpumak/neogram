import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Search.css";
export function Search() {
  const { allUsers } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  let timerId = useRef();
  useEffect(() => {
    clearTimeout(timerId.current);
    if (input.trim().length > 0)
      timerId.current = setTimeout(() => {
        setData(
          allUsers?.filter((eleUser) =>
            `${eleUser.firstName} ${eleUser.lastName}`.toLowerCase().includes(input.toLowerCase())
          )
        );
      }, 500);
  }, [input]);
  return (
    <div className="search-container sticky sm:fixed top-0 h-20 py-4 sm:top-14 sm:flex sm:items-center sm:w-full">
      <div className="w-full  py-2 sm:w-11/12">
        <div className="flex space-between items-center rounded-xl px-4 py-2  bg-white border-b-2 border-blue-400 ">
          <i className="fa fa-search text-blue-500 mr-2 cursor-pointer" aria-hidden="true" />
          <input
            className="grow focus:outline-none sm:text-sm"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {input.trim().length > 0 && (
          <ul className="absolute w-5/6 left-12 bg-white z-10 mt-2 rounded-xl shadow-xl md:left-8 max-h-40 overflow-y-auto border-b-2 border-blue-400">
            {data.length > 0 ? (
              data.map((userInfo) => (
                <li
                  key={userInfo._id}
                  className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    user.userHandler === userInfo?.userHandler
                      ? navigate("/profile")
                      : navigate(`/user-profile/${userInfo?.userHandler}`);
                    setInput("");
                  }}
                >
                  <img
                    src={userInfo?.profilePic}
                    className="h-6 rounded-full sm:h-4"
                    alt={userInfo?.userHandler}
                  />
                  <span className="grow text-md text-gray-500   mr-1  ml-2 sm:text-sm ">
                    {`${userInfo?.firstName} ${userInfo?.lastName}`}
                  </span>
                </li>
              ))
            ) : (
              <p className="px-4 py-2 sm:text-sm">No Search found</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
