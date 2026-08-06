import { type Task } from "../types/task";

export const tasksMock: Task[] = [
    {
        id: "1",
        title: "Task 1",
        description: "Description for Task 1",
        status: "todo",
        createdAt: new Date()
    },
    {
        id: "2",
        title: "Task 2",
        description: "Description for Task 2",
        status: "in-progress",
        createdAt: new Date()
    },
    {
        id: "3",
        title: "Task 3",
        description: "",
        status: "done",
        createdAt: new Date()
    },
];