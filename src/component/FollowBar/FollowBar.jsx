import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUnFollowUser } from "../../features/Profile/userSlice";

export function FollowBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(
    () =>
      setSuggestion(
        allUsers
          .filter((ele) => ele.username !== user.username)
          .filter((ele) => !user.following.find((ele2) => ele2._id === ele._id))
      ),
    [user, allUsers]
  );
  return (
    <div className="follow-container w-1/4 ml-8 p-4 bg-white rounded-2xl h-max sticky top-8 md:hidden">
      <p className="font-semibold pb-4">Who to follow</p>
      {suggestion.length > 0 ? (
        suggestion.map((suggestUser) => (
          <div
            key={suggestUser._id}
            className="flex items-star  border-solid border-t-2 border-gray-300 py-4"
          >
            <img src={suggestUser.profilePic} className="h-8 rounded-full self-center" />

            <div className="flex grow justify-between ml-1">
              <div>
                <p className="font-semibold cursor-pointer">{`${suggestUser.firstName} ${suggestUser.lastName}`}</p>
                <p className="text-xs text-gray-400 ">{suggestUser.userHandler}</p>
              </div>
              <div className="items-center">
                <button
                  className="font-semibold  cursor-pointer text-white bg-blue-400 pl-2 py-1 pr-3 rounded-2xl hover:opacity-80"
                  onClick={() =>
                    dispatch(
                      followUnFollowUser({
                        userId: suggestUser._id,
                        dispatch: dispatch,
                        isFollow: true,
                      })
                    )
                  }
                >
                  + Follow
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="border-solid border-t-2 border-gray-300 py-4">
          <p className="font-semibold text-center">No Suggestions</p>
        </div>
      )}
    </div>
  );
}
