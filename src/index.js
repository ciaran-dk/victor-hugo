// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

var netatmo = require('./netatmo');

var auth = {
  "client_id": "",
  "client_secret": "",
  "username": "",
  "password": "",
};

var api = new netatmo(auth);
