import express from 'express'
import router from './routes/routes.js'

// Iiniciando o espress
const app = express()

// Informando que vamos usar body JSON
app.use(express.json())

// Informando que vamos usar as rotas 
app.use(router)



//Tratamento da mensagem de erro
app.use((req, res, next) => {
  const erro = new Error("Página não encontrada");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});


export default app