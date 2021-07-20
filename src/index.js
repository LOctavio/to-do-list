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
    tasksList.forEach(element => {
        const task = document.createElement('li');
        const text = document.createElement('span');
        text.textContent = element.description;
        task.appendChild(text);
        container.appendChild(task);
    });
}