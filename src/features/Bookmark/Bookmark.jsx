import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../Home/SinglePost";

export function Bookmark() {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const [bookmark, setBookmark] = useState(allPosts);

  useEffect(() => {
    setBookmark(
      allPosts.filter(
        (post) =>
          post.bookmark.some((bookmarkPost) => bookmarkPost.username === user.username) === true
      )
    );
  }, [allPosts]);

  return (
    <div className="w-2/4  md:w-full md:mx-4">
      <div
        className="home-input bg-white
         px-4 py-3 rounded-xl gap-4 mb-8 text-center border-b-2 border-blue-400 font-semibold"
      >
        BOOKMARK
      </div>
      <div className="flex flex-col gap-6 md:mb-14">
        {bookmark.length > 0 ? (
          bookmark.map((post) => <SinglePost key={post._id} post={post} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
