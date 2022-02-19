const express = require('express');
const esprouterdat = express.Router();
const path = require('path');


// Rotas para entrega de dados
esprouterdat.get('/img/splash_braum', function(req, res){
    res.sendFile(path.join(__dirname, '/img/braum.svg'));
});

esprouterdat.get('/img/logo_batesp_svg', function(req, res){
    res.sendFile(path.join(__dirname, '/img/batalhaesports.png'));
});

esprouterdat.get('/img/logo_batesp_png', function(req, res){
    res.sendFile(path.join(__dirname, '/img/batalhaesports.svg'));
});


// Rotas para receber requests API
module.exports = esprouterdat;