import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Comment } from "./Comment";
import { openPostModal } from "./Modal/postModalSlice";
import { addAndRemoveBookmark, addComment, deleteUserPost, likeAndDislikePost } from "./postSlice";
export function SinglePost({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editModal, setEditModal] = useState(false);
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const [viewAll, setViewAll] = useState(2);
  const {
    _id,
    content,
    username,
    likes: { likeCount, likedBy, dislikedBy },
    bookmark,
    comments,
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

  const postHandler = () => {
    viewAll > 2 && setViewAll((prev) => prev + 1);
    dispatch(addComment({ postId: _id, commentData: comment }));
    setComment("");
  };

  const addRemoveBookmarkHandler = () => {
    dispatch(addAndRemoveBookmark({ postId: _id, isBookmark: isBookmarked ? false : true }));
  };

  return userInfo ? (
    <div className="bg-white p-4 rounded-xl flex flex-col">
      <div className="flex">
        <img
          src={user.userHandler === userInfo?.userHandler ? user.profilePic : userInfo?.profilePic}
          className="h-12 w-12 rounded-full sm:h-8 sm:w-8"
          alt={userInfo?.userHandler}
        />
        <div className="flex items-center justify-between mb-2 w-full">
          <div
            onClick={() =>
              user.userHandler === userInfo?.userHandler
                ? navigate("/profile")
                : navigate(`/user-profile/${userInfo?.userHandler}`)
            }
          >
            <span className="text-lg font-semibold mr-1 cursor-pointer ml-2 sm:text-md">{`${userInfo?.firstName} ${userInfo?.lastName}`}</span>
            <span className="text-sm text-gray-400 cursor-pointer">@{userInfo?.userHandler}</span>
          </div>
          {user.username === username && (
            <div
              className="rounded-full px-3 py-0.5 bg-gray-200 cursor-pointer relative duration-200"
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
      </div>

      <div className="post-container grow pt-4 sm:pt-2">
        <div>
          <p className="text-gray-600 break-all">{content}</p>
        </div>
        <div className="text-gray-500 flex my-4 gap-4 sm:my-2">
          <div className="text-sm cursor-pointer" title="Like" onClick={() => likeDislikeHandler()}>
            <i className={`fa fa-${isLiked ? "heart" : "heart-o"} mr-1 fa-solid`} />
            <span className="text-gray-500">
              {likeCount === 0 ? "Like" : `${likeCount} ${likeCount === 1 ? "Like" : "Likes"}`}
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
        <div className="home-comment flex gap-3 my-3 mt-6 sm:mt-4">
          <img
            src={user.profilePic}
            className="h-8 w-8 rounded-full  cursor-pointer sm:h-6 sm:w-6"
          />
          <div className="self-center border-solid border border-gray-400 grow flex space-between items-center rounded-md px-2 py-1">
            <input
              className="grow focus:outline-none sm:text-sm"
              placeholder="Write your comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className={`text-sm text-blue-400 cursor-pointer font-semibold ${
                comment.trim().length < 1 && "hover:cursor-not-allowed"
              }`}
              onClick={() => postHandler()}
              disabled={comment.trim().length < 1 ? true : false}
            >
              POST
            </button>
          </div>
        </div>
        <div className={`flex items-start flex-col${viewAll > 2 ? "-reverse" : ""}`}>
          <div className="flex flex-col gap-4 w-full">
            {comments.length > 0 &&
              [...comments]
                .slice(0, viewAll)
                .map((comment) => <Comment key={comment._id} comment={comment} postId={_id} />)}
          </div>
          {comments.length > 2 && (
            <p
              className="text-gray-500 cursor-pointer underline my-1 mb-2 ml-12 md:ml-10 text-sm hover:text-gray-700"
              onClick={() => setViewAll(viewAll <= 2 ? comments.length : 2)}
            >
              {viewAll <= 2 ? "View all comments" : "Hide comments"}
            </p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
