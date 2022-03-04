const express = require('express');
const lolrouter = express.Router();
const path = require('path');


//Rotas de entrega HTML

lolrouter.get('/lol', function(req, res){
    res.sendFile(path.join(__dirname, '/home.html'));
});

lolrouter.get('/lol/lista', function(req, res){
    res.sendFile(path.join(__dirname, '/champlist.html'));
});

lolrouter.get('/lol/datas', function(req, res){
    res.sendFile(path.join(__dirname, '/champdate.html'));
});

lolrouter.get('/lol/top', function(req, res){
    res.sendFile(path.join(__dirname, '/top.html'));
});


//Rotas para receber requests API



module.exports = lolrouter;