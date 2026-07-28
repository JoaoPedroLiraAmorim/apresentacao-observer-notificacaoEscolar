class Escola {

    publicarComunicado(titulo, comunicado, tiposNotificacao) {

        if (!titulo) {
            throw new Error("O título do comunicado é obrigatório.");
        }

        if (!comunicado) {
            throw new Error("A mensagem do comunicado é obrigatória.");
        }

        if (!Array.isArray(tiposNotificacao) || tiposNotificacao.length === 0) {
            throw new Error("É obrigatório informar ao menos um tipo de notificação.");
        }

        console.log(`Título: ${titulo}`);
        console.log(`Comunicado: ${comunicado}`);

        for (const tipo of tiposNotificacao) {

            if (
                tipo !== "EMAIL" &&
                tipo !== "WHATSAPP" &&
                tipo !== "PORTAL"
            ) {
                throw new Error("Tipo de notificação inválido.");
            }

            if (tipo === "EMAIL") {
                this.enviarEmail();
            }

            if (tipo === "WHATSAPP") {
                this.enviarWhatsApp();
            }

            if (tipo === "PORTAL") {
                this.publicarPortal();
            }
        }
    }

    enviarEmail() {
        console.log("\nMensagem enviada via Email aos responsáveis.");
    }

    enviarWhatsApp() {
        console.log("Mensagem enviada via WhatsApp aos responsáveis.");
    }

    publicarPortal() {
        console.log("Mensagem enviada via Portal Escolar aos responsáveis.");
    }
}

module.exports = Escola;