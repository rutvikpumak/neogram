import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../component";
import { updateUser } from "../Auth/authSlice";
import { getUserPost } from "../Home/postSlice";
import { SinglePost } from "../Home/SinglePost";
import { closeLoader, openLoader, openModal } from "./profileModalSlice";

export function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const { userPosts, allPosts } = useSelector((state) => state.post);
  const { loader } = useSelector((state) => state.profileModal);

  useEffect(() => {
    dispatch(openLoader());
    dispatch(getUserPost(user.username));
    setTimeout(() => dispatch(closeLoader()), 1000);
  }, [allPosts]);

  useEffect(() => {
    dispatch(updateUser(user.username));
  }, [allUsers]);

  return (
    <div className={`profile-container w-2/4  md:w-full md:mx-4`}>
      <div
        className="home-input bg-white
         px-4 py-3 rounded-xl gap-4 mb-8 text-center border-b-2 border-blue-400 font-semibold"
      >
        PROFILE
      </div>
      <div
        className="profile-input bg-white
        flex items-start p-4 rounded-xl gap-4 my-8 sm:gap-2"
      >
        <img
          src={user.profilePic}
          className="h-20 w-20 rounded-full object-cover sm:h-16 sm:w-16"
        />
        <div className="grow">
          <div className="flex justify-between mb-2">
            <div>
              <p className="text-xl font-bold mr-2 cursor-pointer">{`${user.firstName} ${user.lastName}`}</p>
              <p className="text-sm text-gray-400 cursor-pointer">@{user.userHandler}</p>
            </div>
            <button
              className="px-2 py-1 rounded-md font-semibold text-gray-500 hover:bg-gray-100  ring-1 ring-gray-500 ring-inset self-start"
              onClick={() => dispatch(openModal())}
            >
              Edit
            </button>
          </div>
          <p className="text-gray-500 font-semibold mb-2">{user.bio}</p>
          <div className="flex text-gray-500 font-semibold gap-8 mb-2 sm:gap-2 sm:justify-between">
            <span>{userPosts.length} Posts</span>
            <span>{user.followers.length} Followers</span>
            <span>{user.following.length} Following</span>
          </div>
          <div className="text-gray-500 text-xs font-semibold flex gap-4">
            <div>
              <a
                href={user.link}
                className="text-blue-500 hover:underline decoration-1"
                target="_blank"
              >
                {user.link}
              </a>
            </div>
          </div>
        </div>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className="flex flex-col-reverse gap-6 md:mb-14">
          {userPosts.map((post) => (
            <SinglePost key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
