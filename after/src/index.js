const Comunicado = require("./Comunicado");
const Escola = require("./Escola");
const WhatsApp = require("./WhatsApp");
const Portal = require("./Portal");
const Email = require("./Email");

const comunicado = new Comunicado(
    "Reunião de Pais",
    "A reunião acontecerá na segunda-feira às 16h."
);

const escola = new Escola();

escola.adicionarObservador(new Email());
escola.adicionarObservador(new WhatsApp());
escola.adicionarObservador(new Portal());

escola.publicarComunicado(comunicado);