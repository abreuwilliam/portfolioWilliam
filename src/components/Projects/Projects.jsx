import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaServer, 
  FaHeartbeat, 
  FaReceipt,
  FaChartLine,
  FaBook,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

import "./Projects.css";

export default function Projects() {
  const [showGrafana, setShowGrafana] = useState(false);

  const projects = [
    {
      id: "pdv-papelaria",
      title: "Sistema Web Ponto de Venda (PDV)",
      category: "Observabilidade & Infra",
      icon: <FaServer className="project-type-icon blue" />,
      description: "Ecossistema comercial completo com foco em observabilidade, controle de caixa e saúde da aplicação em produção.",
      tags: ["Java", "Spring Boot", "Spring Security", "OAuth2", "JWT", "Prometheus", "Grafana", "SQL"],
      links: {
        web: "https://sistemadeloja.duckdns.org/caixa",
        docs: "https://backsistemapdv.duckdns.org/swagger-ui/index.html",
        grafana: "https://monitoramentowilliam.duckdns.org/d/ad5nc6w/jvm-micrometer-pdv",
        github: "https://github.com/abreuwilliam/PontoDeVenda"
      },
      hasGrafana: true,
      grafanaEmbed: "https://monitoramentowilliam.duckdns.org/d/ad5nc6w/jvm-micrometer-pdv?orgId=1&refresh=10s&kiosk"
    },
    {
      id: "monitor-paciente",
      title: "Monitor Vida Paciente em Tempo Real",
      category: "Sistemas Distribuídos",
      icon: <FaHeartbeat className="project-type-icon red" />,
      description: "Sistema distribuído de missão crítica para monitoramento de sinais vitais com processamento de eventos em tempo real.",
      tags: ["WebSocket", "STOMP", "Redis", "Event-Driven", "JWT", "Spring Boot", "PostgreSQL"],
      links: {
        web: "https://vitalmonitor.duckdns.org",
        docs: "https://vitalmonitor.duckdns.org/swagger-ui/index.html",
        github: "https://github.com/abreuwilliam/MonitorVidaPacienteEmTempoReal"
      }
    },
    {
      id: "guia-financeiro",
      title: "Guia de Bolso Financeiro com IA",
      category: "IA & Mobile/Web",
      icon: <FaReceipt className="project-type-icon green" />,
      description: "Gestão financeira com Inteligência Artificial para análise de consumo e OCR automático para leitura de comprovantes PIX (PDF/Imagem).",
      tags: ["Java", "Spring Boot", "React Native", "IA / OCR", "Docker", "Cloud"],
      links: {
        web: "https://williamabreu.duckdns.org",
        docs: "https://api-william.duckdns.org/swagger-ui/index.html",
        github: "https://github.com/abreuwilliam"
      }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        <div className="projects-header">
          <span className="section-subtitle">Portfólio</span>
          <h2 className="section-title">Projetos em Destaque</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              <div className="card-top-content">
                <div className="project-card-header">
                  <div className="project-icon-box">
                    {project.icon}
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="card-bottom-content">
                {/* Botão Retrátil do Grafana para não quebrar o alinhamento */}
                {project.hasGrafana && (
                  <div className="grafana-toggle-area">
                    <button 
                      className={`btn-toggle-grafana ${showGrafana ? 'active' : ''}`}
                      onClick={() => setShowGrafana(!showGrafana)}
                    >
                      <FaChartLine /> {showGrafana ? "Ocultar Monitoramento" : "Ver Dashboard Grafana"} 
                      {showGrafana ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    <AnimatePresence>
                      {showGrafana && (
                        <motion.div 
                          className="grafana-wrapper"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 200 }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <iframe
                            src={project.grafanaEmbed}
                            title="Painel Grafana PDV"
                            width="100%"
                            height="100%"
                            style={{ border: "none" }}
                            allowFullScreen
                          ></iframe>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botões de Ação */}
                <div className="project-actions">
                  <div className="actions-row">
                    {project.links.web && (
                      <a href={project.links.web} target="_blank" rel="noreferrer" className="btn-action btn-web">
                        <FaExternalLinkAlt /> Web
                      </a>
                    )}
                    {project.links.docs && (
                      <a href={project.links.docs} target="_blank" rel="noreferrer" className="btn-action btn-docs">
                        <FaBook /> API
                      </a>
                    )}
                  </div>

                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-action btn-github">
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}