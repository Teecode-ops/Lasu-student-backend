const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getStudentResults,
  getTranscript,
} = require('../controllers/resultController');

router.get('/', protect, getStudentResults);
router.get('/transcript', protect, getTranscript);

module.exports = router;