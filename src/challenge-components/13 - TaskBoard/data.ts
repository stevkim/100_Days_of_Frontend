import type { TUser, TTask } from "./types/taskType";
import stevkim from "@/assets/headshot.jpg";
import rockclimber from "@/assets/13 - TaskBoard/portfolio.avif";

export const userData: TUser[] = [
  {
    id: 1,
    name: "Steven Kim",
    image: stevkim,
  },
  {
    id: 2,
    name: "Rock Climber",
    image: rockclimber,
  },
];

export const MockTaskData: TTask[] = [
  {
    id: "1231242",
    board: "todo",
    taskTitle: "Test task",
    taskContent: "This is an example task",
    severity: "low",
    date: 1721173310219,
    users: userData,
  },
  {
    id: "1231245",
    board: "inprogress",
    taskTitle: "Test task #2",
    taskContent: "This is another example task",
    severity: "medium",
    date: 1721246477878,
    image:
      "https://images.unsplash.com/photo-1720814989164-9dd27c24dcac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    users: userData,
  },
  {
    id: "5545454",
    board: "todo",
    taskTitle: "High risk!",
    taskContent: "Last example task",
    severity: "high",
    date: 1721246477899,
    users: [userData[1]],
  },
];
