//ari helped me create this file to collect the socket io pieces
//and export them for the server and routes js files

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


module.exports = {app, http, io, express}
