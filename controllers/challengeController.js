import Challenge from '../models/Challenge.js';
import User from '../models/User.js';

export const getChallenges = async (req, res) => {
  try {
    const { category, difficulty, daily } = req.query;
    let filter = { active: true };

    if (category) filter.category = category;
    if (difficulty) filter.difficulty = difficulty;
    if (daily !== undefined) filter.daily = daily === 'true';

    const challenges = await Challenge.find(filter).sort({ points: -1 });
    
    res.status(200).json({
      success: true,
      count: challenges.length,
      data: challenges
    });
  } catch (error) {
    console.error('Error fetching challenges:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar desafios.',
      error: error.message
    });
  }
};

export const completeChallenge = async (req, res) => {
  try {
    const { challengeId } = req.body;
    const userId = req.userId;

    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(404).json({
        success: false,
        message: 'Desafio não encontrado.'
      });
    }

    const user = await User.findById(userId);
    
    // Verificar se já completou o desafio hoje (para desafios diários)
    if (challenge.daily) {
      const today = new Date().toDateString();
      const alreadyCompleted = user.completedChallenges.some(completed => 
        completed.challengeId.toString() === challengeId && 
        new Date(completed.completedAt).toDateString() === today
      );

      if (alreadyCompleted) {
        return res.status(400).json({
          success: false,
          message: 'Você já completou este desafio hoje.'
        });
      }
    }

    // Completar desafio
    await user.completeChallenge(challengeId, challenge.points);
    
    // Atualizar streak
    const lastActivity = new Date(user.lastActivity);
    const today = new Date();
    const diffTime = Math.abs(today - lastActivity);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      user.streak += 1;
    } else if (diffDays > 1) {
      user.streak = 1;
    }

    user.lastActivity = today;
    await user.save();

    res.status(200).json({
      success: true,
      message: `Desafio completado! +${challenge.points} pontos`,
      data: {
        points: challenge.points,
        newTotal: user.points,
        level: user.level,
        streak: user.streak
      }
    });
  } catch (error) {
    console.error('Error completing challenge:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao completar desafio.',
      error: error.message
    });
  }
};

export const getDailyChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find({ 
      daily: true, 
      active: true 
    }).sort({ category: 1 });

    res.status(200).json({
      success: true,
      data: challenges
    });
  } catch (error) {
    console.error('Error fetching daily challenges:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar desafios diários.',
      error: error.message
    });
  }
};