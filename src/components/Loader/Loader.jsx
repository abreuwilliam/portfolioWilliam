import React from "react";
import { motion } from "framer-motion";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        
        {/* Logo Animado */}
        <motion.div 
          className="loader-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          William<span className="logo-accent">.dev</span>
        </motion.div>

        {/* Barra de Progresso */}
        <div className="loader-bar-bg">
          <motion.div 
            className="loader-bar-fill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
          />
        </div>

        {/* Texto de Status */}
        <motion.span 
          className="loader-text"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Carregando ambiente...
        </motion.span>

      </div>
    </div>
  );
}