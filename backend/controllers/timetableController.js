const Timetable = require('../models/Timetable');

// @desc    Get student's timetable
// @route   GET /api/timetable
// @access  Private
const getTimetable = async (req, res) => {
  try {
    // In a real app, we would filter by student's department and level
    const timetable = await Timetable.find().sort({ day: 1, startTime: 1 });

    res.json(timetable);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getTimetable,
};