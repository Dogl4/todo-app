const express = require('express');
const router = express.Router();

const taskService = require('./controllers/task');

router.post('/', taskService.create);
router.get('/', taskService.get);
router.put('/:id', taskService.put);
router.delete('/:id', taskService.deleteTask);

module.exports = router;
