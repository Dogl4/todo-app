const Task = require('../services/task');

export async function create(req, res) {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function get(_req, res) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function put(req, res) {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteTask(req, res) {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
