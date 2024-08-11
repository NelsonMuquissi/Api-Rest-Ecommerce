import conexao, {consulta} from "../database/conexao.js"
import bcrypt from 'bcrypt'

class UsuarioRepository{
    verify(email){
      const newSql = "SELECT *from usuario WHERE email=?"
      return consulta(newSql, email, "Não foi possível encontrar")
    }

    create(usuario){
        bcrypt.hash(usuario.senha, 10, (errorCrypt, hash) => {
          if (errorCrypt) return { Erro: errorCrypt };

          usuario.senha = hash;
          const sql = "INSERT INTO usuario SET ?";
          return consulta(sql, usuario, "Não foi possível cadastrar o usuario");
        });        
    }

}

export default new UsuarioRepository()