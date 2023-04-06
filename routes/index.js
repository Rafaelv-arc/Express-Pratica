


const express = require('express');

// aqui fica as rotas para não poluir o app principal


//rotas (quando o servidor for acessado, para onde ele vai ?)
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Olá Mundo! 2023');
})

router.get('/contato', (req, res) => {
    res.send('Página para informações de contato');
})

router.get('/cadastro', (req, res) => {
    res.send('Página de cadastro da aplicação');
})


module.exports = router;