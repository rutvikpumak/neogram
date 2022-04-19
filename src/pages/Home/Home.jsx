import { useState } from "react";
import { FollowBar, NavBar } from "../../component";
import { useModal } from "../../context/modal-context/modalContext";
import "./Home.css";

export function Home() {
  const { modal, setModal } = useModal();
  const [editModal, setEditModal] = useState(false);
  return (
    <div className={`home-container w-2/4  md:w-full md:mx-4 ${modal && "pointer-events-none"}`}>
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
        <input
          className="grow focus:outline-none"
          placeholder="What's on your mind ?"
          onClick={() => setModal(true)}
        />
        <i
          className="text-xl fa-solid fa-circle-plus cursor-pointer"
          onClick={() => setModal(true)}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-white p-4 rounded-xl flex">
          <img
            src="https://pbs.twimg.com/profile_images/1499426863193595910/-r88VRAQ_400x400.jpg"
            className="h-12 rounded-full sm:h-8"
          />
          <div className="post-container px-4 grow">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <span className="text-sm text-gray-400 cursor-pointer">@rutvik_umak</span>
              </div>
              <div
                className="rounded-full px-3 py-0.5 bg-gray-200 cursor-pointer relative"
                onClick={() => setEditModal(!editModal)}
              >
                <i className="text-sm fa-solid fa-ellipsis-vertical opacity-60" />
                {editModal && (
                  <ul className="dropdown absolute m-0 text-sm px-1 py-2 rounded-lg top-8 right-4 bg-white w-36 gap-1">
                    <li className="hover:bg-slate-200 flex items-center  px-3 py-1 rounded-lg">
                      <i className="fa-regular fa-pen-to-square mr-2 " />
                      Edit
                    </li>
                    <li className="hover:bg-slate-200 flex items-center px-3 py-1 rounded-lg">
                      <i className="fa-solid fa-trash mr-2" />
                      Delete
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptas provident
                fugiat consequuntur cum tenetur laborum a ipsam quod quisquam qui et molestiae
                commodi placeat aliquid deserunt molestias perspiciatis reiciendis!
              </p>
            </div>
            <div className="flex my-4 gap-4">
              <div className="cursor-pointer">
                <i className="fa-solid fa-thumbs-up mr-1" />
                <span className="text-gray-500">Like</span>
              </div>
              <div className="cursor-pointer">
                <i className="fa-solid fa-bookmark mr-1" />
                <span className="text-gray-500">Bookmark</span>
              </div>
            </div>
            <div className="home-comment flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="self-center border-solid border border-gray-400 grow flex space-between items-center rounded-md px-2 py-1">
                <input className="grow focus:outline-none" placeholder="Write your comment" />
                <p className="text-sm text-blue-400 cursor-pointer font-semibold">POST</p>
              </div>
            </div>
            <div className="flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="bg-slate-200 rounded-2xl py-2 px-3">
                <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
                  autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus
                  saepe, dignissimos sequi repellat. Perspiciatis, vel animi!
                </p>
              </div>
            </div>
            <div className="flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="bg-slate-200 rounded-2xl py-2 px-3">
                <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
                  autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus
                  saepe, dignissimos sequi repellat. Perspiciatis, vel animi!
                </p>
              </div>
            </div>
            <div className="flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="bg-slate-200 rounded-2xl py-2 px-3">
                <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
                  autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus
                  saepe, dignissimos sequi repellat. Perspiciatis, vel animi!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl flex">
          <img
            src="https://pbs.twimg.com/profile_images/1499426863193595910/-r88VRAQ_400x400.jpg"
            className="h-12 rounded-full sm:h-8"
          />
          <div className="post-container px-4 grow">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <span className="text-sm text-gray-400 cursor-pointer">@rutvik_umak</span>
              </div>
              <div
                className="rounded-full px-3 py-0.5 bg-gray-200 cursor-pointer relative"
                onClick={() => setEditModal(!editModal)}
              >
                <i className="text-sm fa-solid fa-ellipsis-vertical opacity-60" />
                {editModal && (
                  <ul className="dropdown absolute m-0 text-sm px-1 py-2 rounded-lg top-8 right-4 bg-white w-36 gap-1">
                    <li className="hover:bg-slate-200 flex items-center  px-3 py-1 rounded-lg">
                      <i className="fa-regular fa-pen-to-square mr-2 " />
                      Edit
                    </li>
                    <li className="hover:bg-slate-200 flex items-center px-3 py-1 rounded-lg">
                      <i className="fa-solid fa-trash mr-2" />
                      Delete
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptas provident
                fugiat consequuntur cum tenetur laborum a ipsam quod quisquam qui et molestiae
                commodi placeat aliquid deserunt molestias perspiciatis reiciendis!
              </p>
            </div>
            <div className="flex my-4 gap-4">
              <div className="cursor-pointer">
                <i className="fa-solid fa-thumbs-up mr-1" />
                <span className="text-gray-500">Like</span>
              </div>
              <div className="cursor-pointer">
                <i className="fa-solid fa-bookmark mr-1" />
                <span className="text-gray-500">Bookmark</span>
              </div>
            </div>
            <div className="home-comment flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="self-center border-solid border border-gray-400 grow flex space-between items-center rounded-md px-2 py-1">
                <input className="grow focus:outline-none" placeholder="Write your comment" />
                <p className="text-sm text-blue-400 cursor-pointer font-semibold">POST</p>
              </div>
            </div>
            <div className="flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="bg-slate-200 rounded-2xl py-2 px-3">
                <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
                  autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus
                  saepe, dignissimos sequi repellat. Perspiciatis, vel animi!
                </p>
              </div>
            </div>
            <div className="flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="bg-slate-200 rounded-2xl py-2 px-3">
                <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
                  autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus
                  saepe, dignissimos sequi repellat. Perspiciatis, vel animi!
                </p>
              </div>
            </div>
            <div className="flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="bg-slate-200 rounded-2xl py-2 px-3">
                <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
                  autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus
                  saepe, dignissimos sequi repellat. Perspiciatis, vel animi!
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="bg-white p-4 rounded-xl flex">
          <img
            src="https://pbs.twimg.com/profile_images/1499426863193595910/-r88VRAQ_400x400.jpg"
            className="h-12 rounded-full sm:h-8"
          />
          <div className="post-container px-4 grow">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <span className="text-sm text-gray-400 cursor-pointer">@rutvik_umak</span>
              </div>
              <div
                className="rounded-full px-3 py-0.5 bg-gray-200 cursor-pointer relative"
                onClick={() => setEditModal(!editModal)}
              >
                <i className="text-sm fa-solid fa-ellipsis-vertical opacity-60" />
                {editModal && (
                  <ul className="dropdown absolute m-0 text-sm px-1 py-2 rounded-lg top-8 right-4 bg-white w-36 gap-1">
                    <li className="hover:bg-slate-200 flex items-center  px-3 py-1 rounded-lg">
                      <i className="fa-regular fa-pen-to-square mr-2 " />
                      Edit
                    </li>
                    <li className="hover:bg-slate-200 flex items-center px-3 py-1 rounded-lg">
                      <i className="fa-solid fa-trash mr-2" />
                      Delete
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptas provident
                fugiat consequuntur cum tenetur laborum a ipsam quod quisquam qui et molestiae
                commodi placeat aliquid deserunt molestias perspiciatis reiciendis!
              </p>
            </div>
            <div className="flex my-4 gap-4">
              <div className="cursor-pointer">
                <i className="fa-solid fa-thumbs-up mr-1" />
                <span className="text-gray-500">Like</span>
              </div>
              <div className="cursor-pointer">
                <i className="fa-solid fa-bookmark mr-1" />
                <span className="text-gray-500">Bookmark</span>
              </div>
            </div>
            <div className="home-comment flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="self-center border-solid border border-gray-400 grow flex space-between items-center rounded-md px-2 py-1">
                <input className="grow focus:outline-none" placeholder="Write your comment" />
                <p className="text-sm text-blue-400 cursor-pointer font-semibold">POST</p>
              </div>
            </div>
            <div className="flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="bg-slate-200 rounded-2xl py-2 px-3">
                <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
                  autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus
                  saepe, dignissimos sequi repellat. Perspiciatis, vel animi!
                </p>
              </div>
            </div>
            <div className="flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="bg-slate-200 rounded-2xl py-2 px-3">
                <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
                  autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus
                  saepe, dignissimos sequi repellat. Perspiciatis, vel animi!
                </p>
              </div>
            </div>
            <div className="flex gap-3 my-4">
              <i className="text-3xl fa-solid fa-circle-user cursor-pointer" />
              <div className="bg-slate-200 rounded-2xl py-2 px-3">
                <span className="text-sm font-semibold mr-2 cursor-pointer">Rutvik Umak</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus
                  autem quia officia soluta tempore architecto fugit nulla dolor maxime doloribus
                  saepe, dignissimos sequi repellat. Perspiciatis, vel animi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
