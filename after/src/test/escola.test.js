const Escola = require("../Escola");
const Comunicado = require("../Comunicado");
const WhatsApp = require("../WhatsApp");
const Portal = require("../Portal");
const Email = require("../Email");



describe("Comunicado", () => {

    test("deve lançar um erro quando o título não for informado", () => {

        expect(() => {
            new Comunicado(
                "",
                "A reunião acontecerá na segunda-feira às 16h."
            );

        }).toThrow(
            "O título do comunicado é obrigatório."
        );
    });

    test("deve lançar um erro quando a mensagem não for informada", () => {

        expect(() => {
            new Comunicado(
                "Reunião de Pais",
                ""
            );

        }).toThrow(
            "A mensagem do comunicado é obrigatória."
        );
    });
});


describe("Escola", () => {

    let escola;
    let comunicado;

    beforeEach(() => {

        escola = new Escola();

        comunicado = new Comunicado(
            "Reunião de Pais",
            "A reunião acontecerá na segunda-feira às 16h."
        );
    });

    test("deve lançar um erro quando o observador for inválido", () => {

        expect(() => {
            escola.adicionarObservador({});
        }).toThrow(
            "O observador deve implementar o método enviar()."
        );
    });

    test("deve notificar os observadores quando um comunicado for publicado", () => {

        const email = {
            enviar: jest.fn()
        };

        const whatsapp = {
            enviar: jest.fn()
        };

        const portal = {
            enviar: jest.fn()
        };

        escola.adicionarObservador(email);
        escola.adicionarObservador(whatsapp);
        escola.adicionarObservador(portal);

        escola.publicarComunicado(comunicado);

        expect(email.enviar).toHaveBeenCalledWith(comunicado);
        expect(whatsapp.enviar).toHaveBeenCalledWith(comunicado);
        expect(portal.enviar).toHaveBeenCalledWith(comunicado);
    });

    test("deve remover um observador para que ele não seja mais notificado", () => {

         const observador = {
            enviar: jest.fn()
        }

        escola.adicionarObservador(observador);

        escola.removerObservador(observador);

        escola.publicarComunicado(comunicado);

        expect(observador.enviar).not.toHaveBeenCalled();
    }); 
}); 


describe("Email", () => {

    test("deve enviar um comunicado via Email", () => {

        const email = new Email();

        const comunicado = new Comunicado(
            "Reunião de Pais",
            "A reunião acontecerá na segunda-feira às 16h."
        );

        const spy = jest
            .spyOn(console, "log")
            .mockImplementation(() => {});

        email.enviar(comunicado);

        expect(spy).toHaveBeenCalledTimes(3);

        expect(spy).toHaveBeenNthCalledWith(
            1,
            "\n=== EMAIL ==="
        );

        expect(spy).toHaveBeenNthCalledWith(
            2,
            "Título: Reunião de Pais"
        );

        expect(spy).toHaveBeenNthCalledWith(
            3,
            "Mensagem: A reunião acontecerá na segunda-feira às 16h."
        );

        spy.mockRestore();
    });
});


describe("WhatsApp", () => {

    test("deve enviar um comunicado via WhatsApp", () => {

        const whatsapp = new WhatsApp();

        const comunicado = new Comunicado(
            "Reunião de Pais",
            "A reunião acontecerá na segunda-feira às 16h."
        );        

        const spy = jest
            .spyOn(console, "log")
            .mockImplementation(() => {});

        whatsapp.enviar(comunicado);

        expect(spy).toHaveBeenCalledTimes(3);

        expect(spy).toHaveBeenNthCalledWith(
            1,
            "\n=== WHATSAPP ==="
        );

        expect(spy).toHaveBeenNthCalledWith(
            2,
            "Título: Reunião de Pais"
        );

        expect(spy).toHaveBeenNthCalledWith(
            3,
            "Mensagem: A reunião acontecerá na segunda-feira às 16h."
        );

        spy.mockRestore();
    });
});


describe("Portal", () => {

    test("deve enviar um comunicado via Portal Escolar", () => {

        const portal = new Portal();

        const comunicado = new Comunicado(
            "Reunião de Pais",
            "A reunião acontecerá na segunda-feira às 16h."
        );

        const spy = jest
            .spyOn(console, "log")
            .mockImplementation(() => {});

        portal.enviar(comunicado);

        expect(spy).toHaveBeenCalledTimes(3);

        expect(spy).toHaveBeenNthCalledWith(
            1,
            "\n=== PORTAL ESCOLAR ==="
        );

        expect(spy).toHaveBeenNthCalledWith(
            2,
            "Título: Reunião de Pais"
        );

        expect(spy).toHaveBeenNthCalledWith(
            3,
            "Mensagem: A reunião acontecerá na segunda-feira às 16h."
        );

        spy.mockRestore();
    });
});