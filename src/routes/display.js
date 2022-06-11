const express = require('express')
const router = express.Router()

const { getWeatherForLocation } = require('../middleware/weatherapi')
// const { getWeatherForLocation } = require('../lib/weatherapi')

router.post('/', getWeatherForLocation, (req, res) => {
  const { data } = req.body

  // res.send(data.forecast.forecastday[0].day.condition)
  const { text, icon } = data.forecast.forecastday[0].day.condition
  res.render('display', { text, icon })
})

// router.post('/', async (req, res) => {
//   const { location } = req.body

//   const wData = await getWeatherForLocation(location)
  // res.send(wData)
  // const { text, icon } = data.forecast.forecastday[0].day.condition
  // res.render('display', { text, icon })
// })

module.exports = router
