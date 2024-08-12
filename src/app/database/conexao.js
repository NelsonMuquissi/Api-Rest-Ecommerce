import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()



const conexao = mysql.createConnection({
  user: process.env.user,
  host: process.env.host,
  password: process.env.password,
  // "port": "",
  database: process.env.database
});

conexao.connect((error) => {
  if (error) return console.log("Falha ao conectar-se");
  console.log("Conectado");
});

/**
 * Executa um código SQL com ou sem valor
 * @param {string} sql instrucao SQL a ser executada
 * @param {string=id | [id produto imagem]} valores a serem passados pela SQL
 * @param {*} mensagwmresject mensagem a ser exibida
 * @returns Objecto da promisse
 */

export const consulta = (sql, valores = '', mensagemresject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql,valores, (erro, resposta) => {

            if(erro) return reject(mensagemresject)
            const row = JSON.parse(JSON.stringify(resposta))
            return resolve(row)
        })
    })
}


export default conexao