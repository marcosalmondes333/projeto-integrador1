export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/
  return phoneRegex.test(phone)
}

export const validateRequired = (value) => {
  return value && value.trim().length > 0
}

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength
}

export const validateContactForm = (formData) => {
  const errors = {}

  if (!validateRequired(formData.name)) {
    errors.name = 'Nome é obrigatório'
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email é obrigatório'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Email inválido'
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Telefone inválido'
  }

  if (!validateRequired(formData.subject)) {
    errors.subject = 'Assunto é obrigatório'
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'Mensagem é obrigatória'
  } else if (!validateMinLength(formData.message, 10)) {
    errors.message = 'Mensagem deve ter pelo menos 10 caracteres'
  }

  return errors
}