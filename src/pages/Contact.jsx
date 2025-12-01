import React, { useState } from 'react'
import axios from 'axios'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await axios.post('/api/contact', formData)
      
      setSubmitStatus({
        type: 'success',
        message: response.data.message || 'Mensagem enviada com sucesso!'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Erro ao enviar mensagem. Tente novamente.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'contato@kansus.com',
      link: 'mailto:contato@kansus.com'
    },
    {
      icon: '📞',
      title: 'Telefone',
      value: '+55 (51) 99999-9999',
      link: 'tel:+5551999999999'
    },
    {
      icon: '📍',
      title: 'Endereço',
      value: 'Porto Alegre, RS - Brasil',
      link: 'https://maps.google.com/?q=Porto+Alegre,RS,Brasil'
    },
    {
      icon: '🕒',
      title: 'Horário',
      value: 'Seg - Sex: 9h às 18h',
      link: null
    }
  ]

  const faqItems = [
    {
      question: 'Quanto tempo leva para obter uma resposta?',
      answer: 'Respondemos todas as mensagens em até 24 horas úteis.'
    },
    {
      question: 'Vocês atendem em todo o Brasil?',
      answer: 'Sim, atendemos clientes em todo território nacional de forma remota.'
    },
    {
      question: 'Preciso ter conhecimento técnico?',
      answer: 'Não, nossa equipe guia você através de todo o processo de forma simples.'
    },
    {
      question: 'Oferecem suporte pós-projeto?',
      answer: 'Sim, todos os nossos projetos incluem suporte e manutenção.'
    }
  ]

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Entre em Contato</h1>
            <p className="hero-subtitle">
              Pronto para transformar sua ideia em realidade sustentável? 
              Vamos conversar sobre como podemos ajudar seu projeto.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="contact-content">
          {/* Contact Form */}
          <section className="contact-form-section">
            <div className="form-header">
              <h2>Envie sua Mensagem</h2>
              <p>Preencha o formulário abaixo e entraremos em contato em breve</p>
            </div>

            {submitStatus && (
              <div className={`alert alert-${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(51) 99999-9999"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Assunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="consultoria">Consultoria Sustentável</option>
                    <option value="desenvolvimento">Desenvolvimento Green Tech</option>
                    <option value="gestao">Gestão Ambiental</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-large submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section className="contact-info-section">
            <div className="contact-info-card">
              <h3>Informações de Contato</h3>
              <p>Entre em contato conosco através dos canais abaixo</p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <span className="contact-icon">{info.icon}</span>
                    <div className="contact-details">
                      <strong>{info.title}</strong>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Siga-nos</h4>
                <div className="social-buttons">
                  <a href="#" className="social-btn" aria-label="LinkedIn">
                    <span>💼</span>
                    LinkedIn
                  </a>
                  <a href="#" className="social-btn" aria-label="Instagram">
                    <span>📸</span>
                    Instagram
                  </a>
                  <a href="#" className="social-btn" aria-label="Twitter">
                    <span>🐦</span>
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h3>Perguntas Frequentes</h3>
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h4>{item.question}</h4>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact