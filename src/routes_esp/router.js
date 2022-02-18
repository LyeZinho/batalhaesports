const express = require('express');
const esprouter = express.Router();
const path = require('path');



// Rotas par entrega HTML

esprouter.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/home.html'));
});


// Rotas para receber requests API

module.exports = esprouter;