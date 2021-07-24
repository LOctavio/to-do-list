export function edit(e, task) {
  localStorage.setItem(task.id, `{"description":"${e.target.value}","completed":false,"index":${task.id}}`);
}