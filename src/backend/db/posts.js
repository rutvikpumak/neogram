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
    comments: [
      {
        _id: uuid(),
        username: "rutvikumak@gmail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sagar@gmail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
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
    comments: [
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "Looks good to me",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shrey@gmail.com",
        text: "Kuch bhi ?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
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
    comments: [
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "Lorem ipsum is not good comment",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "omkar@gmail.com",
        text: "Ye meri expertise bilkul nahi hai",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
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
    comments: [],
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

    comments: [],
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
    comments: [],
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
    comments: [],
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
    comments: [],

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
    comments: [
      {
        _id: uuid(),
        username: "sagar@gmail.com",
        text: "Side hustle always works",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rutvikumak@gmail.com",
        text: "Ye sab doglapan hai",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    bookmark: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
