const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Student = require('../models/Student');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

// @desc    Login student
// @route   POST /api/auth/login
// @access  Public
const loginStudent = async (req, res) => {
  const { matricNumber, password } = req.body;

  try {
    // Check if student exists
    const student = await Student.findOne({ matricNumber: matricNumber.toUpperCase() });

    if (!student) {
      return res.status(401).json({ message: 'Invalid matric number or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid matric number or password' });
    }

    // Check if account is active
    if (student.studentStatus !== 'Active') {
      return res.status(403).json({ message: 'Account is suspended or inactive' });
    }

    // Generate token
    const token = generateToken(student._id);

    res.json({
      message: 'Login successful',
      token,
      student: {
        id: student._id,
        matricNumber: student.matricNumber,
        fullName: `${student.firstName} ${student.lastName}`,
        faculty: student.faculty,
        department: student.department,
        level: student.level,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  loginStudent,
};