// Responsabilidade do atendimentos.js = controlar as rotas existentes e o que deve ser feito quando acessar cada uma delas

module.exports = app => {
    // Envio de dados para o client:
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))

    // 
    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de atendimentos e está realizando um POST')
    })
}