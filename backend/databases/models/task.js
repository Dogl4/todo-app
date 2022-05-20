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
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'pendente'
  }
});

module.exports = mongoose.model('task', taskShema);
