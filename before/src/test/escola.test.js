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

        test("Deve lançar um erro quando o título não for informado", () => {
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

        test("Deve lançar um erro quando o comunicado não for informado", () => {
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

        test("Deve lançar um erro quando nenhum tipo de notificação for informado", () => {
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

        test("Deve lançar um erro quando o tipo de notificação for inválido", () => {
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
            const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

            escola.publicarComunicado(
                "Reunião de Pais",
                "A reunião acontecerá segunda-feira.",
                ["EMAIL", "WHATSAPP", "PORTAL"]
            );

            expect(consoleSpy).toHaveBeenCalledTimes(5);

            expect(consoleSpy).toHaveBeenNthCalledWith(
                1,
                "Título: Reunião de Pais"
            );

            expect(consoleSpy).toHaveBeenNthCalledWith(
                2,
                "Comunicado: A reunião acontecerá segunda-feira."
            );

            expect(consoleSpy).toHaveBeenNthCalledWith(
                3,
                "\nMensagem enviada via Email aos responsáveis."
            );

            expect(consoleSpy).toHaveBeenNthCalledWith(
                4,
                "\nMensagem enviada via WhatsApp aos responsáveis."
            );

            expect(consoleSpy).toHaveBeenNthCalledWith(
                5,
                "\nMensagem enviada via Portal Escolar aos responsáveis."
            );
        })


        test("Deve enviar um comunicado via Email", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

            escola.publicarComunicado(
                "Reunião de Pais",
                "A reunião acontecerá segunda-feira.",
                ["EMAIL"]
            );

            expect(consoleSpy).toHaveBeenCalledWith(
                "\nMensagem enviada via Email aos responsáveis."
            );
        });

        test("Deve enviar um comunicado via WhatsApp", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

            escola.publicarComunicado(
                "Reunião de Pais",
                "A reunião acontecerá segunda-feira.",
                ["WHATSAPP"]
            );

            expect(consoleSpy).toHaveBeenCalledWith(
                "\nMensagem enviada via WhatsApp aos responsáveis."
            );
        });

        test("Deve enviar um comunicado via Portal Escolar", () => {
            const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

            escola.publicarComunicado(
                "Reunião de Pais",
                "A reunião acontecerá segunda-feira.",
                ["PORTAL"]
            );

            expect(consoleSpy).toHaveBeenCalledWith(
                "\nMensagem enviada via Portal Escolar aos responsáveis."
            );
        });
    });
});