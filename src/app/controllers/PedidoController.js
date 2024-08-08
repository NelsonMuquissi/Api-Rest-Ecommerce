class PedidoController {
  index(req, res) {
    res.status(200).send("Index");
  }

  save(req, res) {
    res.status(201).send("save");
  }

  updade(req, res) {
    res.status(200).send("update");
  }

  delete(req, res) {
    res.status(200).send("Delete");
  }
}

export default new PedidoController();
