const Task = require('../databases/models/task');

async function create(task) {
  try {
    const result = await Task(task).save();
    return result;
  } catch (error) {
    return error;
  }
}

async function get() {
  try {
    const result = await Task.find();
    return result;
  } catch (error) {
    return error;
  }
}

async function put({ _id, task }) {
  try {
    const result = await Task.findOneAndUpdate({ _id }, task);
    return result;
  } catch (error) {
    return error;
  }
}

async function deleteTask(id) {
  try {
    const result = await Task.findOneAndDelete({ _id: id });
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
  create,
  get,
  put,
  deleteTask
};
