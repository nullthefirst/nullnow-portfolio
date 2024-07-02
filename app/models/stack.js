const mongoose = require('mongoose');

const stackSchema = new mongoose.Schema({
  item: { type: String, required: true },
});

const Stack = mongoose.model('Stack', stackSchema);
module.exports = Stack;
