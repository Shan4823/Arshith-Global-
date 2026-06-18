import { Router } from 'express';
import { body } from 'express-validator';
import InfoTechEnquiry from '../models/InfoTechEnquiry.js';
import validate from '../middleware/validate.js';
import ensureDB from '../middleware/ensureDB.js';
import { formRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

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

router.post(
  '/infotech-enquiry',
  formRateLimiter,
  ensureDB,
  [
    body('firstName').trim().notEmpty().withMessage('First name is required').isLength({ max: 80 }).escape(),
    body('lastName').trim().notEmpty().withMessage('Last name is required').isLength({ max: 80 }).escape(),
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email').normalizeEmail(),
    body('company').optional({ checkFalsy: true }).trim().isLength({ max: 150 }).escape(),
    body('service').optional({ checkFalsy: true }).trim().isIn(SERVICE_OPTIONS).withMessage('Invalid service').escape(),
    body('message').optional({ checkFalsy: true }).trim().isLength({ max: 3000 }).escape(),
    body('website').optional().trim(), // honeypot - real users leave this empty
  ],
  validate,
  async (req, res, next) => {
    try {
      if (req.body.website) {
        return res.status(201).json({ success: true, message: 'Thank you for reaching out!' });
      }

      const { firstName, lastName, email, company, service, message } = req.body;

      const enquiry = await InfoTechEnquiry.create({
        firstName,
        lastName,
        email,
        company: company || '',
        service: service || '',
        message: message || '',
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you for reaching out! Our team will contact you within 1 business day.',
        id: enquiry._id,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default router;
