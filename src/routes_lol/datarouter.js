const express = require('express');
const lolrouterdat = express.Router();
const path = require('path');



//Entrega de recursos graficos
lolrouterdat.get('/lol/img/:imgsrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imgsrc));
});

//Entrega de scrips
lolrouterdat.get('/lol/home/script', function(req, res){
    res.sendFile(path.join(__dirname, '/home/script.js'));
});


//Rotas para receber requests API
module.exports = lolrouterdat;