import axios from "axios";

export const loginUserService = (email, password) => {
  return axios.post("api/auth/login", {
    username: email,
    password: password,
  });
};

export const signUpService = (email, password, firstName, lastName) => {
  return axios.post("api/auth/signup", {
    username: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
};
