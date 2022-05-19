import React from 'react';

import { createTask, getTasks, updateTask, deleteTask } from '../services/api';

class Tasks extends React.Component {
  state = { tasks: [], customTask: '' };

  async componentDidMount() {
    try {
      const { data } = await getTasks();
      this.setState({ tasks: data });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = ({ value }) => {
    this.setState({ customTask: value });
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

  handleUpdate = async (task) => {
    try {
      const tasks = [...this.state.tasks];
      const index = tasks.indexOf(task);
      tasks[index] = { ...tasks[index] };
      tasks[index].completed = !tasks[index].completed;
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
      // const index = copyTasks.indexOf(task);
      const newTasks = copyTasks.filter((t) => t._id !== task._id);
      this.setState({ tasks: newTasks });
      console.log('task', task);
      await deleteTask(task._id);
    } catch (error) {
      this.setState({ tasks: this.state.tasks });
      console.log(error);
    }
  };

  render() {
    return <h2>A</h2>;
  }
}

export default Tasks;
