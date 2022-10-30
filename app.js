const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
// const [ , , arg3 = 'base=5'] = process.argv;
console.clear();

//console.log( process.argv );
//console.log( argv );
//console.log( argv.b );
// imprimir la tabla del 5
//const base = 6;
//let base = argv.b;

crearArchivo( argv.b, argv.l, argv.r )
.then(nombreArchivo => console.log(nombreArchivo.rainbow))
.catch(err => console.log(err));