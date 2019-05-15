const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Ciudad para obtener el clima. Ej: Estado, Pais',
            demand: true
        }
    })
    .help()
    .argv;

const getInfo = async (direccion) => {

    try{
    
    let coordenadas = await lugar.getLugarLatLong(direccion)
    let lat = coordenadas.lat
    let long = coordenadas.long

    let temperatura = await clima.getClima(lat, long);

    return `El clima de ${coordenadas.direccion} es de ${temperatura}º`;
    } catch(err){
        throw new Error(`No se pudo determinar el clima de ${direccion}`)
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)