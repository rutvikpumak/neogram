import React from "react";

export function FollowBar() {
  return (
    <div className="follow-container w-1/4 ml-8 p-4 bg-white rounded-2xl h-max sticky top-8 md:hidden">
      <p className="font-semibold pb-4">Who to follow</p>
      <div className="flex items-star  border-solid border-t-2 border-gray-300 py-4">
        <img
          src="https://pbs.twimg.com/profile_images/1499426863193595910/-r88VRAQ_400x400.jpg"
          className="h-8 rounded-full self-center"
        />
        <div className="flex grow justify-between ml-1">
          <div>
            <p className="font-semibold cursor-pointer">Rutvik Umak</p>
            <p className="text-xs text-gray-400 ">@rutvik_umak</p>
          </div>
          <div className="items-center">
            <button className="font-semibold  cursor-pointer text-white bg-blue-400 pl-2 py-1 pr-3 rounded-2xl hover:opacity-80">
              + Follow
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-star  border-solid border-t-2 border-gray-300 py-4">
        <img
          src="https://pbs.twimg.com/profile_images/1499426863193595910/-r88VRAQ_400x400.jpg"
          className="h-8 rounded-full self-center"
        />
        <div className="flex grow justify-between ml-1">
          <div>
            <p className="font-semibold cursor-pointer">Rutvik Umak</p>
            <p className="text-xs text-gray-400 ">@rutvik_umak</p>
          </div>
          <div className="items-center">
            <button className="font-semibold  cursor-pointer text-white bg-blue-400 pl-2 py-1 pr-3 rounded-2xl hover:opacity-80">
              + Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
