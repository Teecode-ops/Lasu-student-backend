const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  units: { type: Number, required: true },
  type: { type: String, enum: ['C', 'E'], default: 'C' },
  department: { type: String },
  faculty: { type: String },
  level: { type: String },
  semester: { type: String },
  lecturer: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Course', courseSchema);