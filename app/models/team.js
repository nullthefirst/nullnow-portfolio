const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  github: { type: String, required: true },
  twitter: { type: String, required: true },
  active: { type: Boolean, required: true, default: true },
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
