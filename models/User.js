import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Senha é obrigatória'],
    minlength: 6
  },
  points: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  streak: {
    type: Number,
    default: 0
  },
  lastActivity: {
    type: Date,
    default: Date.now
  },
  completedChallenges: [{
    challengeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Challenge'
    },
    completedAt: {
      type: Date,
      default: Date.now
    },
    pointsEarned: Number
  }],
  badges: [{
    badgeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Badge'
    },
    earnedAt: {
      type: Date,
      default: Date.now
    }
  }],
  profile: {
    avatar: {
      type: String,
      default: '🌱'
    },
    bio: String,
    location: String
  }
}, {
  timestamps: true
});

// Método para adicionar pontos
userSchema.methods.addPoints = function(points) {
  this.points += points;
  
  // Atualizar nível a cada 100 pontos
  this.level = Math.floor(this.points / 100) + 1;
  
  return this.save();
};

// Método para completar desafio
userSchema.methods.completeChallenge = function(challengeId, points) {
  this.completedChallenges.push({
    challengeId,
    pointsEarned: points
  });
  
  return this.addPoints(points);
};

export default mongoose.model('User', userSchema);