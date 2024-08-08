import ProdutoRepository from "../repositories/ProdutoRepository.js";

class ProdutoController {

  async index(req, res) {
    const row = await ProdutoRepository.findAll()
    res.json(row);
  }

  async show(req, res) {
    const id = req.params.id;
    const row = await ProdutoRepository.findById(id)
    res.json(row);
  }

  async store(req, res) {
    const produto = req.body
    const row = await ProdutoRepository.create(produto)
    res.json(row);
  }

  async updade(req, res) {
    const id = req.params.id;
    const produto = req.body;
    const row = await ProdutoRepository.update(produto, id);
    res.json(row);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await ProdutoRepository.delete(id)
    res.json(row);
  }
}

export default new ProdutoController()