const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getCourses,
  registerCourses,
} = require('../controllers/courseController');

router.get('/', protect, getCourses);
router.post('/register', protect, registerCourses);

module.exports = router;