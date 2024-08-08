import app from './index.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if(error) return console.log({'mensagem': 'Erro ao ligar o servidor' })
    console.log(`Servidor rodando http://localhost:${PORT}`)
})