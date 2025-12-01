import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Transformando o Futuro com{' '}
                <span className="highlight">Sustentabilidade</span>
              </h1>
              <p className="hero-description">
                Na Kansus, unimos inovação e natureza para criar soluções 
                sustentáveis que fazem a diferença. Juntos, construímos um 
                amanhã mais verde e tecnológico.
              </p>
              <div className="hero-buttons">
                <Link to="/servicos" className="btn btn-primary">
                  Nossos Serviços
                </Link>
                <Link to="/contato" className="btn btn-secondary">
                  Fale Conosco
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-card card-1">
                <span className="card-icon">🌱</span>
                <h4>Sustentabilidade</h4>
                <p>Soluções ecológicas</p>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">💡</span>
                <h4>Inovação</h4>
                <p>Tecnologia verde</p>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">🚀</span>
                <h4>Resultados</h4>
                <p>Impacto positivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projetos Concluídos</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">25+</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Compromisso Sustentável</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2>Nossas Soluções</h2>
            <p>Oferecemos serviços especializados para um futuro mais sustentável</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <span className="service-icon">🌿</span>
              <h3>Consultoria Sustentável</h3>
              <p>Assessoria especializada para implementação de práticas sustentáveis em sua empresa.</p>
              <Link to="/servicos" className="service-link">
                Saiba mais →
              </Link>
            </div>
            <div className="service-card">
              <span className="service-icon">💻</span>
              <h3>Desenvolvimento Green Tech</h3>
              <p>Soluções tecnológicas inovadoras com foco em eficiência energética e redução de impacto.</p>
              <Link to="/servicos" className="service-link">
                Saiba mais →
              </Link>
            </div>
            <div className="service-card">
              <span className="service-icon">📊</span>
              <h3>Gestão Ambiental</h3>
              <p>Gerenciamento completo de recursos naturais e otimização de processos ecológicos.</p>
              <Link to="/servicos" className="service-link">
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para Transformar sua Empresa?</h2>
            <p>Junte-se à revolução sustentável e destaque-se no mercado</p>
            <Link to="/contato" className="btn btn-primary btn-large">
              Começar Agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home