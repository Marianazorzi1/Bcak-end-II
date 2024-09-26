const express = require('express');
const Filmes = require('./dados/dados.js');

const app = express()

app.get('/filmes', (req,res) =>{
    res.json(Filmes)
})