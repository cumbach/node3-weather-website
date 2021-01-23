const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiY3VtYmFjaCIsImEiOiJja2s0cTV1MjUxbDZ5MnVuamc1dHllMHQ5In0.E9gbzxndjiCQAdIKCPMfyw&cachebuster=1611105397078&autocomplete=true&limit=1';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect');
    } else if (!body.features.length) {
      callback('Unable to find location');
    } else {
      const [latitude, longitude] = body.features[0].center;
      callback(undefined, {
        longitude,
        latitude,
        location: body.features[0].place_name,
      })
    }
  });
}

module.exports = geocode;
