import { Router } from 'express';
import { body } from 'express-validator';
import ContactEnquiry from '../models/ContactEnquiry.js';
import validate from '../middleware/validate.js';
import ensureDB from '../middleware/ensureDB.js';
import { formRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

const SUBJECT_VALUES = ['careers', 'internship', 'business', 'other'];
const SOURCE_PAGES = ['home', 'internship', 'latestnews', ''];

router.post(
  '/contact',
  formRateLimiter,
  ensureDB,
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 120 }).escape(),
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email').normalizeEmail(),
    body('phone').optional({ checkFalsy: true }).trim().isLength({ max: 30 }).escape(),
    body('subject').trim().notEmpty().withMessage('Subject is required').isIn(SUBJECT_VALUES).withMessage('Invalid subject'),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 3000 }).escape(),
    body('sourcePage').optional({ checkFalsy: true }).trim().isIn(SOURCE_PAGES).escape(),
    // Honeypot field - real users leave this empty; bots that fill it get a fake success below
    body('website').optional().trim(),
  ],
  validate,
  async (req, res, next) => {
    try {
      // Honeypot check: silently accept (fake success) without saving
      if (req.body.website) {
        return res.status(201).json({ success: true, message: 'Thank you! We will get back to you soon.' });
      }

      const { name, email, phone, subject, message, sourcePage } = req.body;

      const enquiry = await ContactEnquiry.create({
        name,
        email,
        phone: phone || '',
        subject,
        message,
        sourcePage: sourcePage || '',
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you! We will get back to you soon.',
        id: enquiry._id,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default router;
