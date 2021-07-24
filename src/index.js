import Icon from './three-dots-vertical.svg';
import Arrow from './arrow-return-left.svg';
import Refresh from './arrow-repeat.svg';
import './style.css';
import { drag, drop, allowDrop } from './drag-and-drop.js';
import { checkStatus } from './status.js';
import { addTask } from './addTask.js';

export const tasksList = [];
let count = 0;

export class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const printTask = (description, index) => {
  const container = document.querySelector('ul');
  const task = document.createElement('li');
  task.setAttribute('id', index);
  task.setAttribute('draggable', 'true');
  task.classList.add('tasks');
  task.addEventListener('dragstart', () => drag(task));
  task.addEventListener('drop', (e) => drop(container, e));
  task.addEventListener('dragover', (e) => allowDrop(e));
  const check = document.createElement('input');
  check.addEventListener('change', (e) => checkStatus(e, description, index));
  const text = document.createElement('label');
  const icon = new Image();
  icon.src = Icon;
  check.type = 'checkbox';
  text.textContent = description;
  task.appendChild(check);
  task.appendChild(text);
  task.appendChild(icon);
  container.appendChild(task);
};

const printList = () => {
  const container = document.querySelector('ul');
  const title = document.createElement('li');
  const titleText = document.createElement('label');
  const refresh = new Image();
  refresh.setAttribute('id', 'refresh-icon');
  refresh.src = Refresh;
  titleText.innerHTML = "Today's To Do";
  title.appendChild(titleText);
  title.appendChild(refresh);
  titleText.setAttribute('id', 'title');
  const addTask = document.createElement('li');
  const addButton = document.createElement('button');
  addButton.setAttribute('id', 'add-button');
  const arrow = new Image();
  arrow.src = Arrow;
  addButton.appendChild(arrow);
  const input = document.createElement('input');
  input.setAttribute('id', 'add-task');
  input.setAttribute('placeholder', 'Add to your list...');
  addTask.appendChild(input);
  addTask.appendChild(addButton);
  container.appendChild(title);
  container.appendChild(addTask);
  tasksList.forEach((element) => {
    printTask(element.description);
  });
  const clearComplete = document.createElement('li');
  clearComplete.setAttribute('id', 'clear-complete');
  const clearButton = document.createElement('button');
  clearButton.textContent = 'Clear all completed';
  clearComplete.appendChild(clearButton);
  container.appendChild(clearComplete);
};


const addExamples = () => {
  addTask('Buy eggs', 1);
  addTask('Wash the dishes', 2);
  addTask('Feed cats', 3);
};

const getLocalStorage = () => {
  for (let i = 0; i < localStorage.length; i += 1) {
    const index = localStorage.key(i);
    const { description } = JSON.parse(localStorage.getItem(localStorage.key(i)));
    tasksList.push(new Task(description, index));
  }
  tasksList.sort((a, b) => (a.index > b.index ? 1 : -1));
  for (let i = 0; i < localStorage.length; i += 1) {
    printTask(tasksList[i].description, tasksList[i].index);
  }
};

window.onload = () => {
  printList();
  document.querySelector('#add-button').addEventListener('click', () => {
    const task = document.querySelector('#add-task');
    count += 1;
    addTask(task.value, count);
    printTask(task.value, count);
    task.value = '';
  });
  if (localStorage.length === 0) {
    addExamples();
  } else {
    getLocalStorage();
  }
  count = tasksList.length + 1;
};