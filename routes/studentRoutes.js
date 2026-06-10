const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getBasicInfo,
  getFullProfile,
  updateProfile,
} = require('../controllers/studentController');

// All student routes are protected
router.get('/basic-info', protect, getBasicInfo);
router.get('/full-profile', protect, getFullProfile);
router.put('/profile', protect, updateProfile);

module.exports = router;