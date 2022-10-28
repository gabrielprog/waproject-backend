const axios = require("axios")

const api = axios.create({
    baseURL: 'https://ghibliapi.herokuapp.com/films'
  
});
module.exports = api