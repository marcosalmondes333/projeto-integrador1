import { useState } from 'react'

export const useForm = (initialState = {}, validate) => {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    // Validate on blur if validate function provided
    if (validate) {
      const fieldErrors = validate(formData)
      setErrors(fieldErrors)
    }
  }

  const resetForm = () => {
    setFormData(initialState)
    setErrors({})
    setTouched({})
  }

  const setFieldValue = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    resetForm,
    setFieldValue,
    setFormData
  }
}