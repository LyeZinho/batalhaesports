const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

//Rota para o sub dominio esp [Sub dominio principal]
const esprouter = require('./routes_esp/router.js')
app.use(esprouter);



//Rota para o sub dominio rbw6
const r6router = require('./routes_rb6/router.js');
app.use(r6router);

//Rota para o sub dominio lol
const lolrouter = require('./routes_lol/router.js')
app.use(lolrouter);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})