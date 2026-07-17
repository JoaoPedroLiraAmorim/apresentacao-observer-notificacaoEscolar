const Comunicado = require("./Comunicado")

class Escola {

    constructor() {
        this.observadores = [];
    }

    adicionarObservador(observador) {
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