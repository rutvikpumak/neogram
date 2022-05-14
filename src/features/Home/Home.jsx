import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { SinglePost } from "./SinglePost";
import { openPostModal } from "./Modal/postModalSlice";
import { getUserPost } from "./postSlice";
import { useEffect, useState } from "react";
import { Loader } from "../../component";
import { closeLoader, openLoader } from "../Profile/profileModalSlice";
export function Home() {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { loader } = useSelector((state) => state.profileModal);
  const dispatch = useDispatch();
  const [feedPost, setFeedPost] = useState([]);
  const [trendPost, setTrendPost] = useState({ isTrend: false, posts: [] });

  useEffect(() => {
    if (allPosts) {
      setFeedPost(
        allPosts
          ?.filter(
            (post) =>
              post?.username === user?.username ||
              user?.following?.find((ele) => post?.username === ele?.username)
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [user, allPosts]);

  useEffect(() => {
    dispatch(getUserPost(user.username));
  }, [allPosts]);

  useEffect(() => {
    dispatch(openLoader());
    setTimeout(() => dispatch(closeLoader()), 1000);
  }, []);

  const trendingHandler = () => {
    dispatch(openLoader());
    setTrendPost((prev) => ({ ...prev, isTrend: true }));
    setTrendPost((prev) => ({
      ...prev,
      posts: [...feedPost]
        ?.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        ?.filter((post) => post.likes.likeCount > 0),
    }));
    dispatch(closeLoader());
  };

  const latestHandler = () => {
    setTrendPost((prev) => ({ ...prev, isTrend: false }));
  };

  return (
    <div className="home-container">
      <div
        className="home-input bg-white
        flex justify-between items-center px-4 py-2 rounded-xl gap-4 mb-6 sm:mb-4 sm:py-2 "
      >
        <i className="text-xl fa-solid fa-circle-user cursor-pointer" />
        <div
          className="grow flex justify-between items-center"
          onClick={() => dispatch(openPostModal())}
        >
          <p className="grow focus:outline-none opacity-50 sm:text-sm">{`What's on your mind , ${user.firstName} ?`}</p>
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
      {loader ? (
        <Loader />
      ) : trendPost.isTrend ? (
        <div className="flex flex-col gap-6 md:mb-14">
          {trendPost.posts.length !== 0 ? (
            [...trendPost.posts].map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <div className="text-xl m-auto text-gray-500 font-bold mt-16">
              <p className="text-center">Like more posts to see what's trending</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-6 md:mb-14">
          {feedPost.length !== 0 ? (
            feedPost.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <></>
          )}
          <div className="text-xl m-auto text-gray-500 font-bold my-4 sm:mb-8">
            <p className="text-center">Follow some users to see feed</p>
          </div>
        </div>
      )}
    </div>
  );
}
