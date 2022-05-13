import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { SinglePost } from "./SinglePost";
import { openPostModal } from "./Modal/postModalSlice";
import { getUserPost } from "./postSlice";
import { useEffect, useState } from "react";
export function Home() {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [feedPost, setFeedPost] = useState([]);
  const [trendPost, setTrendPost] = useState({ isTrend: false, posts: [] });

  useEffect(() => {
    if (allPosts) {
      setFeedPost(
        allPosts
          ?.filter(
            (post) =>
              post.username === user.username ||
              user.following.find((ele) => post.username === ele.username)
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [user, allPosts]);

  useEffect(() => {
    dispatch(getUserPost(user.username));
  }, [allPosts]);

  const trendingHandler = () => {
    setTrendPost((prev) => ({ ...prev, isTrend: true }));
    setTrendPost((prev) => ({
      ...prev,
      posts: [...feedPost]
        .sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        .filter((post) => post.likes.likeCount > 0),
    }));
  };

  const latestHandler = () => {
    setTrendPost((prev) => ({ ...prev, isTrend: false }));
  };

  return (
    <div className={`home-container w-2/4  md:w-full md:mx-4 `}>
      <div
        className="home-input bg-white
         px-4 py-3 rounded-xl gap-4 mb-6 text-center border-b-2 border-blue-400 font-semibold"
      >
        FEED
      </div>
      <div
        className="home-input bg-white
        flex justify-between items-center px-4 py-3 rounded-xl gap-4 mb-6"
      >
        <i className="text-xl fa-solid fa-circle-user cursor-pointer" />
        <div className="grow flex justify-between" onClick={() => dispatch(openPostModal())}>
          <p className="grow focus:outline-none opacity-50">What's on your mind ?</p>
          <i className="text-xl fa-solid fa-circle-plus cursor-pointer" />
        </div>
      </div>
      <div
        className="bg-white flex
         px-4 py-2 rounded-xl gap-4 mb-6 text-center  font-semibold justify-evenly text-gray-500 "
      >
        <div className="w-1/2 border-r-2 border-blue-400 ">
          <span className="hover:opacity-70 cursor-pointer" onClick={() => trendingHandler()}>
            <i className="fa-solid fa-fire pr-2" />
            Trending
          </span>
        </div>
        <div className="w-1/2">
          <span className="hover:opacity-70 cursor-pointer" onClick={() => latestHandler()}>
            <i className="fa-solid fa-sort pr-2" />
            Latest Posts
          </span>
        </div>
      </div>
      {trendPost.isTrend ? (
        <div className="flex flex-col gap-6">
          {trendPost.posts.length !== 0 ? (
            [...trendPost.posts].map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {feedPost.length !== 0 ? (
            feedPost.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}
