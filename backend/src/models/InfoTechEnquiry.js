import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SERVICE_OPTIONS = [
  'Digital Transformation',
  'Cloud Computing',
  'Engineering & R&D',
  'Data & AI',
  'Cybersecurity',
  'Infrastructure Management',
  'Other',
  '',
];

const InfoTechEnquirySchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [80, 'First name must be under 80 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [80, 'Last name must be under 80 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    maxlength: [200, 'Email must be under 200 characters'],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'],
  },
  company: {
    type: String,
    trim: true,
    maxlength: [150, 'Company must be under 150 characters'],
    default: '',
  },
  service: {
    type: String,
    enum: {
      values: SERVICE_OPTIONS,
      message: 'Invalid service option',
    },
    default: '',
  },
  message: {
    type: String,
    trim: true,
    maxlength: [3000, 'Message must be under 3000 characters'],
    default: '',
  },
  status: {
    type: String,
    enum: ['new', 'read', 'responded'],
    default: 'new',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('InfoTechEnquiry', InfoTechEnquirySchema);
