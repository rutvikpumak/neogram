import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Rutvik",
    lastName: "Umak",
    username: "rutvikumak@gmail.com",
    password: "rutvik123",
    userHandler: "rutvik1997",
    bio: "An aspiring web developer",
    link: "https://peerlist.io/rutvikumak",
    profilePic: "https://pbs.twimg.com/profile_images/1499426863193595910/-r88VRAQ_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "balika@gmail.com",
    userHandler: "adarshbalika",
    password: "adarshBalika123",
    bio: "this is my bio balika",
    link: "https://adarshbalika.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sagar",
    lastName: "Palkar",
    username: "sagar@gmail.com",
    userHandler: "Sagar123",
    password: "111",
    bio: "this is my bio sagar",
    link: "https://sagar.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457789/baatchit/customer-service_zpcfrg.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shrey",
    lastName: "Pandey",
    username: "shrey@gmail.com",
    userHandler: "pandey_shrey",
    password: "111",
    bio: "this is my bio shrey",
    link: "https://shrey.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/boy_urhxrp.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Shah",
    username: "omkar@gmail.com",
    userHandler: "Omkar123",
    password: "111",
    bio: "this is my bio omkar",
    link: "https://omkar.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/man_3_dfq8h3.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Gaurav",
    lastName: "Verma",
    username: "gaurav@gmail.com",
    userHandler: "Gaurav123",
    password: "111",
    bio: "this is my bio gaurav",
    link: "https://gaurav.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/hacker_jednhr.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sunil",
    lastName: "Agarwal",
    username: "sunil@gmail.com",
    userHandler: "Sunil123",
    password: "111",
    bio: "this is my bio suil",
    link: "https://sunil.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457645/baatchit/man_rp4ore.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
