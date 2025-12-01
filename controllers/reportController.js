import Report from '../models/Report.js';
import Challenge from '../models/Challenge.js';
import User from '../models/User.js';

export const createReport = async (req, res) => {
  try {
    const { location, description, category, photos, challengeId } = req.body;
    const userId = req.userId;

    const report = new Report({
      userId,
      location,
      description,
      category,
      photos,
      challengeId
    });

    await report.save();

    // Se foi um desafio, completar automaticamente
    if (challengeId) {
      const challenge = await Challenge.findById(challengeId);
      if (challenge) {
        const user = await User.findById(userId);
        await user.completeChallenge(challengeId, challenge.points);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Denúncia registrada com sucesso! Obrigado por ajudar o meio ambiente.',
      data: report
    });
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao registrar denúncia.',
      error: error.message
    });
  }
};

export const getReports = async (req, res) => {
  try {
    const { status, category } = req.query;
    let filter = {};

    if (status) filter.status = status;
    if (category) filter.category = category;

    const reports = await Report.find(filter)
      .populate('userId', 'name profile.avatar')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reports.length,
      data: reports
    });
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar denúncias.',
      error: error.message
    });
  }
};