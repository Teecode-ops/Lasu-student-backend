const Student = require('../models/Student');

// @desc    Get basic student info (cacheable)
// @route   GET /api/students/basic-info
// @access  Private
const getBasicInfo = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select(
      'matricNumber firstName lastName faculty department level profilePhoto'
    );

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get full student profile (sensitive - no caching)
// @route   GET /api/students/full-profile
// @access  Private
const getFullProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select('-password -nin');

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update student profile
// @route   PUT /api/students/profile
// @access  Private
const updateProfile = async (req, res) => {
  try {
    const { phone, email } = req.body;

    const student = await Student.findById(req.user.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    if (phone) student.phone = phone;
    if (email) student.email = email;

    const updatedStudent = await student.save();

    res.json({
      message: 'Profile updated successfully',
      student: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getBasicInfo,
  getFullProfile,
  updateProfile,
};