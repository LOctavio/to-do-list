export function deleteTask(item) {
  localStorage.removeItem(item.id);
  item.remove();
}