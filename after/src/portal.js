const Notificacao = require("./Notificacao");

class Portal extends Notificacao {

    enviar(comunicado) {
        console.log("\n=== PORTAL ESCOLAR ===")
        console.log(`Título: ${comunicado.titulo}`);
        console.log(`Mensagem: ${comunicado.mensagem}`);
    }

}

module.exports = Portal;