export function checkStatus(e, description, index) {
  status = JSON.parse(localStorage.getItem(index)).completed
  status = e.target.checked ? true : false;
  localStorage.setItem(index, '{"description":"'+description+'","completed":'+status+',"index":'+index+'}');
}