import stevkim from "@/assets/headshot.jpg";
import user1 from "@/assets/15 - Notifications/user1.webp";
import user2 from "@/assets/15 - Notifications/user2.webp";
import user3 from "@/assets/15 - Notifications/user3.webp";

export const USERS = [
  {
    id: "123123",
    name: "Steven Kim",
    image: stevkim,
  },
  {
    id: "123333",
    name: "Katie Anne",
    image: user1,
  },
  {
    id: "123555",
    name: "Matt King",
    image: user2,
  },
  {
    id: "123112",
    name: "Emily Blue",
    image: user3,
  },
];

export const NOTIFICATIONS = [
  {
    id: 0,
    type: "join-group",
    user: USERS[0],
    date: 1721342471564,
    content: {
      name: "Software Engineers of Seattle",
      id: 1234,
    },
  },
  {
    id: 1,
    type: "mention",
    user: USERS[1],
    date: 1721341313286,
    content: {
      commentId: 4444,
      id: 3245,
    },
  },
  {
    id: 2,
    type: "friend-request",
    user: USERS[2],
    date: 1721340821781,
    content: null,
  },
  {
    id: 3,
    type: "post",
    user: USERS[3],
    date: 1721340252420,
    content: {
      id: 3245,
      postId: 1111,
    },
  },
];
