const app = require('./app');
require('dotenv').config({path:'variaveis.env'})

// se no .env estiver porta diferente ira acessar portas aleatorias
app.listen(process.env.PORT || 7777, function(){
      console.log("rodando");
})