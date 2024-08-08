import ProdutoRepository from "../repositories/ProdutoRepository.js";

class ProdutoController {

  async index(req, res) {
    const row = await ProdutoRepository.findAll()

    const response = {
      quantidade: row.length,
      produtos: row.map((prod) => {
        return {
          id_produto: prod.id_produto,
          nome: prod.nome,
          preco: prod.preco,
          request: {
            tipo: "GET",
            descricao: "Retorna os detalhes de cada produto",
            url: "http://localhost:3000/produto/" + prod.id_produto,
          },
        };
      }),
    };

    res.json(response);
  }

  async show(req, res) {
    const id = req.params.id;
    const row = await ProdutoRepository.findById(id)
    
    if(row.length == 0){
      return res.status(404).json({
        mensagem: "Não foi possível encontrar um produto com este ID"
      })
    }
     const response = {
       produto:{ 
           id_produto: row[0].id_produto,
           nome: row[0].nome,
           preco: row[0].preco,
           request: {
             tipo: "GET",
             descricao: "Retorna um produto",
            url: "http://localhost:3000/produto/",
           }
       },
     };

     res.json(response);
  }

  async store(req, res) {
    const produto = req.body
    const row = await ProdutoRepository.create(produto)

    const response = {
      mensagem: "Produto Inserido com sucesso",
      ProdutoCriado: {
        id_produto: req.body.id_produto,
        nome: req.body.nome,
        preco: req.body.preco,
        request: {
          tipo: "POST",
          descricao: "Inserir um produto",
          url: "http://localhost:3000/produto",
        },
      },
    };
    res.json(response);
  }

  async updade(req, res) {
    const id = req.params.id;
    const produto = req.body;
    const row = await ProdutoRepository.update(produto, id);

     if (row.length == 0) {
       return res.status(404).json({
         mensagem: "Não foi possível encontrar um produto com este ID",
       });
     }

    const response = {
      mensagem: "Produto atualizado com sucesso",
      ProdutoAtualizado: {
        id_produto: req.body.id_produto,
        nome: req.body.nome,
        preco: req.body.preco,
        request: {
          tipo: "GET",
          descricao: "Detalhes do Produto",
          url: "http://localhost:3000/produto/" + prod.id_produto,
        },
      },
    };
    res.json(response);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await ProdutoRepository.delete(id)

    const response = {
      mensagem: "Produto removido com sucesso",
      request: {
        tipo: "POST",
        descricao: "Insere um Produto",
        url: "http://localhost:3000/produto/",
        body:{
          nome: "String",
          preco: "Number"
        }
      },
    };
    res.status(202).json(response);
  }
}

export default new ProdutoController()