import React from "react";
import ReactDOM from "react-dom/client";
import emailjs from "@emailjs/browser";
import App from "./App";
import "./styles/globals.css";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

if (publicKey) {
  emailjs.init(publicKey);
} else {
  console.error("ERRO CRÍTICO: VITE_PUBLIC_KEY não encontrada no main.jsx!");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);