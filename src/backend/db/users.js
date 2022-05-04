import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "user1",
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
];
