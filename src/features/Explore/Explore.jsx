import React from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../Home/SinglePost";

export function Explore() {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={`home-container w-2/4  md:w-full md:mx-4 `}>
      <div
        className="home-input bg-white
         px-4 py-3 rounded-xl gap-4 mb-8 text-center border-b-2 border-blue-400 font-semibold"
      >
        EXPLORE
      </div>
      <div className="flex flex-col-reverse gap-6 md:mb-14">
        {allPosts.length !== 0 ? (
          allPosts.map((post) => <SinglePost key={post._id} post={post} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
