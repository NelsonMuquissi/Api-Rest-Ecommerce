import app from './index.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, (Error) => {
    if(Error) return console.log({'mensagem': 'Erro ao ligar o servidor' })
    console.log(`Servidor rodando http://localhost:${PORT}`)
})