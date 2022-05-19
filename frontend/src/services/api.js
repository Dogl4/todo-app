import axios from 'axios';
const apiUrl = 'http://localhost:3000/api/tasks';

export function getTasks() {
  return axios.get(apiUrl);
}

export function createTask(task) {
  return axios.post(apiUrl, task);
}

export function updateTask(task) {
  return axios.put(`${apiUrl}/${task.id}`, task);
}

export function deleteTask(id) {
  return axios.delete(`${apiUrl}/${id}`);
}
