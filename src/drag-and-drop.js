let task;

export function drag(item) {
  task = item;
}

export function drop(container, e) {
  const task2 = e.target.parentElement;
  container.insertBefore(task, task2);
  localStorage.setItem(task2.id, task.firstChild.nextSibling.textContent);
  localStorage.setItem(task.id, task2.firstChild.nextSibling.textContent);
}

export function allowDrop(ev) {
  ev.preventDefault();
}