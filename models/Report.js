import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  location: {
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  description: {
    type: String,
    required: [true, 'Descrição é obrigatória'],
    trim: true
  },
  category: {
    type: String,
    enum: ['lixo_irregular', 'poluicao_agua', 'queimada', 'desmatamento', 'outro'],
    required: true
  },
  photos: [String],
  status: {
    type: String,
    enum: ['pendente', 'em_analise', 'resolvido', 'arquivado'],
    default: 'pendente'
  },
  severity: {
    type: String,
    enum: ['baixa', 'media', 'alta', 'critica'],
    default: 'media'
  },
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge'
  }
}, {
  timestamps: true
});

export default mongoose.model('Report', reportSchema);