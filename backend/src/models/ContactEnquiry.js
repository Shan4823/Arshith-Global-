import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ContactEnquirySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [120, 'Name must be under 120 characters'],
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
    trim: true,
    maxlength: [30, 'Phone must be under 30 characters'],
    default: '',
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    enum: {
      values: ['careers', 'internship', 'business', 'other'],
      message: 'Subject must be one of: careers, internship, business, other',
    },
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [3000, 'Message must be under 3000 characters'],
  },
  sourcePage: {
    type: String,
    enum: ['home', 'internship', 'latestnews', ''],
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

export default model('ContactEnquiry', ContactEnquirySchema);
