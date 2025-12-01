import express from 'express';
import { createReport, getReports } from '../controllers/reportController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createReport);
router.get('/', getReports);

export default router;