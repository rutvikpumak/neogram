import axios from "axios";

export const addCommentService = (postId, commentData, token) =>
  axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const editCommentService = (postId, commentId, commentData, token) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteCommentService = (postId, commentId, token) =>
  axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: {
      authorization: token,
    },
  });
