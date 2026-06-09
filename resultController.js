const Result = require('../models/Result');

// @desc    Get all results for logged-in student
// @route   GET /api/results
// @access  Private
const getStudentResults = async (req, res) => {
  try {
    const results = await Result.find({ student: req.user.id })
      .sort({ session: -1, semester: 1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get transcript summary
// @route   GET /api/results/transcript
// @access  Private
const getTranscript = async (req, res) => {
  try {
    const results = await Result.find({ student: req.user.id })
      .sort({ session: 1, semester: 1 });

    // Calculate CGPA
    let totalPoints = 0;
    let totalUnits = 0;

    results.forEach(result => {
      totalPoints += result.gradePoint * result.creditUnit;
      totalUnits += result.creditUnit;
    });

    const cgpa = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : '0.00';

    res.json({
      results,
      cgpa,
      totalUnits,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getStudentResults,
  getTranscript,
};