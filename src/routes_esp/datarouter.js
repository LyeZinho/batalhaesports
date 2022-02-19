const express = require('express');
const esprouterdat = express.Router();
const path = require('path');


// Rotas para entrega de dados
esprouterdat.get('/img/:imgsrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imgsrc));
});


// Rotas para receber requests API
module.exports = esprouterdat;