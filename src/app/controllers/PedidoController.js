class PedidoController {
  async index(req, res) {
    const row = await PedidosRepository.findAll();

    const response = {
      quantidade: row.length,
      produtos: row.map((pedid) => {
        return {
          id_pedido: pedid.id_pedido,
          id_produto: pedid.id_produto,
          quantidade: pedid.quantidade,
          request: {
            tipo: "GET",
            descricao: "Retorna os detalhes de cada pedido",
            url: "http://localhost:3000/pedido/" + prod.id_produto,
          },
        };
      }),
    };

    res.json(response);
  }

  async show(req, res) {
    const id = req.params.id;
    const row = await PedidosRepository.findById(id);

    if (row.length == 0) {
      return res.status(404).json({
        mensagem: "Não foi possível encontrar um pedido com este ID",
      });
    }
    const response = {
      pedido: {
        id_pedido: row[0].id_pedido,
        id_produto: row[0].id_produto,
        quantidade: row[0].quantidade,
        request: {
          tipo: "GET",
          descricao: "Retorna um pedido",
          url: "http://localhost:3000/pedido/",
        },
      },
    };

    res.json(response);
  }

  async store(req, res) {
    const pedido = req.body;
    const row = await PedidoRepository.create(pedido);

    const response = {
      mensagem: "Pedido solicitado com sucesso",
      PedidoCriado: {
        id_pedido: req.body.id_pedido,
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade,
        request: {
          tipo: "POST",
          descricao: "Inserir um pedido",
          url: "http://localhost:3000/pedido",
        },
      },
    };
    res.json(response);
  }

  async updade(req, res) {
    const id = req.params.id;
    const produto = req.body;
    const row = await PedidosRepository.update(pedido, id);

    if (row.length == 0) {
      return res.status(404).json({
        mensagem: "Não foi possível encontrar um pedido com este ID",
      });
    }

    const response = {
      mensagem: "Pedido atualizado com sucesso",
      PedidoAtualizado: {
        id_pedido: req.body.id_pedido,
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade,
        request: {
          tipo: "GET",
          descricao: "Detalhes do Pedido",
          url: "http://localhost:3000/pedido/" + req.body.id_pedido,
        },
      },
    };
    res.json(response);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await PedidosRepository.delete(id);

    const response = {
      mensagem: "Pedido removido com sucesso",
      request: {
        tipo: "POST",
        descricao: "Insere um Pedido",
        url: "http://localhost:3000/pedido/",
        body: {
          id_produto: "Number",
          quantidade: "Number",
        },
      },
    };
    res.status(202).json(response);
  }
}

export default new PedidoController();
