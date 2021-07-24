import { tasksList } from "./index.js";

export function deleteTask(item) {
  localStorage.clear();
  for(let i = 0; i<tasksList.length; i++) {
    if(tasksList[i].index > parseInt(item.id)) {
      tasksList[i].index-=1;
    }
    if(i+1 !== parseInt(item.id)) {
      localStorage.setItem(tasksList[i].index, JSON.stringify(tasksList[i]));
    }
  item.remove();
  location.reload()
  }
}