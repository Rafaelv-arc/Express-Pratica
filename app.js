
const express = require('express');
const router = require('./routes/index');

// configurações básicas de aplicativo
const app = express();
app.use('/', router); // passamos apenas uma rota, pois ja foi criado

module.exports = app;



// RESUMINDO ROUTES >>>>>>> APP >>>>>>>> SERVER
