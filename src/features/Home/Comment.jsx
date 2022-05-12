import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteComment, editComment } from "./postSlice";

export function Comment({ comment, postId }) {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const [editModal, setEditModal] = useState(false);
  const [inputComment, setInputComment] = useState(comment.text);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const userInfo =
    allUsers && allUsers?.find((commentUser) => comment.username === commentUser.username);

  const editHandler = () => {
    setIsEdit(false);
    dispatch(editComment({ postId: postId, commentId: comment._id, commentData: inputComment }));
  };
  return (
    <div className="flex gap-3">
      <img
        src={userInfo?.profilePic}
        className="h-8 rounded-full cursor-pointer"
        onClick={() =>
          comment.username === user.username
            ? navigate("/profile")
            : navigate(`/user-profile/${userInfo?.userHandler}`)
        }
      />
      <div className="bg-slate-200 rounded-xl py-1 px-3 grow">
        <div className="flex justify-between h-6">
          <span
            className="text-sm font-semibold mr-2 cursor-pointer"
            onClick={() =>
              comment.username === user.username
                ? navigate("/profile")
                : navigate(`/user-profile/${userInfo?.userHandler}`)
            }
          >{`${userInfo?.firstName} ${userInfo?.lastName}`}</span>
          {comment.username === user.username && (
            <div
              className="rounded-full px-2 cursor-pointer relative"
              onClick={() => setEditModal(!editModal)}
            >
              <i
                className={`text-sm fa-solid fa-ellipsis-vertical opacity-60 hover:opacity-100 ${
                  isEdit && "hidden"
                }`}
              />
              {editModal && (
                <ul className="dropdown absolute m-0 text-sm px-1 py-1 rounded-lg top-4 right-4 bg-white w-30 gap-1">
                  <li
                    className="hover:bg-slate-200 flex items-center  px-1 py-1 rounded-md"
                    onClick={() => {
                      setIsEdit(!isEdit);
                    }}
                  >
                    <i className="fa-regular fa-pen-to-square mr-2 " />
                    Edit
                  </li>
                  <li
                    className="hover:bg-slate-200 flex items-center px-1 py-1 rounded-md"
                    onClick={() =>
                      dispatch(deleteComment({ postId: postId, commentId: comment._id }))
                    }
                  >
                    <i className="fa-solid fa-trash mr-2" />
                    Delete
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
        {isEdit ? (
          <form
            className="self-center border-gray-400 grow flex space-between items-center rounded-md pb-1"
            onSubmit={() => editHandler()}
          >
            <input
              className="text-sm grow focus:outline-none bg-slate-200 text-gray-600 border-b-2 border-gray-400 mr-4"
              value={inputComment}
              onChange={(e) => setInputComment(e.target.value)}
            />
            <i
              className="fa fa-times-circle-o cursor-pointer text-gray-500"
              aria-hidden="true"
              onClick={() => setIsEdit(false)}
            />
            <i
              className={`fa fa-check-circle-o cursor-pointer font-semibold ml-2 text-gray-500`}
              aria-hidden="true"
              onClick={() => editHandler()}
            />
          </form>
        ) : (
          <p className="text-sm text-gray-500 pb-1">{comment.text}</p>
        )}
      </div>
    </div>
  );
}
