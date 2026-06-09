const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { getAnnouncements } = require('../controllers/announcementController');

router.get('/', protect, getAnnouncements);

module.exports = router;