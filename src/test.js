var netatmo = require('./netatmo');

var auth = {
  "client_id": "",
  "client_secret": "",
  "username": "",
  "password": "",
};

var api = new netatmo(auth);

// EXAMPLE #1

// Get Stations Data
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/weatherstation/getstationsdata
api.getStationsData(function(err, devices) {
  console.log(devices);
});
