import React from "react";
import "./Hero.css";
import executivosImg from "../../imagens/executivos.webp";
import { SiSpringboot, SiMysql, SiDocker } from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        {/* Foto de Perfil */}
       <div className="hero-image-wrapper">
  <img 
    src={executivosImg} 
    alt="William Abreu Pereira" 
    className="hero-image"
    fetchPriority="high"
    decoding="sync"
    width="400"
    height="400"
  />
</div>

        {/* Textos Principais */}
        <div className="hero-content">
          <span className="hero-badge">Disponível para novos projetos</span>
          
          <h1 className="hero-title">William Abreu Pereira</h1>
          
          <h2 className="hero-subtitle">
            Backend Engineer <span>| Java & Spring Specialist</span>
          </h2>
          
          <p className="hero-headline">
            Desenvolvimento de sistemas robustos, APIs escaláveis, arquiteturas distribuídas e suporte a deploy via containers em VPS.
          </p>

          {/* Badges de Tecnologias */}
          <div className="hero-tech-stack">
            <div className="tech-item" title="Java">
              <FaJava className="tech-icon java" />
              <span>Java</span>
            </div>
            
            <div className="tech-item" title="Spring Boot">
              <SiSpringboot className="tech-icon spring" />
              <span>Spring Boot</span>
            </div>

            <div className="tech-item" title="Docker">
              <SiDocker className="tech-icon docker" />
              <span>Docker</span>
            </div>
            
            <div className="tech-item" title="MySQL / PostgreSQL">
              <SiMysql className="tech-icon mysql" />
              <span>MySQL</span>
            </div>
            
            <div className="tech-item" title="Databases / SQL">
              <FaDatabase className="tech-icon db" />
              <span>Database</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn-secondary">Entrar em Contato</a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;