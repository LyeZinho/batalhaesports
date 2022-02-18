const express = require('express');
const app = express()
const port = process.env.PORT || 3000;


const r6router = require('./routes_rb6/router.js');
app.use(r6router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})