import axios from "axios";

export const getAllUserService = () => axios.get("/api/users");

export const updateUserService = (token, userData) => {
  return axios.post(
    "/api/users/edit",
    {
      userData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};
