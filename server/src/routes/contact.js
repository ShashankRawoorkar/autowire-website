import { Router } from 'express';
import { body } from 'express-validator';
import { submit } from '../controllers/contactController.js';

const router = Router();

const BUDGET_VALUES = ['under_3k', '3k_8k', '8k_20k', '20k_plus'];

router.post(
  '/',
  [
    body('name')
      .trim()
      .notEmpty().withMessage('Name is required.')
      .isLength({ max: 100 }).withMessage('Name is too long.'),

    body('email')
      .isEmail().withMessage('A valid email is required.')
      .normalizeEmail(),

    body('painPoints')
      .isArray({ min: 1 }).withMessage('At least one pain point is required.'),

    body('budget')
      .notEmpty().withMessage('Budget selection is required.')
      .isIn(BUDGET_VALUES).withMessage('Invalid budget value.'),

    body('company')
      .optional()
      .trim()
      .isLength({ max: 120 }).withMessage('Company name is too long.'),
  ],
  submit
);

export default router;
