let task;

export function drag(item) {
  task = item;
}

export function drop(container, e) {
  container.insertBefore(task, e.target.parentElement);
}

export function allowDrop(ev) {
  ev.preventDefault();
}