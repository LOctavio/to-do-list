import { tasksList } from "./index.js";
import { Task } from "./index.js";

export const addTask = (description, index) => {
  tasksList.push(new Task(description, index));
  addTaskToLocalStorage(description, index);
};

const addTaskToLocalStorage = (description, index) => {
  localStorage.setItem(index, JSON.stringify(new Task(description, index)));
};