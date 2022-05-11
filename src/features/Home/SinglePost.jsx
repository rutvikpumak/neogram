import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { openPostModal } from "./Modal/postModalSlice";
import { addAndRemoveBookmark, deleteUserPost, likeAndDislikePost } from "./postSlice";
export function SinglePost({ post }) {
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const {
    _id,
    content,
    username,
    likes: { likeCount, likedBy, dislikedBy },
    bookmark,
  } = post;
  const userInfo = allUsers && allUsers?.find((user) => user.username === username);
  const isLiked = likedBy?.some((like) => like.username === user.username);
  const isBookmarked = bookmark?.some((bookmarkPost) => bookmarkPost.username === user.username);

  const editHandler = () => {
    dispatch(openPostModal(post));
  };

  const likeDislikeHandler = () => {
    dispatch(likeAndDislikePost({ postId: _id, isLike: isLiked ? false : true }));
  };

  const addRemoveBookmarkHandler = () => {
    dispatch(addAndRemoveBookmark({ postId: _id, isBookmark: isBookmarked ? false : true }));
  };

  return userInfo ? (
    <div className="bg-white p-4 rounded-xl flex">
      <img src={userInfo?.profilePic} className="h-12 rounded-full" alt={userInfo?.userHandler} />
      <div className="post-container px-4 grow">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="font-semibold mr-1 cursor-pointer">{`${userInfo?.firstName} ${userInfo?.lastName}`}</span>
            <span className="text-sm text-gray-400 cursor-pointer">@{userInfo?.userHandler}</span>
          </div>
          {user.username === username && (
            <div
              className="rounded-full px-3 py-0.5 bg-gray-200 cursor-pointer relative"
              onClick={() => setEditModal(!editModal)}
            >
              <i className="text-sm fa-solid fa-ellipsis-vertical opacity-60" />
              {editModal && (
                <ul className="dropdown absolute m-0 text-sm px-1 py-2 rounded-lg top-8 right-4 bg-white w-36 gap-1">
                  <li
                    className="hover:bg-slate-200 flex items-center  px-3 py-1 rounded-lg"
                    onClick={() => editHandler()}
                  >
                    <i className="fa-regular fa-pen-to-square mr-2 " />
                    Edit
                  </li>
                  <li
                    className="hover:bg-slate-200 flex items-center px-3 py-1 rounded-lg"
                    onClick={() => dispatch(deleteUserPost(_id))}
                  >
                    <i className="fa-solid fa-trash mr-2" />
                    Delete
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
        <div>
          <p className="text-gray-500">{content}</p>
        </div>
        <div className="text-gray-500 flex my-4 gap-4">
          <div className="text-sm cursor-pointer" title="Like" onClick={() => likeDislikeHandler()}>
            <i className={`fa fa-${isLiked ? "heart" : "heart-o"} mr-1 fa-solid`} />
            <span className="text-gray-500">
              {likeCount === 0 ? "Be the first to like this" : `${likeCount} Likes`}
            </span>
          </div>
          <div
            className="text-sm cursor-pointer"
            title="Bookmark"
            onClick={() => addRemoveBookmarkHandler()}
          >
            <i className={`fa fa-${isBookmarked ? "bookmark" : "bookmark-o"} mr-1 fa-solid `} />
            <span className="text-gray-500">{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
          </div>
        </div>
        <div className="home-comment flex gap-3 my-4">
          <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
          <div className="self-center border-solid border border-gray-400 grow flex space-between items-center rounded-md px-2 py-1">
            <input className="grow focus:outline-none" placeholder="Write your comment" />
            <p className="text-sm text-blue-400 cursor-pointer font-semibold">POST</p>
          </div>
        </div>
        {/* <div className="flex gap-3 my-4">
          <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
          <div className="bg-slate-200 rounded-2xl py-2 px-3">
            <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
              autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus saepe,
              dignissimos sequi repellat. Perspiciatis, vel animi!
            </p>
          </div>
      </div>*/}
      </div>
    </div>
  ) : (
    <></>
  );
}
