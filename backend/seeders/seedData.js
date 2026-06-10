require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('../config/database');

const Student = require('../models/Student');
const Announcement = require('../models/Announcement');
const Timetable = require('../models/Timetable');

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Student.deleteMany();
    await Announcement.deleteMany();
    await Timetable.deleteMany();

    console.log('🗑️  Cleared existing data');

    // Hash password
    const hashedPassword = await bcrypt.hash('password123', 12);

    // Create Students
    const students = await Student.insertMany([
      {
        matricNumber: '200101001',
        firstName: 'Adebayo',
        lastName: 'Chukwudi',
        middleName: 'Emmanuel',
        email: 'adebayo.chukwudi@lasu.edu.ng',
        phone: '+2348012345678',
        password: hashedPassword,
        faculty: 'Faculty of Science',
        department: 'Computer Science',
        level: '300',
        gender: 'Male',
        studentStatus: 'Active',
      },
      {
        matricNumber: '200101002',
        firstName: 'Oluwaseun',
        lastName: 'Adekunle',
        email: 'oluwaseun.adekunle@lasu.edu.ng',
        password: hashedPassword,
        faculty: 'Faculty of Science',
        department: 'Computer Science',
        level: '300',
        gender: 'Female',
        studentStatus: 'Active',
      },
      {
        matricNumber: '200201003',
        firstName: 'Chinedu',
        lastName: 'Okoro',
        email: 'chinedu.okoro@lasu.edu.ng',
        password: hashedPassword,
        faculty: 'Faculty of Engineering',
        department: 'Electrical Engineering',
        level: '200',
        gender: 'Male',
        studentStatus: 'Active',
      },
    ]);

    console.log('✅ Created 3 students');

    // Create Announcements
    await Announcement.insertMany([
      {
        title: 'Course Registration Opens',
        message: 'Course registration for 2025/2026 session begins on Monday, 10th June. All students are advised to register early.',
        type: 'academic',
        faculty: 'All',
      },
      {
        title: 'Library Maintenance Notice',
        message: 'The main library will be closed for maintenance from 15th - 18th June. E-library remains available.',
        type: 'general',
        faculty: 'All',
      },
      {
        title: 'Matriculation Ceremony',
        message: 'The 2025 Matriculation Ceremony will hold on 28th June at the Main Auditorium. Attendance is compulsory.',
        type: 'urgent',
        faculty: 'All',
      },
    ]);

    console.log('✅ Created 3 announcements');

    // Create Timetable
    await Timetable.insertMany([
      {
        courseCode: 'CSC 301',
        courseTitle: 'Data Structures',
        day: 'Monday',
        startTime: '08:00',
        endTime: '10:00',
        venue: 'LT 3',
        lecturer: 'Dr. Adebayo',
        department: 'Computer Science',
        level: '300',
      },
      {
        courseCode: 'CSC 305',
        courseTitle: 'Software Engineering',
        day: 'Monday',
        startTime: '11:00',
        endTime: '13:00',
        venue: 'Lab 2',
        lecturer: 'Prof. Okonkwo',
        department: 'Computer Science',
        level: '300',
      },
      {
        courseCode: 'CSC 311',
        courseTitle: 'Database Systems',
        day: 'Tuesday',
        startTime: '09:00',
        endTime: '11:00',
        venue: 'LT 1',
        lecturer: 'Dr. Ibrahim',
        department: 'Computer Science',
        level: '300',
      },
    ]);

    console.log('✅ Created 3 timetable entries');
    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📋 Test Login Credentials:');
    console.log('   Matric: 200101001 | Password: password123');
    console.log('   Matric: 200101002 | Password: password123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();