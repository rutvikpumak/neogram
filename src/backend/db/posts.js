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
      "Mac has received a new update. Is there anyone who installed the update and is now kicking themselves ?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "balika@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
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
    content: "Good Morning, What's your plan for the coming weekend ?",
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
    createdAt: "2022-01-25T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "You have confidence in your fears not your dreams. Hahaha.",
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
    createdAt: "2022-01-25T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "The best investments are “buy and forget.” ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rutvikumak@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2022-04-23T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "A founder gave an employee 10 days off during the notice period so that the employee could visit his sick grandmother. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sagar@gmail.com",
    bookmark: [],

    comments: [],
    createdAt: 1647076844,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Don’t ask questions whose answers you can’t accept.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shrey@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2022-04-01T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Accidentally wrote ‘I’m god’ instead of ‘I’m good’ in a mail and I’m not even sorry about it",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "omkar@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2021-04-30T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Learn JavaScript in 60 minutes and then spend 9 months finding job.  Better to spend time on basics, build core and then find a job. 12 months is the least you should spend from your first program to job.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sunil@gmail.com",
    comments: [],

    bookmark: [],
    createdAt: "2022-03-14T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "All platforms are essentially no code tools. Facebook, Reddit, Twitter, GitHub.. gives you power to create your properties on Internet.",
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
    createdAt: "2022-05-13T10:38:12+05:30",
    updatedAt: formatDate(),
  },
];
