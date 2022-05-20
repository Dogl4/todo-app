import React from 'react';
import Tasks from './components/Tasks';
import './App.css';

class App extends Tasks {
  state = { tasks: [], customTask: '', status: '' };
  render() {
    const { tasks } = this.state;
    return (
      <div className="App flex">
        <div className="header">Tasks</div>
        <form onSubmit={this.handleSubmit} style={{ margin: '15px 0' }}>
          <input
            value={this.state.customTask}
            name="customTask"
            onChange={(e) => this.handleChange(e.target)}
          />
          <button type="submit" disabled={!this.state.customTask}>
            Add
          </button>
        </form>
        <div>
          {tasks.map((task) => (
            <div key={task._id} className="task_container">
              <input
                type="checkbox"
                id={task._id}
                name={task.task}
                value={task.task}
                defaultChecked={task.completed}
                onClick={() => this.handleUpdate(task, 'completed')}
              />
              <label
                className={!task.completed ? 'task' : 'task line_through'}
                htmlFor={task._id}
              >
                {task.task}
              </label>
              <select
                value={task.status}
                name="status"
                onChange={(e) => {
                  return (
                    this.handleChange(e.target),
                    this.handleUpdate(task, 'status', e.target.value)
                  );
                }}
              >
                <option value="pendente">Pendente</option>
                <option value="em andamento">Em Andamento</option>
                <option value="pronto">Pronto</option>
              </select>
              <button
                className="delete"
                onClick={() => this.handleDelete(task)}
              >
                Delete
              </button>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
