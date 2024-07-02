const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('../config/db');

// Import routes
const adminRoutes = require('./routes/adminRoutes');

// Connect app to MongoDB
connectDB();
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/admin', adminRoutes);

module.exports = app;
