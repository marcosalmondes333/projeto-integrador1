export const formatPhone = (phone) => {
  // Remove todos os caracteres não numéricos
  const cleaned = phone.replace(/\D/g, '')
  
  // Aplica a formatação (51) 99999-9999
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  
  return phone
}

export const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(dateString).toLocaleDateString('pt-BR', options)
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}