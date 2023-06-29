const fs = require('fs');
const colors = require('colors');
const crearArchivo = ({base,l,h} = yargv) => {
    try {
        //console.log(yargv)
        let salida, consola = '';
        for (let i = 1; i <= h; i++) {
            salida += `${base} ${colors.magenta('x')} ${i} ${colors.magenta('=')} ${i * base}\n`;
            consola += `${base} x ${i} = ${i * base}\n`;
        }
        
        if(l){ 
            console.log("=====================".green);
            console.log('   Tabla del: '.white+ colors.blue(base));
            console.log("=====================".green);
            console.log(salida);
        }
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt creada`);
        // });
        
         fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        return {
                tipo:1,
                nombreArchivo:`tabla-${base}.txt`,
                msg:`ha sido creada`
               }
    } catch (error) {
        return {
                tipo:2,
                nombreArchivo:null,
                msg:`tabla-${base}.txt no fue creada: Err- ${error.message}`
                };
    }
   
}

module.exports =  {
     showFile:crearArchivo ,
}