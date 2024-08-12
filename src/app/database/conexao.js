import mysql from 'mysql2'



const conexao = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  // "port": "",
  database: "ecommerce"
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