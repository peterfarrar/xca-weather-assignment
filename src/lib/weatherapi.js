const axios = require('axios').default
const { APIKey } = require('../../options')

const getWeatherForLocation = async (location) => {
  const apiURL = `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${encodeURIComponent(location)}`
  const weatherData = await axios.get(apiURL)

  return weatherData.data
} 

module.exports = {
  getWeatherForLocation
}