import { Router } from 'express';
import { body } from 'express-validator';
import InternshipApplication from '../models/InternshipApplication.js';
import validate from '../middleware/validate.js';
import ensureDB from '../middleware/ensureDB.js';
import { formRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

const YEAR_OF_STUDY_VALUES = ['2nd Year', '3rd Year', '4th Year', 'Final Year', 'Graduate/Other'];
const DOMAIN_VALUES = [
  'Web Development',
  'UI / UX Design',
  'Cloud Computing',
  'Data Analytics',
  'Digital Marketing',
  'App Development',
];

router.post(
  '/internship-application',
  formRateLimiter,
  ensureDB,
  [
    body('fullName').trim().notEmpty().withMessage('Full name is required').isLength({ max: 120 }).escape(),
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email').normalizeEmail(),
    body('phone').trim().notEmpty().withMessage('Phone number is required').isLength({ max: 20 }).escape(),
    body('college').trim().notEmpty().withMessage('College name is required').isLength({ max: 150 }).escape(),
    body('yearOfStudy').trim().notEmpty().withMessage('Year of study is required').isIn(YEAR_OF_STUDY_VALUES).withMessage('Invalid year of study'),
    body('domain').trim().notEmpty().withMessage('Domain of interest is required').isIn(DOMAIN_VALUES).withMessage('Invalid domain'),
    body('resumeLink').optional({ checkFalsy: true }).trim().isURL().withMessage('Resume link must be a valid URL').isLength({ max: 500 }),
    body('message').optional({ checkFalsy: true }).trim().isLength({ max: 1000 }).escape(),
    // Honeypot field - real users leave this empty; bots that fill it get a fake success below
    body('website').optional().trim(),
  ],
  validate,
  async (req, res, next) => {
    try {
      // Honeypot check: silently accept (fake success) without saving
      if (req.body.website) {
        return res.status(201).json({
          success: true,
          message: 'Thank you for applying! Our team will review your application and reach out soon.',
        });
      }

      const { fullName, email, phone, college, yearOfStudy, domain, resumeLink, message } = req.body;

      const application = await InternshipApplication.create({
        fullName,
        email,
        phone,
        college,
        yearOfStudy,
        domain,
        resumeLink: resumeLink || '',
        message: message || '',
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you for applying! Our team will review your application and reach out soon.',
        id: application._id,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default router;
