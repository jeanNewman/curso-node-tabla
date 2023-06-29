
const {showFile} = require('./helpers/multiplicar');
const yargv = require('./config/yargs');

require('colors');


// console.log(process.argv);
//console.log(yargv);
// console.log('base:yargs',argv.base)

// const base = null;
const response = async() =>{

    const {tipo,nombreArchivo,msg} = await showFile(yargv);
    if(tipo === 1){
        console.log(nombreArchivo.rainbow +" "+ msg)
    }else{
        console.log(msg)
    }
}

response();

