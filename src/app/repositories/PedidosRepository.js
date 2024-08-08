import conexao, {consulta} from "../database/conexao.js";

class PedidosRepository {
  create(pedido) {
    const sql = "INSERT INTO pedidos SET ?";
    return consulta(sql, pedido, "Não foi possível cadastrar");
  }

  findAll() {
    const sql = "SELECT *FROM pedidos";
    return consulta(sql, "pedidos não encontrao");
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
