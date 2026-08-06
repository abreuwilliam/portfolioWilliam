import emailjs from "@emailjs/browser";

export const sendEmail = async (data) => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Configurações do EmailJS ausentes nas variáveis de ambiente (.env).");
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        título: "Contato do Portfólio",
        nome: data.name,
        "e-mail": data.email,
        mensagem: data.message,
      },
      publicKey
    );
    return response;
  } catch (error) {
    console.error("Erro ao enviar e-mail via EmailJS:", error);
    throw error;
  }
};