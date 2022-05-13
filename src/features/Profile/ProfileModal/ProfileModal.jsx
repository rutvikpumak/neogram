import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProfileModal.css";
import { closeModal } from "../profileModalSlice";
import { updateUser } from "../../Auth/authSlice";
import { toast } from "react-toastify";

export function ProfileModal() {
  const { modal } = useSelector((state) => state.profileModal);
  const { user } = useSelector((state) => state.auth);
  const [userForm, setUserForm] = useState({});
  const dispatch = useDispatch();

  const updateHandler = () => {
    dispatch(updateUser({ ...userForm }));
    toast.success("User Info Updated !");
    dispatch(closeModal());
  };

  useEffect(() => {
    setUserForm(user);
  }, [user]);

  const updateImageHandler = async (image) => {
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "pfsqnxae");
      const requestOptions = {
        method: "POST",
        body: data,
      };
      await fetch("https://api.cloudinary.com/v1_1/depmzczni/image/upload", requestOptions)
        .then((response) => response.json())
        .then((json) => {
          setUserForm({ ...userForm, profilePic: json.url });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`modal-container justify-center items-center fixed ${modal ? "flex" : "hidden"}`}
    >
      <div className="modal-container-main flex flex-col gap-4 p-4 rounded-xl  w-4/5 max-w-md">
        <div
          onClick={() => {
            dispatch(closeModal());
            setUserForm(user);
          }}
        >
          <i className="text-2xl fa-solid fa-angle-left cursor-pointer" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex ">
            <p className="text-gray-500 font-semibold gap-4 mr-4 w-1/6">Avatar </p>
            <div className="relative">
              <img
                src={userForm?.profilePic}
                className="h-12 w-12 rounded-full ml-6 object-cover"
              />
              <i className="fa-solid fa-camera absolute right-0 top-8 cursor-pointer bg-white rounded-full p-1" />
              <input
                className="cursor-pointer absolute top-8  right-0 opacity-0 w-8"
                accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                type="file"
                onChange={(e) => updateImageHandler(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold gap-4">Link </p>{" "}
            <input
              className="w-9/12  py-1 px-3 rounded-lg focus:outline-none text-sm"
              value={userForm?.link}
              onChange={(e) => setUserForm({ ...userForm, link: e.target.value })}
            />
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold gap-4">Bio </p>
            <textarea
              className="w-9/12  py-1 px-3 rounded-lg text-sm focus:outline-none"
              value={userForm?.bio}
              onChange={(e) => setUserForm({ ...userForm, bio: e.target.value })}
            />
          </div>
        </div>
        <div className="px-1 py-1 text-right">
          <button
            className="px-4 py-1 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-400"
            onClick={() => updateHandler()}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
