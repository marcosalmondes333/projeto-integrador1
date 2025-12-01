import mongoose from 'mongoose';

const badgeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Descrição é obrigatória'],
    trim: true
  },
  icon: {
    type: String,
    required: [true, 'Ícone é obrigatório']
  },
  rarity: {
    type: String,
    enum: ['comum', 'raro', 'epico', 'lendario'],
    default: 'comum'
  },
  requirements: {
    type: Map,
    of: Number
  },
  category: {
    type: String,
    enum: ['reciclagem', 'transporte', 'denuncia', 'streak', 'nivel'],
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Badge', badgeSchema);