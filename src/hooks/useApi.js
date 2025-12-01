import { useState, useEffect } from 'react'
import axios from 'axios'

export const useApi = (url, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { method = 'GET', immediate = true, body = null } = options

  const execute = async (customUrl = url, customBody = body) => {
    setLoading(true)
    setError(null)

    try {
      const config = {
        method,
        url: customUrl,
        data: customBody
      }

      const response = await axios(config)
      setData(response.data)
      return response.data
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erro na requisição'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (immediate && method === 'GET') {
      execute()
    }
  }, [url, immediate])

  return {
    data,
    loading,
    error,
    execute,
    refetch: () => execute()
  }
}