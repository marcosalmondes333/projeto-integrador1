export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const SERVICE_CATEGORIES = {
  SUSTENTABILIDADE: 'sustentabilidade',
  CONSULTORIA: 'consultoria',
  DESENVOLVIMENTO: 'desenvolvimento'
}

export const PROJECT_STATUS = {
  PLANNING: 'planning',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  ON_HOLD: 'on_hold'
}

export const CONTACT_SUBJECTS = [
  { value: 'consultoria', label: 'Consultoria Sustentável' },
  { value: 'desenvolvimento', label: 'Desenvolvimento Green Tech' },
  { value: 'gestao', label: 'Gestão Ambiental' },
  { value: 'orcamento', label: 'Solicitar Orçamento' },
  { value: 'parceria', label: 'Parceria' },
  { value: 'outro', label: 'Outro' }
]

export const SOCIAL_LINKS = {
  LINKEDIN: '#',
  INSTAGRAM: '#',
  TWITTER: '#',
  GITHUB: '#'
}