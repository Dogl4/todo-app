import React from 'react';

import { createTask, getTasks, updateTask, deleteTask } from '../services/api';

class Tasks extends React.Component {
  state = { tasks: [], customTask: '', status: '' };

  async componentDidMount() {
    try {
      const { data } = await getTasks();
      this.setState({ tasks: data });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { customTask } = this.state;
    try {
      const { data } = await createTask({ task: customTask });
      this.setState({ tasks: [...this.state.tasks, data], customTask: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdate = async (task, type, e = null) => {
    try {
      const tasks = [...this.state.tasks];
      const index = tasks.indexOf(task);
      tasks[index] = { ...tasks[index] };
      if (type === 'completed') {
        tasks[index].completed = !tasks[index].completed;
        if (tasks[index].completed) {
          tasks[index].status = 'pronto';
          document.getElementById(tasks[index]._id).checked = true;
        } else {
          tasks[index].status = 'em andamento';
          document.getElementById(tasks[index]._id).checked = false;
        }
      }
      if (type === 'status') {
        tasks[index].status = e;
        if (e === 'pronto') {
          tasks[index].completed = true;
          document.getElementById(tasks[index]._id).checked = true;
        } else {
          tasks[index].completed = false;
          document.getElementById(tasks[index]._id).checked = false;
        }
      }
      this.setState({ tasks });
      await updateTask(tasks[index]);
    } catch (error) {
      this.setState({ tasks: this.state.tasks });
      console.log(error);
    }
  };

  handleDelete = async (task) => {
    const copyTasks = [...this.state.tasks];
    try {
      const newTasks = copyTasks.filter((t) => t._id !== task._id);
      this.setState({ tasks: newTasks });
      await deleteTask(task._id);
    } catch (error) {
      this.setState({ tasks: this.state.tasks });
      console.log(error);
    }
  };
}

export default Tasks;
