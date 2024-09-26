const express = require('express');
const colecaoUf = require('./dados/dados.js');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf.colecaoUf);
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagenErro = '';
    let uf;
    if(!(isNaN(idUF))) {
        uf = colecaoUf.colecaoUf.find(u => u.id === idUF);
        if (!uf){
            mensagenErro = 'UF não encontrada'
        }
    }
    else{
        mensagenErro='Requisição inválida'
    }
    if(uf){
        res.json(uf);
    } else{
        res.status(404).json({"erro": mensagenErro})
    }
   
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});
