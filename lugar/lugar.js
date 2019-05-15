const axios = require('axios')

const getLugarLatLong = async(direccionArg) => {
    const encodeURL = encodeURI(direccionArg)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        timeout: 10000,
        headers: {
            "X-RapidAPI-Host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "63ecb432eemsha2a4f2c178dfac4p1fcab4jsn18f18b52e7c0"
        }
    })
    let respuesta = await instance.get();
        //.then(resp => console.log(resp.data.Results[0]))
        //.catch(err => console.log(err))

    if(respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccionArg}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;

    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}