import express from 'express';
import { 
  getChallenges, 
  completeChallenge, 
  getDailyChallenges 
} from '../controllers/challengeController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getChallenges);
router.get('/daily', getDailyChallenges);
router.post('/complete', auth, completeChallenge);

export default router;