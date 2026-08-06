import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner
} from "react-icons/fa";
import { sendEmail } from "../../services/emailService";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      await sendEmail(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reseta a mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setErrorMessage("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">Conexão</span>
          <h2 className="section-title">Vamos Conversar?</h2>
        </motion.div>

        <div className="contact-grid">
          
          {/* Informações de Contato */}
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="info-title">Entre em contato</h3>
            <p className="info-description">
              Estou sempre aberto a novas oportunidades, colaborações em projetos backend/fullstack ou simplesmente para trocar uma ideia sobre tecnologia.
            </p>

            <div className="info-items">
              <a href="mailto:williamabreu.dev@gmail.com" className="info-item">
                <div className="info-icon-box blue">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="info-label">E-mail</span>
                  <p className="info-value">abreu21william@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/abreuwilliam" target="_blank" rel="noreferrer" className="info-item">
                <div className="info-icon-box linkedin">
                  <FaLinkedin />
                </div>
                <div>
                  <span className="info-label">LinkedIn</span>
                  <p className="info-value">linkedin.com/in/abreuwilliam</p>
                </div>
              </a>

              <a href="https://github.com/abreuwilliam" target="_blank" rel="noreferrer" className="info-item">
                <div className="info-icon-box github">
                  <FaGithub />
                </div>
                <div>
                  <span className="info-label">GitHub</span>
                  <p className="info-value">github.com/abreuwilliam</p>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon-box green">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="info-label">Localização</span>
                  <p className="info-value">Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário de Mensagem */}
          <motion.div 
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo" 
                  required 
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com" 
                  required 
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui..." 
                  required 
                  disabled={loading}
                ></textarea>
              </div>

              {errorMessage && (
                <p className="error-message" style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "0.2rem" }}>
                  {errorMessage}
                </p>
              )}

              <button type="submit" className="btn-send-message" disabled={loading}>
                {loading ? (
                  <>
                    <FaSpinner className="icon-spin" /> Enviando...
                  </>
                ) : submitted ? (
                  <>
                    <FaCheckCircle className="icon-success" /> Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}