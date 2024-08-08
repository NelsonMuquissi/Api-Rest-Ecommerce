import express from 'express'
import router from './routes/routes.js'

const app = express()

app.use(express.json())

app.use(router)



/**
 * Tratamento da mensagem de erro
 */
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