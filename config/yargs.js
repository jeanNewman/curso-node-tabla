const argv = require("yargs")
  .options("b", {
    alias: "base",
    demandOption: true,
    type: "number",
    describe: "El numero de la base",
  })
  .options("l", {
    alias: "listar",
    type: "boolean",
    describe: "Listar la tabla multiplicar",
  })
  .options("h", {
    alias: "hasta",
    demandOption: true,
    type: "number",
    describe: "hasta donde dbebe iterar la tabla multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.h)) {
      throw new Error("La base debe el hasta debe ser un numero");
    }
    if (typeof argv.l !== "undefined") {
      if (typeof argv.l !== "boolean") {
        throw new Error("La opción de listar debe ser booleano");
      }
    }
    return true;
  }).argv;

module.exports = argv;
