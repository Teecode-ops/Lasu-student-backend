const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: {
    type: String,
    enum: ['urgent', 'info', 'academic', 'general'],
    default: 'general',
  },
  faculty: { type: String },
  datePosted: { type: Date, default: Date.now },
  author: { type: String, default: 'LASU Administration' },
  isActive: { type: Boolean, default: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Announcement', announcementSchema);