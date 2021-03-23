const mysql = require('mysql')

// Configurações necessárias para conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

// Exporta a conexão para que outros módulos consigam se conectar ao nosso banco
module.exports = conexao