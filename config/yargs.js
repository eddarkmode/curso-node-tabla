const argv = require('yargs').option(
    'b', {
        alias: 'base',
        demandOption: true,
        describe: 'Numero base de la tabla de multiplicar',
        type: 'number'
    })
    .option('l', {
        alias: 'listar',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola',
        type: 'boolean'
    })
    .option('r', {
        alias: 'rango',
        demandOption: false,
        default: 10,
        describe: 'Rango limite de la tabla a multiplicar',
        type: 'number'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw 'Base debe ser un número.'
        }

        return true;
    })
    .argv;

module.exports = argv;