import Icon from './three-dots-vertical.svg';

const tasksList = [];

class task {
    constructor(description, index, completed = false) {
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
}

const print = () => {
    const container = document.querySelector('ul');
    tasksList.sort((a, b) => { return a.index > b.index ? 1 : -1 } );
    tasksList.forEach(element => {
        const task = document.createElement('li');
        const check = document.createElement('input');
        const text = document.createElement('span');
        const icon = new Image();
        icon.src = Icon;
        check.type = "checkbox";
        text.textContent = element.description;
        task.appendChild(check);
        task.appendChild(text);
        task.appendChild(icon);
        container.appendChild(task);
    });
}

const addTask = (description, index) => tasksList.push(new task(description, index));