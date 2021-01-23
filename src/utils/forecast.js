const request = require('request');

const forecast = ({ lat, long}, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=49351df10298d77c8ff0bc78d4e86aeb&query=' + long + ',' + lat + '&units=f';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      const current = body.current;
      callback(undefined, `${current.weather_descriptions}. It is currently ${current.temperature} degrees out. ` +
        `It feels like ${current.feelslike} degrees out`);
    }
  });
}

module.exports = forecast;
