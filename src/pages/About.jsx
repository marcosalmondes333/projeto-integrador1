import React from 'react'
import './About.css'

const About = () => {
  const teamMembers = [
    {
      name: 'Ana Silva',
      role: 'CEO & Fundadora',
      bio: 'Especialista em sustentabilidade com 10+ anos de experiência',
      avatar: '👩‍💼'
    },
    {
      name: 'Carlos Santos',
      role: 'CTO',
      bio: 'Desenvolvedor full-stack focado em tecnologias verdes',
      avatar: '👨‍💻'
    },
    {
      name: 'Marina Oliveira',
      role: 'Designer Sustentável',
      bio: 'Cria experiências que unem estética e ecologia',
      avatar: '👩‍🎨'
    }
  ]

  const values = [
    {
      icon: '🌍',
      title: 'Sustentabilidade',
      description: 'Compromisso com o meio ambiente e futuro das próximas gerações'
    },
    {
      icon: '💡',
      title: 'Inovação',
      description: 'Buscamos constantemente novas soluções tecnológicas verdes'
    },
    {
      icon: '🤝',
      title: 'Transparência',
      description: 'Relações claras e honestas com clientes e parceiros'
    },
    {
      icon: '🚀',
      title: 'Excelência',
      description: 'Qualidade superior em todos os nossos projetos e serviços'
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Sobre a Kansus</h1>
            <p className="hero-subtitle">
              Pioneiros em unir tecnologia e sustentabilidade para criar 
              um impacto positivo no mundo
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Nossa Missão</h2>
              <p>
                Na Kansus, acreditamos que tecnologia e sustentabilidade 
                devem andar juntas. Nossa missão é desenvolver soluções 
                inovadoras que não apenas resolvam problemas complexos, 
                mas também preservem e regenerem nosso planeta.
              </p>
              <p>
                Fundada em 2021, temos orgulho de ser uma empresa 100% 
                comprometida com práticas ecológicas e responsabilidade 
                social em todos os nossos projetos.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Anos Transformando</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projetos Sustentáveis</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Compromisso Verde</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="section-header">
            <h2>Nossos Valores</h2>
            <p>Princípios que guiam cada decisão e projeto na Kansus</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="section-header">
            <h2>Nosso Time</h2>
            <p>Profissionais apaixonados por criar um futuro melhor</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  {member.avatar}
                </div>
                <h3>{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About