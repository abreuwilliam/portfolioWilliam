import React, { useState } from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin, FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle"; // Ajuste o caminho se necessário

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-icon-wrapper">
            <FaLaptopCode className="laptop-icon" />
          </div>
          <div className="logo-text">
            <span className="logo-name">
              William<span className="logo-highlight">Abreu</span>
            </span>
            <span className="logo-role">Full-Stack Developer</span>
          </div>
        </div>

        {/* Botão Hambúrguer (Mobile) */}
        <button 
          className="hamburger-button" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Conteúdo Navegação + Redes + Tema */}
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={toggleMenu}>Início</a></li>
            <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
          </ul>

          <div className="nav-actions">
            <div className="social-icons">
              <a href="https://github.com/abreuwilliam" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/william-abreu-pereira/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>

            <div className="divider" />

            {/* Alternador de tema dinâmico */}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;