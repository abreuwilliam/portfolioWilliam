import React from "react";
import "./Skills.css";
import { 
  FaCode, 
  FaSitemap, 
  FaCogs, 
  FaExchangeAlt, 
  FaDatabase, 
  FaCloud, 
  FaInfoCircle 
} from "react-icons/fa";

export default function Skills() {
  const skillCards = [
    {
      id: "backend",
      icon: <FaCode className="card-icon-svg green" />,
      title: "Backend",
      description: "APIs RESTful, arquitetura limpa e sistemas escaláveis com suporte a mensageria.",
      tags: ["Spring Boot", "Spring Security", "JPA/Hibernate", "JWT", "Java 17", "WebSockets"],
      borderClass: "border-green"
    },
    {
      id: "architecture",
      icon: <FaSitemap className="card-icon-svg yellow" />,
      title: "Arquitetura & Boas Práticas",
      description: "Design e estruturação de sistemas complexos mantendo alta coesão e baixo acoplamento.",
      tags: ["Design Patterns", "Clean Architecture", "SOLID", "DDD", "Ports & Adapters"],
      borderClass: "border-yellow"
    },
    {
      id: "devops",
      icon: <FaCogs className="card-icon-svg orange" />,
      title: "DevOps & Observabilidade",
      description: "CI/CD, containers, deploy em VPS e monitoramento contínuo da aplicação.",
      tags: ["Docker", "Grafana", "Prometheus", "VPS Contabo", "GitHub Actions", "Caddy/Nginx"],
      borderClass: "border-orange"
    },
    {
      id: "database",
      icon: <FaDatabase className="card-icon-svg purple" />,
      title: "Data Base & Cache",
      description: "Modelagem e otimização de bancos de dados relacionais e em memória.",
      tags: ["PostgreSQL", "MySQL", "Redis", "Modelagem SQL", "Flyway"],
      borderClass: "border-purple"
    },
    {
      id: "messaging",
      icon: <FaExchangeAlt className="card-icon-svg red" />,
      title: "Mensageria & Eventos",
      description: "Comunicação assíncrona, filas e integração resiliente em tempo real entre serviços.",
      tags: ["RabbitMQ", "STOMP", "WebSocket", "Event-Driven", "Kafka Concept"],
      borderClass: "border-red"
    },
    {
      id: "cloud",
      icon: <FaCloud className="card-icon-svg blue" />,
      title: "Cloud & Hosting",
      description: "Infraestrutura própria em nuvem para hospedagem, logs e gerenciamento de microsserviços.",
      tags: ["Linux (Ubuntu)", "Docker Compose", "DuckDNS", "SSL/TLS", "Cronjobs"],
      borderClass: "border-blue"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        <div className="skills-header">
          <span className="section-subtitle">Especialidades</span>
          <h2 className="section-title">Minhas Habilidades</h2>
        </div>

        <div className="skills-grid">
          {skillCards.map((card) => (
            <div key={card.id} className={`skill-card ${card.borderClass}`}>
              
              {/* Header do Card */}
              <div className="card-top">
                <div className="icon-wrapper">
                  {card.icon}
                  <span className="info-badge" title="Informações"><FaInfoCircle /></span>
                </div>
              </div>

              {/* Título e Descrição */}
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.description}</p>

              {/* Esteira com palavras se movendo (Carrossel Infinito) */}
              <div className="tags-scroller">
                <div className="tags-track">
                  {[...card.tags, ...card.tags].map((tag, i) => (
                    <span key={i} className="skill-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}