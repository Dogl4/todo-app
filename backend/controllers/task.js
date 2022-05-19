const Task = require('../services/task');

async function create(req, res) {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function get(_req, res) {
  try {
    const tasks = await Task.get();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function put(req, res) {
  try {
    const task = await Task.put({ _id: req.params.id, task: req.body });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.deleteTask(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  create,
  get,
  put,
  deleteTask
};
