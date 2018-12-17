const axios = require('axios');

const getClima = async(lat,lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f9db8ea28259192901cf79695227ef51`);

    // console.log(resp.data.main.temp);

    return resp.data.main.temp
}

module.exports = {
    getClima
}