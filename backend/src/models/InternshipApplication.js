import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const InternshipApplicationSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [120, 'Full name must be under 120 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    maxlength: [200, 'Email must be under 200 characters'],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone must be under 20 characters'],
  },
  college: {
    type: String,
    required: [true, 'College name is required'],
    trim: true,
    maxlength: [150, 'College name must be under 150 characters'],
  },
  yearOfStudy: {
    type: String,
    required: [true, 'Year of study is required'],
    enum: {
      values: ['2nd Year', '3rd Year', '4th Year', 'Final Year', 'Graduate/Other'],
      message: 'Invalid year of study',
    },
  },
  domain: {
    type: String,
    required: [true, 'Domain of interest is required'],
    enum: {
      values: [
        'Web Development',
        'UI / UX Design',
        'Cloud Computing',
        'Data Analytics',
        'Digital Marketing',
        'App Development',
      ],
      message: 'Invalid domain',
    },
  },
  resumeLink: {
    type: String,
    trim: true,
    maxlength: [500, 'Resume link must be under 500 characters'],
    default: '',
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message must be under 1000 characters'],
    default: '',
  },
  program: {
    type: String,
    default: '6-month',
  },
  status: {
    type: String,
    enum: ['new', 'reviewed', 'contacted'],
    default: 'new',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('InternshipApplication', InternshipApplicationSchema);
