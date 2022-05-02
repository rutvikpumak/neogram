import React from 'react'

export  function Notification() {
  return (
    <div className={`home-container w-2/4  md:w-full md:mx-4 `}>
      <div
        className="home-input bg-white
         px-4 py-3 rounded-xl gap-4 mb-8 text-center border-b-2 border-blue-400 font-semibold"
      >
        NOTIFICATION
      </div>
      <div
        className="profile-input bg-white
        flex items-center p-3 rounded-xl gap-4 my-4 flex-wrap"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1499426863193595910/-r88VRAQ_400x400.jpg"
          className="h-8 rounded-full"
        />
        <p>Rutvik Umak started following you.</p>
        </div>
        <div
        className="profile-input bg-white
        flex items-center p-3 rounded-xl gap-4 my-4 flex-wrap"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1499426863193595910/-r88VRAQ_400x400.jpg"
          className="h-8 rounded-full"
        />
        <p>Rutvik Umak started following you.</p>
        </div>
      </div>
  )
}
