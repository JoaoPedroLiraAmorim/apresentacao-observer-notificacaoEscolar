const Escola = require("../Escola");


// ===== Testes de cenários inválidos -----


describe("Escola", () => {

    test("Deve lançar um erro quando o título não for informado", () => {
        const escola = new Escola();

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
        const escola = new Escola();

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
        const escola = new Escola();

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
        const escola = new Escola();

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


// ----- Testes de cenários válidos -----


    test("Deve enviar um comunicado via EMAIL", () => {
        const escola = new Escola();

        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        escola.publicarComunicado(
            "Reunião de Pais",
            "A reunião acontecerá segunda-feira.",
            ["EMAIL"]
        );

        expect(consoleSpy).toHaveBeenCalledWith(
            "Mensagem enviada via Email aos responsáveis."
        );

        consoleSpy.mockRestore();
    });

    test("Deve enviar um comunicado via WhatsApp", () => {
        const escola = new Escola();

        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        escola.publicarComunicado(
            "Reunião de Pais",
            "A reunião acontecerá segunda-feira.",
            ["WHATSAPP"]
        );

        expect(consoleSpy).toHaveBeenCalledWith(
            "Mensagem enviada via WhatsApp aos responsáveis."
        );

        consoleSpy.mockRestore();
    });

    test("Deve enviar um comunicado via Portal Escolar", () => {
        const escola = new Escola();

        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        escola.publicarComunicado(
            "Reunião de Pais",
            "A reunião acontecerá segunda-feira.",
            ["PORTAL"]
        );

        expect(consoleSpy).toHaveBeenCalledWith(
            "Mensagem enviada via Portal Escolar aos responsáveis."
        );

        consoleSpy.mockRestore();
    });
});