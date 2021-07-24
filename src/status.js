import { tasksList } from "./index.js";

/* eslint-disable import/prefer-default-export */
export function checkStatus(e, description, index) {
  const status = !!e.target.checked;
  localStorage.setItem(index, `{"description":"${description}","completed":${status},"index":${index}}`);
  tasksList[index-1].completed = status; 
}