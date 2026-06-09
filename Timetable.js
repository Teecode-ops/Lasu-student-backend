const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  courseTitle: { type: String, required: true },
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    required: true,
  },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  venue: { type: String, required: true },
  lecturer: { type: String },
  department: { type: String },
  level: { type: String },
  semester: { type: String },
  session: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Timetable', timetableSchema);