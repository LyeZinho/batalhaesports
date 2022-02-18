const express = require('express');
const r6router = express.Router();
const path = require('path');



// Rotas par entrega HTML

r6router.get('/rbw6/home', function(req, res){
    res.sendFile(path.join(__dirname, '/home.html'));
});


// Rotas para receber requests API

module.exports = r6router;