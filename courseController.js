const Course = require('../models/Course');

// @desc    Get all courses
// @route   GET /api/courses
// @access  Private
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Register courses
// @route   POST /api/courses/register
// @access  Private
const registerCourses = async (req, res) => {
  try {
    const { courseIds } = req.body;

    // In a real app, we would save the registration to a Registration model
    res.json({
      message: 'Courses registered successfully',
      registeredCourses: courseIds.length,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getCourses,
  registerCourses,
};