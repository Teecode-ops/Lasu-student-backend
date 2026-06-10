const express = require('express');
const router = express.Router();
const { loginStudent } = require('../controllers/authController');

// @route   POST /api/auth/login
router.post('/login', loginStudent);

module.exports = router;