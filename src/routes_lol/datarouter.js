const express = require('express');
const lolrouterdat = express.Router();
const path = require('path');



//Entrega de recursos graficos
lolrouterdat.get('/lol/img/:imagesrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imagesrc));
});

//Entrega de scripts
lolrouterdat.get('/lol/scripts/:scriptsrc', function(req, res){
    res.sendFile(path.join(__dirname, '/scripts/' + req.params.scriptsrc + '.js'));
});


//Rotas para receber requests API
module.exports = lolrouterdat;