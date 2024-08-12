import UsuarioRepository from "../repositories/UsuarioRepository.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

class UsuarioController{
    async store(req, res){
        const usuario = req.body
        const verify_user = await UsuarioRepository.verify(req.body.email)
    
        if(verify_user == ''){
          const row = await UsuarioRepository.create(usuario);
          const response = {
            mensagem: "Usuario cadastrado com sucesso",
            UsuarioCriado: {
              id_usuario: req.body.id_usuario,
              nome: req.body.nome,
              email: req.body.email,
              Password: req.body.senha,
              request: {
                topo: "POST",
                descricao: "Insere um novo usuario",
                Url: "http://localhost:3000/usuario",
              },
            },
          };

          res.status(201).json(response);

        }else{
          return res.status(500).send({ mensagem: "Usuario ja foi cadastrado"});
        }
    }


    async login(req, res){
      const usuario = req.body
      const verify_user = await UsuarioRepository.verify(req.body.email)
      
      if(verify_user == ''){
        return res.status(401).send({mensagem: "Falha na autenticação"})
      }else{
        bcrypt.compare(req.body.senha, verify_user[0].senha, (erro, resposta) => {
          if(erro) return res.status(401).send({ mensagem: "Falha na autenticação" });
          if(resposta){ 
            const token = jwt.sign({
              id_usuario: resposta.id_usuario,
              email: resposta.email
            },
             process.env.jwt_key,
              { 
                expiresIn: '1h'
              }
          )
            return res.status(200).send({ mensagem: "Autenticado com sucesso", Token: token });
          }
          return res.status(401).send({ mensagem: "Falha na autenticação" });
        })
      }
    }
}

export default new UsuarioController()