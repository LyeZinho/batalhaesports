const express = require('express');
const r6router = express.Router();
const path = require('path');

r6router.get('/rbw6/home', function(req, res){
    res.sendFile(path.join(__dirname, '/home.html'));
});



module.exports = r6router;