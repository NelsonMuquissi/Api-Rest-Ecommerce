import UsuarioRepository from "../repositories/UsuarioRepository.js"

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
}

export default new UsuarioController()