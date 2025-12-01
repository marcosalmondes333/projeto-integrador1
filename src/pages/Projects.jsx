import React, { useState, useEffect } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [projects, setProjects] = useState([])

  // Mock data - substituir por API real
  useEffect(() => {
    const mockProjects = [
      {
        id: 1,
        title: 'Sistema de Gestão Sustentável',
        description: 'Plataforma completa para monitoramento e gestão de práticas sustentáveis em empresas.',
        category: 'desenvolvimento',
        image: '🌐',
        technologies: ['React', 'Node.js', 'MongoDB'],
        client: 'EcoCorp',
        year: '2024',
        featured: true
      },
      {
        id: 2,
        title: 'Consultoria Ambiental Industrial',
        description: 'Implementação de práticas sustentáveis em fábrica de grande porte.',
        category: 'consultoria',
        image: '🏭',
        technologies: ['Gestão Ambiental', 'ISO 14001'],
        client: 'Indústria Verde',
        year: '2023',
        featured: true
      },
      {
        id: 3,
        title: 'App de Monitoramento de Carbono',
        description: 'Aplicativo mobile para cálculo e redução de pegada de carbono pessoal.',
        category: 'desenvolvimento',
        image: '📱',
        technologies: ['React Native', 'Firebase', 'Python'],
        client: 'Startup Eco',
        year: '2023',
        featured: false
      },
      {
        id: 4,
        title: 'Plano de Sustentabilidade Municipal',
        description: 'Desenvolvimento de estratégia sustentável para cidade de 50k habitantes.',
        category: 'sustentabilidade',
        image: '🏙️',
        technologies: ['Análise Urbana', 'Gestão Pública'],
        client: 'Prefeitura Municipal',
        year: '2024',
        featured: true
      },
      {
        id: 5,
        title: 'Sistema de Energia Solar Residencial',
        description: 'Solução completa para implementação de energia solar em residências.',
        category: 'sustentabilidade',
        image: '☀️',
        technologies: ['Energia Solar', 'IoT', 'Monitoramento'],
        client: 'Residências Sustentáveis',
        year: '2023',
        featured: false
      },
      {
        id: 6,
        title: 'Plataforma de Educação Ambiental',
        description: 'Sistema E-learning com cursos sobre sustentabilidade e práticas verdes.',
        category: 'desenvolvimento',
        image: '🎓',
        technologies: ['Vue.js', 'Laravel', 'MySQL'],
        client: 'EcoEduca',
        year: '2024',
        featured: false
      }
    ]
    setProjects(mockProjects)
  }, [])

  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'sustentabilidade', label: 'Sustentabilidade' },
    { key: 'consultoria', label: 'Consultoria' },
    { key: 'desenvolvimento', label: 'Desenvolvimento' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1>Nossos Projetos</h1>
            <p className="hero-subtitle">
              Conheça alguns dos trabalhos onde unimos tecnologia e sustentabilidade 
              para criar impacto positivo real
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="featured-projects">
          <div className="container">
            <div className="section-header">
              <h2>Projetos em Destaque</h2>
              <p>Cases de sucesso que mostram nossa expertise em ação</p>
            </div>
            <div className="featured-grid">
              {featuredProjects.map(project => (
                <div key={project.id} className="featured-project-card">
                  <div className="project-image">
                    <span className="project-emoji">{project.image}</span>
                  </div>
                  <div className="project-content">
                    <div className="project-badge featured">Destaque</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-meta">
                      <span className="client">{project.client}</span>
                      <span className="year">{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="all-projects">
        <div className="container">
          <div className="section-header">
            <h2>Portfólio Completo</h2>
            <p>Explore todos os nossos projetos por categoria</p>
          </div>

          {/* Filter Buttons */}
          <div className="project-filters">
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <span className="project-emoji">{project.image}</span>
                  {project.featured && (
                    <div className="project-badge">Destaque</div>
                  )}
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
                <div className="project-footer">
                  <div className="project-meta">
                    <span className="client">{project.client}</span>
                    <span className="year">{project.year}</span>
                  </div>
                  <span className="project-category">
                    {filters.find(f => f.key === project.category)?.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <span className="no-projects-icon">🔍</span>
              <h3>Nenhum projeto encontrado</h3>
              <p>Tente selecionar outra categoria ou entre em contato para saber mais.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Tem um Projeto em Mente?</h2>
            <p>Vamos conversar sobre como podemos transformar sua ideia em realidade sustentável</p>
            <button className="btn btn-primary btn-large">
              Iniciar Projeto
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects