import axios from "axios";

export const updateUserService = async (token, userData) => {
  return await axios.post(
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
