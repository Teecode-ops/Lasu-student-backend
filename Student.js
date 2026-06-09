const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  matricNumber: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: { type: String },
  password: { type: String, required: true },
  profilePhoto: { type: String },
  faculty: { type: String, required: true },
  department: { type: String, required: true },
  level: {
    type: String,
    enum: ['100', '200', '300', '400', '500'],
    required: true,
  },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ['Male', 'Female'] },
  stateOfOrigin: { type: String },
  lga: { type: String },
  bloodGroup: { type: String },
  nin: { type: String }, // Should be encrypted in production
  admissionYear: { type: String },
  studentStatus: {
    type: String,
    enum: ['Active', 'Suspended', 'Graduated'],
    default: 'Active',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Student', studentSchema);