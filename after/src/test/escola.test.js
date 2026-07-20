const Escola = require("../Escola");
const Comunicado = require("../Comunicado");
const WhatsApp = require("../WhatsApp");
const Portal = require("../Portal");
const Email = require("../Email");



describe("Comunicado", () => {

    test("deve lançar um erro quando o título não for informado", () => {
        const escola = new Escola();

        expect(() => {
            const comunicado = new Comunicado(
                "",
                "A reunião acontecerá na segunda-feira às 16h."
            );

        }).toThrow(
            "O título do comunicado é obrigatório."
        );
    });

    test("deve lançar um erro quando a mensagem não for informada", () => {
        const escola = new Escola();

        expect(() => {
            const comunicado = new Comunicado(
                "Reunião de Pais",
                ""
            );

        }).toThrow(
            "A mensagem do comunicado é obrigatória."
        );
    });
});


describe("Escola", () => {

    test("deve lançar um erro quando o observador for inválido", () => {
        
        const escola = new Escola();

        expect(() => {
            escola.adicionarObservador({});
        }).toThrow(
            "O observador deve implementar o método enviar()."
        );
    });

    test("deve notificar os observadores quando um comunicado for publicado", () => {

        const escola = new Escola();

        const comunicado = new Comunicado(
            "Reunião de Pais",
            "A reunião acontecerá na segunda-feira às 16h."
        );

        const email = new Email();

        const enviarSpy = jest
            .spyOn(email, "enviar")
            .mockImplementation(() => {});

        escola.adicionarObservador(email);

        escola.publicarComunicado(comunicado);

        expect(enviarSpy).toHaveBeenCalledWith(comunicado);

        enviarSpy.mockRestore();
    });

    test("deve remover um observador para que ele não seja mais notificado", () => {

        const escola = new Escola();

        const comunicado = new Comunicado(
            "Reunião de Pais",
            "A reunião acontecerá na segunda-feira às 16h."
        );

        const email = new Email();

        const enviarSpy = jest
            .spyOn(email, "enviar")
            .mockImplementation(() => {});

        escola.adicionarObservador(email);

        escola.removerObservador(email);

        escola.publicarComunicado(comunicado);

        expect(enviarSpy).not.toHaveBeenCalled();

        enviarSpy.mockRestore();
    });
});


describe("Email", () => {

    test("deve enviar um comunicado via Email", () => {

        const escola = new Escola();

        const comunicado = new Comunicado(
            "Reunião de Pais",
            "A reunião acontecerá na segunda-feira às 16h."
        );

        const email = new Email();

        const enviarSpy = jest.spyOn(email, "enviar");

        escola.adicionarObservador(email);

        escola.publicarComunicado(comunicado);

        expect(enviarSpy).toHaveBeenCalledWith(comunicado);

        enviarSpy.mockRestore();
    });
});


describe("WhatsApp", () => {

    test("deve enviar um comunicado via WhatsApp", () => {

        const escola = new Escola();

        const comunicado = new Comunicado(
            "Reunião de Pais",
            "A reunião acontecerá na segunda-feira às 16h."
        );

        const whatsapp = new WhatsApp();

        const enviarSpy = jest.spyOn(whatsapp, "enviar");

        escola.adicionarObservador(whatsapp);

        escola.publicarComunicado(comunicado);

        expect(enviarSpy).toHaveBeenCalledWith(comunicado);

        enviarSpy.mockRestore();
    });
});


describe("Portal", () => {

    test("deve enviar um comunicado via Portal Escolar", () => {

        const escola = new Escola();

        const comunicado = new Comunicado(
            "Reunião de Pais",
            "A reunião acontecerá na segunda-feira às 16h."
        );

        const portal = new Portal();

        const enviarSpy = jest.spyOn(portal, "enviar");

        escola.adicionarObservador(portal);

        escola.publicarComunicado(comunicado);

        expect(enviarSpy).toHaveBeenCalledWith(comunicado);

        enviarSpy.mockRestore();
    });
});