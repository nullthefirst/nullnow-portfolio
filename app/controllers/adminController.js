const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

// Admin registration
exports.register = async (req, res) => {
  try {
    console.log(req.body);

    const { username, password } = req.body;

    // Check if the username already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).render('admin', { message: 'Username already exists' });
    }

    // Create new admin
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).render('admin', { message: 'Admin registered successfully' });
  } catch (err) {
    res.status(500).render('admin', { message: err.message });
  }
};

// Admin login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the admin exists
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
