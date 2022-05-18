const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const taskShema = new Shema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('task', taskShema);
