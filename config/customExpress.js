// Responsabilidade do customExpres.js = configuração do express, ou seja, qualquer mudança no Express deve ser feita aqui

// Importação das bibliotecas externas:
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

// Configura o app:
module.exports = () => {
    // Cria a variável app
    const app = express()
    
    // Manda o express usar a biblioteca body-parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // Configurar a variável app co consign
    consign()
        .include('controllers')
        .into(app)
    
    // Retorna a variável ap
    return app
}

