import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Seção Logo e Descrição */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🌿</span>
              <span className="logo-text">Kansus</span>
            </div>
            <p className="footer-description">
              Transformando ideias em soluções sustentáveis para um futuro melhor. 
              Juntos, construímos um amanhã mais verde e inovador.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" className="social-link">
                <span>📱</span>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <span>📸</span>
              </a>
              <a href="#" aria-label="Email" className="social-link">
                <span>📧</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <div className="footer-links">
              <Link to="/sobre" className="footer-link">Sobre Nós</Link>
              <Link to="/servicos" className="footer-link">Nossos Serviços</Link>
              <Link to="/projetos" className="footer-link">Projetos</Link>
              <Link to="/contato" className="footer-link">Contato</Link>
            </div>
          </div>

          {/* Serviços */}
          <div className="footer-section">
            <h4>Serviços</h4>
            <div className="footer-links">
              <span className="footer-link">Consultoria Sustentável</span>
              <span className="footer-link">Desenvolvimento Green Tech</span>
              <span className="footer-link">Gestão Ambiental</span>
              <span className="footer-link">Inovação Ecológica</span>
            </div>
          </div>

          {/* Contato */}
          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Porto Alegre, RS - Brasil</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+55 (51) 99999-9999</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>contato@kansus.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright">
            <p>&copy; {currentYear} Kansus. Todos os direitos reservados.</p>
            <div className="legal-links">
              <Link to="/privacidade" className="legal-link">Política de Privacidade</Link>
              <Link to="/termos" className="legal-link">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer