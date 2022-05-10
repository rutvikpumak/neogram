import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserPost, editUserPost } from "../postSlice";
import "./Modal.css";
import { closePostModal } from "./postModalSlice";

export function Modal() {
  const dispatch = useDispatch();
  const { postModal, postInfo } = useSelector((state) => state.postModal);

  const [input, setInput] = useState("");

  useEffect(() => {
    if (postInfo && postInfo.content) {
      setInput(postInfo.content);
    }
  }, [postInfo]);

  const postHandler = () => {
    postInfo
      ? dispatch(
          editUserPost({
            ...postInfo,
            content: input,
          })
        )
      : dispatch(
          addUserPost({
            content: input,
          })
        );
    setInput("");
    dispatch(closePostModal());
  };

  return (
    <div
      className={`modal-container justify-center items-center fixed ${
        postModal ? "flex" : "hidden"
      }`}
    >
      <div className="modal-container-main flex flex-col gap-4 p-4 rounded-xl w-1/4 md:w-4/5 ">
        <div>
          <i
            className="text-2xl fa-solid fa-angle-left cursor-pointer"
            onClick={() => {
              dispatch(closePostModal());
              setInput("");
            }}
          />
          <i className="text-2xl fa-solid fa-circle-user ml-4" />
        </div>
        <div>
          <textarea
            className="w-full h-52 py-4 px-3 rounded-lg focus:outline-none"
            placeholder="What's on your mind..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="bg-white rounded-lg px-1 py-1">
          <button
            className={`px-4 py-1 w-full rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-400  ${
              input.length < 5 && "hover:cursor-not-allowed"
            }`}
            disabled={input.length < 5 ? true : false}
            onClick={() => postHandler()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
