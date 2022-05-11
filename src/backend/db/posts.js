import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam possimus qui cumque reprehenderit molestias unde? Reiciendis assumenda, repellat asperiores tempora provident accusantium inventore, eligendi veniam explicabo minima atque suscipit..",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "balika@gmail.com",
    bookmark: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam possimus qui cumque reprehenderit molestias unde? Reiciendis assumenda, repellat asperiores tempora provident accusantium inventore, eligendi veniam explicabo minima atque suscipit..",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sagar@gmail.com",
    bookmark: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam possimus qui cumque reprehenderit molestias unde? Reiciendis assumenda, repellat asperiores tempora provident accusantium inventore, eligendi veniam explicabo minima atque suscipit..",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rutvikumak@gmail.com",
    bookmark: [],

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam possimus qui cumque reprehenderit molestias unde? ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rutvikumak@gmail.com",
    bookmark: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam possimus qui cumque reprehenderit molestias unde? Reiciendis assumenda, repellat asperiores tempora provident accusantium inventore, eligendi veniam explicabo minima atque suscipit..",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sagar@gmail.com",
    bookmark: [],

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam possimus qui cumque reprehenderit molestias unde? Reiciendis assumenda, repellat asperiores tempora provident accusantium inventore, eligendi veniam explicabo minima atque suscipit..",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shrey@gmail.com",
    bookmark: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam possimus qui cumque reprehenderit molestias unde? Reiciendis assumenda, repellat asperiores tempora provident accusantium inventore, eligendi veniam explicabo minima atque suscipit..",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "omkar@gmail.com",
    bookmark: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam possimus qui cumque reprehenderit molestias unde? Reiciendis assumenda, repellat asperiores tempora provident accusantium inventore, eligendi veniam explicabo minima atque suscipit..",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sunil@gmail.com",

    bookmark: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam possimus qui cumque reprehenderit molestias unde? Reiciendis assumenda, repellat asperiores tempora provident accusantium inventore, eligendi veniam explicabo minima atque suscipit..",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "gaurav@gmail.com",

    bookmark: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
