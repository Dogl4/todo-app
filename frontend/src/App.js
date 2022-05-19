import React from 'react';
import Tasks from './components/Tasks';
import './App.css';

class App extends Tasks {
  state = { tasks: [], customTask: '' };
  render() {
    const { tasks } = this.state;
    return (
      <div className="App flex">
        <div className="header">Tasks</div>
        <form
          onSubmit={this.handleSubmit}
          className="flex"
          style={{ margin: '15px 0' }}
        >
          <input
            value={this.state.customTask}
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
                checked={task.completed}
                onClick={() => this.handleUpdate(task)}
              />
              <label
                className={!task.completed ? 'task' : 'task line_through'}
                for={task._id}
              >
                {task.task}
              </label>
              <button onClick={() => this.handleDelete(task)}>Delete</button>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
