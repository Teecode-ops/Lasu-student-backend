const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  courseCode: { type: String, required: true },
  courseTitle: { type: String, required: true },
  creditUnit: { type: Number, required: true },
  score: { type: Number, required: true },
  grade: { type: String, enum: ['A', 'B', 'C', 'D', 'E', 'F'], required: true },
  gradePoint: { type: Number, required: true },
  session: { type: String, required: true },
  semester: { type: String, enum: ['First', 'Second'], required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Result', resultSchema);