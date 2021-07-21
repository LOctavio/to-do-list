import Icon from './three-dots-vertical.svg';
import Arrow from './arrow-return-left.svg';

const tasksList = [];

class task {
    constructor(description, index, completed = false) {
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
}

const printList = () => {
    const container = document.querySelector('ul');
    const addTask = document.createElement('li');
    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'add-button');
    const arrow = new Image();
    arrow.src = Arrow;
    addButton.appendChild(arrow);
    const input = document.createElement('input');
    input.setAttribute('id', 'add-task');
    addTask.appendChild(input);
    addTask.appendChild(addButton);
    container.appendChild(addTask);
    tasksList.sort((a, b) => { return a.index > b.index ? 1 : -1 } );
    tasksList.forEach(element => {
        printTask(element.description);
    });
}

const printTask = description => {
    const container = document.querySelector('ul');
    const task = document.createElement('li');
    const check = document.createElement('input');
    const text = document.createElement('span');
    const icon = new Image();
    icon.src = Icon;
    check.type = "checkbox";
    text.textContent = description;
    task.appendChild(check);
    task.appendChild(text);
    task.appendChild(icon);
    container.appendChild(task);
}

const addTask = (description, index) => {
    tasksList.push(new task(description, index));
    printTask(description);
}

window.onload = () => {
    printList();
}