// server.js
const express = require('express');
const http = require('http');
const app = express();
// Run the app by serving the static files
// in the dist directory
//app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
http.createServer(onRequest).listen(process.env.PORT || 6000)