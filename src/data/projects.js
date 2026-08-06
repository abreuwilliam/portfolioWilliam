export const projects = [
  {
    id: "pdv-papelaria",
    title: "Sistema Web Ponto de Venda (PDV)",
    category: "Observabilidade & Infra",
    iconType: "server",
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
    iconType: "heartbeat",
    description: "Sistema distribuído de missão crítica para monitoramento de sinais vitais com processamento de eventos em tempo real.",
    tags: ["WebSocket", "STOMP", "Redis", "Event-Driven", "JWT", "Spring Boot", "PostgreSQL"],
    links: {
      web: "https://vitalmonitor.duckdns.org",
      docs: "https://vitalmonitor.duckdns.org/swagger-ui/index.html",
      github: "https://github.com/abreuwilliam/MonitorVidaPacienteEmTempoReal"
    },
    hasGrafana: false
  },
  {
    id: "guia-financeiro",
    title: "Guia de Bolso Financeiro com IA",
    category: "IA & Mobile/Web",
    iconType: "receipt",
    description: "Gestão financeira com Inteligência Artificial para análise de consumo e OCR automático para leitura de comprovantes PIX (PDF/Imagem).",
    tags: ["Java", "Spring Boot", "React Native", "IA / OCR", "Docker", "Cloud"],
    links: {
      web: "https://williamabreu.duckdns.org",
      docs: "https://api-william.duckdns.org/swagger-ui/index.html",
      github: "https://github.com/abreuwilliam"
    },
    hasGrafana: false
  }
];