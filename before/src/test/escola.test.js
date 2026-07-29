const Escola = require("../Escola");


describe("Escola", () => {
    let escola;

    beforeEach(() => {
        escola = new Escola();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("Testes de cenários inválidos", () => {

        test("deve lançar um erro quando o título não for informado", () => {
            expect(() => {
                escola.publicarComunicado(
                    "",
                    "A reunião acontecerá segunda-feira.",
                    ["EMAIL"]
                );

            }).toThrow(
                "O título do comunicado é obrigatório."
            );
        });

        test("deve lançar um erro quando o comunicado não for informado", () => {
            expect(() => {
                escola.publicarComunicado(
                    "Reunião de Pais",
                    "",
                    ["EMAIL"]
                );

            }).toThrow(
                "A mensagem do comunicado é obrigatória."
            );
        });

        test("deve lançar um erro quando nenhum tipo de notificação for informado", () => {
            expect(() => {
                escola.publicarComunicado(
                    "Reunião de Pais",
                    "A reunião acontecerá segunda-feira.",
                    []
                );

            }).toThrow(
                "É obrigatório informar ao menos um tipo de notificação."
            );
        });

        test("deve lançar um erro quando o tipo de notificação for inválido", () => {
            expect(() => {
                escola.publicarComunicado(
                    "Reunião de Pais",
                    "A reunião acontecerá segunda-feira.",
                    ["SMS"]
                );

            }).toThrow(
                "Tipo de notificação inválido."
            );
        });
    });
    

    describe("Testes cenários válidos", () => {

        test("deve enviar um comunicado para todos os tipos de notificação", () => {
            const emailSpy = jest.spyOn(escola, "enviarEmail").mockImplementation(() => {});
            const whatsappSpy = jest.spyOn(escola, "enviarWhatsApp").mockImplementation(() => {});
            const portalSpy = jest.spyOn(escola, "publicarPortal").mockImplementation(() => {});

            escola.publicarComunicado(
                "Reunião de Pais",
                "A reunião acontecerá segunda-feira.",
                ["EMAIL", "WHATSAPP", "PORTAL"]
            );

            expect(emailSpy).toHaveBeenCalledTimes(1);
            expect(whatsappSpy).toHaveBeenCalledTimes(1);
            expect(portalSpy).toHaveBeenCalledTimes(1);
        });


        test("deve enviar um comunicado via Email", () => {
            const spy = jest.spyOn(escola, "enviarEmail").mockImplementation(() => {});

            escola.publicarComunicado(
                "Reunião de Pais",
                "A reunião acontecerá segunda-feira.",
                ["EMAIL"]
            );

            expect(spy).toHaveBeenCalledTimes(1);
        });

        test("deve enviar um comunicado via WhatsApp", () => {
            const spy = jest.spyOn(escola, "enviarWhatsApp").mockImplementation(() => {});

            escola.publicarComunicado(
                "Reunião de Pais",
                "A reunião acontecerá segunda-feira.",
                ["WHATSAPP"]
            );

            expect(spy).toHaveBeenCalledTimes(1);
        });

        test("deve enviar um comunicado via Portal Escolar", () => {
            const spy = jest.spyOn(escola, "publicarPortal").mockImplementation(() => {});

            escola.publicarComunicado(
                "Reunião de Pais",
                "A reunião acontecerá segunda-feira.",
                ["PORTAL"]
            );

            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});