import { tasksMock } from "../mock/tasksMock";
import { type Task } from "../types/task";

export const fetchTasks = async (): Promise<Task[]> => {
    // Simulate an API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return tasksMock;
}