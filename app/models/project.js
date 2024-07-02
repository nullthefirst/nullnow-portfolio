const mongoose = require('mongoose');
const Team = require('./team');
const Stack = require('./stack');

const projectSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
  stackItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stack' }],
  coverPhoto: { type: String, required: true },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
