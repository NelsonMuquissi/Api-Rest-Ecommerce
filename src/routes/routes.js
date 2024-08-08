import { Router } from "express";
import ProdutoController from "../app/controllers/ProdutoController.js";
import app from '../index.js'

const router = Router()

//Rotas do Produtos
router.get('/produto', ProdutoController.index)
router.get("/produto/:id", ProdutoController.show);
router.post("/produto", ProdutoController.store);
router.put("/produto/:id", ProdutoController.updade);
router.delete("/produto/:id", ProdutoController.delete);



export default router