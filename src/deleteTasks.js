import { tasksList, printList } from "./index.js";

export function deleteTask(item) {
  localStorage.clear();
  const tasksList2 = [];
  for(let i = 0; i<tasksList.length; i++) {
    if(tasksList[i].index > parseInt(item.id)) {
      tasksList[i].index-=1;
    }
    if(i+1 !== parseInt(item.id)) {
      localStorage.setItem(tasksList[i].index, JSON.stringify(tasksList[i]));
      tasksList2.push(tasksList[i]);
    }
  item.remove();
  }
  tasksList = tasksList2;
  document.querySelector('ul').innerHTML=``;
  printList();
}

export function clearCompleted() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const completed = JSON.parse(localStorage.getItem(localStorage.key(i))).completed;
    if(completed === true) {
      deleteTask(document.getElementById(i+1));
    }
  }
}