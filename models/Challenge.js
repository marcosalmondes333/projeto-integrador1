import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Título é obrigatório'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Descrição é obrigatória'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Categoria é obrigatória'],
    enum: ['reciclagem', 'transporte', 'denuncia', 'consumo', 'educacao']
  },
  difficulty: {
    type: String,
    enum: ['facil', 'medio', 'dificil'],
    default: 'facil'
  },
  points: {
    type: Number,
    required: [true, 'Pontos são obrigatórios'],
    min: 1
  },
  daily: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  },
  requirements: {
    type: Map,
    of: String
  },
  icon: {
    type: String,
    default: '🌱'
  },
  instructions: {
    type: String,
    required: [true, 'Instruções são obrigatórias']
  },
  verificationType: {
    type: String,
    enum: ['auto', 'foto', 'localizacao', 'texto'],
    default: 'auto'
  }
}, {
  timestamps: true
});

export default mongoose.model('Challenge', challengeSchema);