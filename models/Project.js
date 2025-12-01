import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
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
    enum: ['sustentabilidade', 'consultoria', 'desenvolvimento']
  },
  image: {
    type: String,
    required: [true, 'Imagem é obrigatória']
  },
  technologies: [{
    type: String,
    trim: true
  }],
  client: {
    type: String,
    trim: true
  },
  projectDate: {
    type: Date,
    default: Date.now
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('Project', projectSchema);