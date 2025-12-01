import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🌿',
      title: 'Consultoria Sustentável',
      description: 'Assessoria especializada para implementação de práticas sustentáveis em sua empresa, com foco em redução de impacto ambiental e eficiência operacional.',
      features: [
        'Análise de impacto ambiental',
        'Plano de sustentabilidade',
        'Certificações verdes',
        'Otimização de recursos'
      ],
      price: 'Sob consulta'
    },
    {
      icon: '💻',
      title: 'Desenvolvimento Green Tech',
      description: 'Soluções tecnológicas inovadoras com foco em eficiência energética, redução de carbono e práticas de desenvolvimento sustentável.',
      features: [
        'Aplicações web e mobile',
        'Sistemas de monitoramento',
        'IoT sustentável',
        'Análise de dados ambientais'
      ],
      price: 'Sob consulta'
    },
    {
      icon: '📊',
      title: 'Gestão Ambiental',
      description: 'Gerenciamento completo de recursos naturais e otimização de processos ecológicos para empresas comprometidas com o futuro.',
      features: [
        'Gestão de resíduos',
        'Controle de emissões',
        'Relatórios de sustentabilidade',
        'Consultoria legal ambiental'
      ],
      price: 'Sob consulta'
    },
    {
      icon: '🌍',
      title: 'Educação Ambiental',
      description: 'Programas de capacitação e conscientização para equipes e comunidades, promovendo cultura de sustentabilidade.',
      features: [
        'Workshops e treinamentos',
        'Material educativo',
        'Campanhas de conscientização',
        'Programas corporativos'
      ],
      price: 'Sob consulta'
    },
    {
      icon: '🔋',
      title: 'Energias Renováveis',
      description: 'Implementação de soluções de energia limpa e renovável para reduzir custos e impacto ambiental.',
      features: [
        'Estudos de viabilidade',
        'Instalação solar/eólica',
        'Otimização energética',
        'Manutenção especializada'
      ],
      price: 'Sob consulta'
    },
    {
      icon: '🏭',
      title: 'Eco-Inovação',
      description: 'Desenvolvimento de produtos e processos inovadores que unem tecnologia avançada e responsabilidade ambiental.',
      features: [
        'Pesquisa e desenvolvimento',
        'Design sustentável',
        'Prototipagem verde',
        'Inovação circular'
      ],
      price: 'Sob consulta'
    }
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Diagnóstico',
      description: 'Análise completa da situação atual e identificação de oportunidades'
    },
    {
      step: '2',
      title: 'Planejamento',
      description: 'Desenvolvimento de estratégia personalizada para seus objetivos'
    },
    {
      step: '3',
      title: 'Implementação',
      description: 'Execução do projeto com acompanhamento especializado'
    },
    {
      step: '4',
      title: 'Otimização',
      description: 'Monitoramento contínuo e melhorias baseadas em resultados'
    }
  ]

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Nossos Serviços</h1>
            <p className="hero-subtitle">
              Soluções completas em sustentabilidade e tecnologia verde 
              para transformar seu negócio e impactar positivamente o planeta
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Serviços Especializados</h2>
            <p>Oferecemos um portfólio completo de soluções sustentáveis</p>
          </div>
          <div className="services-container">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Inclui:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-footer">
                  <span className="service-price">{service.price}</span>
                  <Link to="/contato" className="btn btn-primary">
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <h2>Como Trabalhamos</h2>
            <p>Metodologia comprovada para garantir resultados excepcionais</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para Transformar seu Negócio?</h2>
            <p>Entre em contato e descubra como podemos ajudar sua empresa a ser mais sustentável e competitiva</p>
            <div className="cta-buttons">
              <Link to="/contato" className="btn btn-primary btn-large">
                Fale com Especialista
              </Link>
              <Link to="/projetos" className="btn btn-secondary btn-large">
                Ver Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services