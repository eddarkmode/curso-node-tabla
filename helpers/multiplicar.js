const fs = require('fs');
const colors = require('colors');
const crearArchivo = async ( base = 5, listar = false, rango = 10 ) => {

    
    let salida = '';
    let consola = '';

    for (let idx = 1; idx <= rango; idx++) {
        consola += (`${ base } ${ 'x'.green } ${ idx } ${ '='.green } ${ base * idx }\n`)
        salida += `${ base } x ${ idx } = ${ base * idx }\n`;
    }

    if ( listar ){
        console.log( '============='.green )
        console.log( '  Tabla del '.green, colors.blue( base ) )
        console.log( '============='.green )
        
        console.log( consola )
    }
    /*
        fs.writeFile( 'tabla-3.txt', salida, (err) =>{
            if ( err ) throw err;

            console.log("tabla-3.txt creada");
        } )
    */
    
    try{
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida.toString()); //para utilizar esta forma de escritura utilizar llamada asincrona
        
        if ( salida )
            return ( `tabla-${ base }.txt creado` );
    }
    catch(err){

        throw err;
    }
}

module.exports = { 
    crearArchivo: crearArchivo
};