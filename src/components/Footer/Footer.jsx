import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">William<span>dev</span></h3>
            <p className="footer-tagline">
              Desenvolvedor Java | Spring Boot & Arquitetura de Sistemas
            </p>
          </div>

          <div className="footer-socials">
            <a 
              href="https://github.com/abreuwilliam" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/abreuwilliam" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:williamabreu.dev@gmail.com" 
              aria-label="E-mail"
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} William Abreu Pereira. Todos os direitos reservados.
          </p>

          <button 
            onClick={scrollToTop} 
            className="btn-back-to-top"
            aria-label="Voltar ao topo"
          >
            <FaChevronUp />
          </button>
        </div>

      </div>
    </footer>
  );
}