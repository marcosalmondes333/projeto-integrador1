import React from 'react'
import './ChallengeCard.css'

const ChallengeCard = ({ challenge, onComplete, completed }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      reciclagem: '♻️',
      transporte: '🚲',
      denuncia: '📍',
      consumo: '🛍️',
      educacao: '📚'
    }
    return icons[category] || '🌱'
  }

  const getDifficultyColor = (difficulty) => {
    const colors = {
      facil: '#22c55e',
      medio: '#eab308',
      dificil: '#ef4444'
    }
    return colors[difficulty]
  }

  return (
    <div className={`challenge-card ${completed ? 'completed' : ''}`}>
      <div className="challenge-header">
        <div className="challenge-icon">
          {challenge.icon || getCategoryIcon(challenge.category)}
        </div>
        <div className="challenge-meta">
          <span 
            className="difficulty-badge"
            style={{ backgroundColor: getDifficultyColor(challenge.difficulty) }}
          >
            {challenge.difficulty}
          </span>
          <span className="points-badge">+{challenge.points} pts</span>
        </div>
      </div>

      <div className="challenge-content">
        <h3>{challenge.title}</h3>
        <p>{challenge.description}</p>
        
        <div className="challenge-instructions">
          <strong>📋 Como participar:</strong>
          <p>{challenge.instructions}</p>
        </div>

        {challenge.requirements && (
          <div className="challenge-requirements">
            <strong>🎯 Requisitos:</strong>
            <ul>
              {Object.entries(challenge.requirements).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="challenge-footer">
        {!completed ? (
          <button 
            className="btn btn-primary complete-btn"
            onClick={() => onComplete(challenge._id)}
          >
            ✅ Completar Desafio
          </button>
        ) : (
          <div className="completed-badge">
            🎉 Concluído!
          </div>
        )}
      </div>
    </div>
  )
}

export default ChallengeCard