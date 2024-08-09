import conexao, {consulta} from "../database/conexao.js";

class PedidosRepository {
  
  create(pedido) {
    const sql = "INSERT INTO pedidos SET ?";
    return consulta(sql, pedido, "Não foi possível cadastrar");
  }

  findAll() {

    const sql = `select pedidos.id_pedido
                    ,pedidos.quantidade
                    ,pedidos.id_produto
                    ,produtos.nome
                    ,produtos.preco
            	From pedidos
          	INNER JOIN produtos
          		on pedidos.id_produto = produtos.id_produto`;

    return consulta(sql, "pedidos não encontrados");
  }

  findById(id) {
    const sql = "SELECT *FROM pedidos WHERE id_pedido = ?";
    return consulta(sql, id, "Não foi possivel localizar o pedidos");
  }

  update(pedido, id) {
    const sql = "UPDATE pedidos SET ? WHERE id_pedido = ?";
    return consulta(sql, [pedido, id], "Não foi possível atualizar");
  }

  delete(id) {
    const sql = "DELETE FROM pedidos WHERE id_pedido = ?";
    return consulta(sql, id, "Não foi possível eliminar");
  }
}

export default new PedidosRepository();
