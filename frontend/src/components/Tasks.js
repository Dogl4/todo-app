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

  handleChange = ({ customTask: input }) => {
    this.setState({ customTask: input.value });
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
      const index = tasks.findIndex((t) => t.id === task.id);
      tasks[index] = { ...tasks[index] };
      tasks[index].completed = !tasks[index].completed;
      this.setState({ tasks });
      await updateTask({ id: task, completed: tasks[index].completed });
    } catch (error) {
      this.setState({ tasks: this.state.tasks });
      console.log(error);
    }
  };

  handleDelete = async (id) => {
    const copyTasks = [...this.state.tasks];
    try {
      const tasks = copyTasks.filter((task) => task.id !== id);
      this.setState({ tasks });
      await deleteTask(id);
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
