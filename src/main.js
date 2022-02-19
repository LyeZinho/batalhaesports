const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

//Rota para o sub dominio esp [Sub dominio principal]

//Paginas
const esprouter = require('./routes_esp/router.js')
app.use(esprouter);
//Dados 
const esprouterdat = require('./routes_esp/datarouter.js')
app.use(esprouterdat);


//Rota para o sub dominio rbw6 [Sub dominio raimbowsix]

//Paginas
const r6router = require('./routes_rb6/router.js');
app.use(r6router);



//Rota para o sub dominio lol [Sub dominio league of legends]

//Paginas
const lolrouter = require('./routes_lol/router.js')
app.use(lolrouter);


// Rotas para entrega de recursos




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})