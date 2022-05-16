import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../../component";
import { getUserPost } from "../Home/postSlice";
import { SinglePost } from "../Home/SinglePost";
import { closeLoader, openLoader } from "./profileModalSlice";
import { followUnFollowUser } from "./userSlice.js";
export function AnyProfile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const [singleUser, setSingleUser] = useState({});
  const { userPosts, allPosts } = useSelector((state) => state.post);
  const { loader } = useSelector((state) => state.profileModal);
  useEffect(() => {
    setSingleUser(allUsers.find((user) => user.userHandler === userId));
  }, [allUsers, userId]);

  useEffect(() => {
    dispatch(openLoader());
    setTimeout(() => dispatch(closeLoader()), 500);
  }, [userId]);

  useEffect(() => {
    dispatch(getUserPost(singleUser?.username));
  }, [singleUser, allPosts]);

  const isFollowing = singleUser?.followers?.some((anyUser) => anyUser.username === user.username);

  return singleUser?.username ? (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div
            className="profile-input bg-white
        flex items-start p-4 rounded-xl gap-4 mt-4 mb-8 sm:gap-2 "
          >
            <img src={singleUser.profilePic} className="h-20 w-20 rounded-full object-cover" />
            <div className="grow">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="text-xl font-bold mr-2 cursor-pointer">{`${singleUser.firstName} ${singleUser.lastName}`}</p>
                  <p className="text-sm text-gray-400 cursor-pointer">@{singleUser.userHandler}</p>
                </div>
                <button
                  className="font-semibold h-8 cursor-pointer text-white bg-blue-400 pl-2 py-1 pr-3 rounded-2xl hover:opacity-80 sm:text-sm sm:px-2 sm:py-0 sm:pl-1"
                  onClick={() =>
                    dispatch(
                      followUnFollowUser({
                        userId: singleUser._id,
                        dispatch: dispatch,
                        isFollow: isFollowing ? false : true,
                      })
                    )
                  }
                >
                  {!isFollowing ? "+ Follow" : "Unfollow"}
                </button>
              </div>
              <p className="text-gray-500 font-semibold mb-2">{singleUser.bio}</p>
              <div className="flex text-gray-500 font-semibold gap-8 mb-2 sm:gap-0 sm:justify-between">
                <span>{userPosts.length} Posts</span>
                <span>{singleUser.followers.length} Followers</span>
                <span>{singleUser.following.length} Following</span>
              </div>
              <div className="text-gray-500 text-xs font-semibold flex gap-4">
                <div>
                  <a
                    href={singleUser.link}
                    className="text-blue-500 hover:underline decoration-1"
                    target="_blank"
                  >
                    {singleUser.link}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:mb-14">
            {userPosts.length > 0 ? (
              userPosts.map((post) => <SinglePost key={post._id} post={post} />)
            ) : (
              <div className="text-xl m-auto text-gray-500 font-bold my-4 sm:mb-8">
                <p className="text-center">No Posts Yet</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  ) : (
    <></>
  );
}
