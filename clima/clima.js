const axios = require('axios')

const units = 'metric'
const appi = '874f917291763fa320f606538c6c5270'


const getClima = async(lat,long) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${appi}&units=${units}`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}