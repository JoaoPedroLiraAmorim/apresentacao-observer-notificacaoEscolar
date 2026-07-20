const Comunicado = require("./Comunicado");
const Notificacao = require("./Notificacao");

class Escola {

    constructor() {
        this.observadores = [];
    }

    adicionarObservador(observador) {
         if (!observador || typeof observador.enviar !== "function") {
        throw new Error("O observador deve implementar o método enviar().");
    }

        this.observadores.push(observador);
    }

    removerObservador(observador) {
        const indice = this.observadores.indexOf(observador);

        if (indice !== -1) {
            this.observadores.splice(indice, 1);
        }

    }

    publicarComunicado(comunicado) {
        if (!comunicado) {
            throw new Error("O comunicado é obrigatório.")
        }
        
        this.notificarObservadores(comunicado);
    }

    notificarObservadores(comunicado) {
        for (const observador of this.observadores) {
            observador.enviar(comunicado);
        }

    }

}

module.exports = Escola;