import React from "react";
import "./About.css";
import fotoSobre from "../../imagens/apresentacao.png"; // Substitua pelo caminho da sua imagem
import { FaServer, FaChartLine, FaDatabase, FaCode } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaServer />,
      title: "Arquitetura & Event-Driven",
      description: "Sistemas distribuídos e microsserviços focados em alta disponibilidade e baixa latência."
    },
    {
      icon: <FaChartLine />,
      title: "Observabilidade & Infra",
      description: "Monitoramento em tempo real com Grafana e Prometheus, além de deploys containerizados via Docker em VPS."
    },
    {
      icon: <FaDatabase />,
      title: "Modelagem de Dados",
      description: "Bancos de dados relacionais e em memória de alta performance com PostgreSQL, MySQL e Redis."
    },
    {
      icon: <FaCode />,
      title: "Qualidade de Código",
      description: "Aplicação rigorosa de Clean Code, princípios SOLID e Design Patterns para manutenção sustentável."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Bloco Superior: Texto + Foto do Lado Direito */}
        <div className="about-top-content">
          <div className="about-text">
            {/* Cabeçalho da Seção */}
            <div className="about-header">
              <span className="section-subtitle">Trajetória e Especialidades</span>
              <h2 className="section-title">Sobre Mim</h2>
            </div>

            {/* Resumo Profissional */}
            <div className="about-intro">
              <p>
                Desenvolvedor Back-End especializado na construção de sistemas de alta disponibilidade utilizando 
                <strong> Java</strong>, <strong>Spring Boot</strong> e arquitetura de microsserviços. Focado em transformar requisitos de negócios complexos em soluções escaláveis, seguras e bem monitoradas em ambiente de produção.
              </p>
            </div>
          </div>

          {/* Foto no Lado Direito (Área do círculo vermelho) */}
          <div className="about-image-container">
            <img 
              src={fotoSobre} 
              alt="William Abreu Pereira" 
              className="about-image"
            />
          </div>
        </div>

        {/* Cards de Destaques Técnicos */}
        <div className="about-grid">
          {highlights.map((item, index) => (
            <div key={index} className="about-card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;