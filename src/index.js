import Icon from './three-dots-vertical.svg';
import Arrow from './arrow-return-left.svg';
import Refresh from './arrow-repeat.svg';
import './style.css';

const tasksList = [];

class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const printTask = (description) => {
  const container = document.querySelector('ul');
  const task = document.createElement('li');
  task.classList.add('tasks');
  const check = document.createElement('input');
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
  tasksList.sort((a, b) => (a.index > b.index ? 1 : -1));
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

const addTask = (description, index) => {
  tasksList.push(new Task(description, index));
  printTask(description);
};

window.onload = () => {
  printList();
  document.querySelector('#add-button').addEventListener('click', () => {
    const task = document.querySelector('#add-task');
    addTask(task.value, tasksList.length + 1);
    task.value = '';
  });
};