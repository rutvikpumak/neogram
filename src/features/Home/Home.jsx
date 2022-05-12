import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { SinglePost } from "./SinglePost";
import { openPostModal } from "./Modal/postModalSlice";
import { getUserPost } from "./postSlice";
import { useEffect } from "react";
export function Home() {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPost(user.username));
  }, [allPosts]);
  return (
    <div className={`home-container w-2/4  md:w-full md:mx-4 `}>
      <div
        className="home-input bg-white
         px-4 py-3 rounded-xl gap-4 mb-8 text-center border-b-2 border-blue-400 font-semibold"
      >
        FEED
      </div>
      <div
        className="home-input bg-white
        flex justify-between items-center px-4 py-3 rounded-xl gap-4 mb-8"
      >
        <i className="text-xl fa-solid fa-circle-user cursor-pointer" />
        <div className="grow flex justify-between" onClick={() => dispatch(openPostModal())}>
          <p className="grow focus:outline-none opacity-50">What's on your mind ?</p>
          <i className="text-xl fa-solid fa-circle-plus cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col-reverse gap-6">
        {allPosts.length !== 0 ? (
          allPosts.map((post) => <SinglePost key={post._id} post={post} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
