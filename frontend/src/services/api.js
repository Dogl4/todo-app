import axios from 'axios';

const port = process.env.PORT_SERVER || 3001;
const apiUrl = `http://localhost:${port}/api/tasks`;

export function getTasks() {
  return axios.get(apiUrl);
}

export function createTask(task) {
  return axios.post(apiUrl, task);
}

export function updateTask(task) {
  return axios.put(`${apiUrl}/${task._id}`, { ...task });
}

export function deleteTask(id) {
  return axios.delete(`${apiUrl}/${id}`);
}
