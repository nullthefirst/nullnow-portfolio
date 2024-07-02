const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin registration route
router
  .route('/register')
  .get((req, res) => {
    res.render('admin', { message: '' });
  })
  .post(adminController.register);

// Admin login route
router.post('/login', adminController.login);

module.exports = router;
