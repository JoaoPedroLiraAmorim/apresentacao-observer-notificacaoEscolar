class Comunicado {

    constructor(titulo, mensagem) {

        if (!titulo) {
            throw new Error("O título do comunicado é obrigatório.");
        }

        if (!mensagem) {
            throw new Error("A mensagem do comunicado é obrigatória.");
        }

        this.titulo = titulo;
        this.mensagem = mensagem;
        
    }
}

module.exports = Comunicado;