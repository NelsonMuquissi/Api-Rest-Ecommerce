import { Router } from "express";
import ProdutoController from "../app/controllers/ProdutoController.js";
import app from '../index.js'
import PedidoController from "../app/controllers/PedidoController.js";

const router = Router()

//Rotas do Produtos
router.get('/produto', ProdutoController.index)
router.get("/produto/:id", ProdutoController.show);
router.post("/produto", ProdutoController.store);
router.put("/produto/:id", ProdutoController.updade);
router.delete("/produto/:id", ProdutoController.delete);


// Rotas do pedidos
router.get("/pedido", PedidoController.index);
router.get("/pedido/:id", PedidoController.show);
router.post("/pedido", PedidoController.store);
router.put("/pedido/:id", PedidoController.updade);
router.delete("/pedido/:id", PedidoController.delete);


export default router