const axios = require('axios').default
const { APIKey } = require('../../options')

const getWeatherForLocation = (req, res, next) => {
  const { location } = req.body
  const apiURL = `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${encodeURIComponent(location)}`

  axios.get(apiURL).then(({ data }) => {
    req.body.data = data
    next()
  })
  .catch( error => {
    throw error
  })
} 

module.exports = {
  getWeatherForLocation
}