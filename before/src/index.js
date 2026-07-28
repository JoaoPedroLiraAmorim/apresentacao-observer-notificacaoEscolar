const Escola = require("./Escola");

const escola = new Escola();

escola.publicarComunicado(
    "Reunião de Pais",
    "A reunião irá acontecer na segunda-feira dia 13h às 16h.",
    ["EMAIL", "PORTAL", "WHATSAPP"]
);