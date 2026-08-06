import React from "react";
import { motion } from "framer-motion";
import { 
  FaBriefcase, 
  FaBuilding, 
  FaStore, 
  FaCalendarAlt, 
  FaCheckCircle 
} from "react-icons/fa";

import "./Experience.css";

export default function Experience() {
  const experiences = [
    ,
    {
      id: "tb-servicos",
      role: "Desenvolvedor Java",
      company: "TB Serviços e Soluções",
      period: "Maio de 2024 - Presente",
      type: "Período Integral",
      icon: <FaBuilding className="company-icon blue" />,
      highlights: [
        "Construção de ecossistema backend no setor bancario, criando Controllers, Services, Repositories e DTOs bem definidos.",
        "Criação de testes automatizados unitários e BDD utilizando JUnit 5, Mockito e Cucumber.",
        "Análise e otimização de queries Oracle SQL para processamento de alto volume de dados com máxima eficiência.",
        "Monitoramento e observabilidade em produção com logs estruturados, Prometheus, Splunk e New Relic.",
        "Atuação em pipelines CI/CD (Jenkins) e versionamento contínuo em Git/GitLab com práticas rigorosas de Code Review."
      ],
      tags: ["Java", "Spring Boot", "Oracle SQL", "JUnit 5", "Cucumber", "Prometheus", "Splunk", "Jenkins", "GitLab"]
    },
    {
      id: "papelaria-planeta",
      role: "Desenvolvedor de Software",
      company: "Papelaria Planeta",
      period: "Jan de 2025 - Presente",
      type: "Projeto / Consultoria",
      icon: <FaStore className="company-icon green" />,
      highlights: [
        "Desenvolvimento completo de sistema PDV com Java, Spring Boot, MySQL, React.js e TypeScript para automação de caixa e estoque.",
        "Implementação de segurança e controle de acesso resiliente com Spring Security e autenticação JWT.",
        "Criação de módulos de vendas diárias e relatórios em tempo real para tomada de decisão estratégica do negócio.",
        "Otimização da interface móvel para atendimento em balcão, elevando a velocidade operacional em 20%."
      ],
      tags: ["Java 17", "Spring Boot", "React.js", "TypeScript", "MySQL", "Spring Security", "JWT"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Carreira</span>
          <h2 className="section-title">Experiência Profissional</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>

              <div className="timeline-content">
                <div className="experience-top">
                  <div className="role-company">
                    <div className="company-badge">
                      {exp.icon}
                      <span className="company-name">{exp.company}</span>
                    </div>
                    <h3 className="role-title">{exp.role}</h3>
                  </div>

                  <div className="period-badge">
                    <FaCalendarAlt className="calendar-icon" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="highlights-list">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <FaCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience-tags">
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className="exp-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}