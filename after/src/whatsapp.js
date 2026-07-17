const Notificacao = require("./Notificacao");

class WhatsApp extends Notificacao {
    
    enviar(comunicado) {
        console.log("\n=== WHATSAPP ===")
        console.log(`Título: ${comunicado.titulo}`);
        console.log(`Mensagem: ${comunicado.mensagem}`);
    }

}

module.exports = WhatsApp;