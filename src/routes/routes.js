import { Router } from "express";
import ProdutoController from "../app/controllers/ProdutoController.js";
import app from '../index.js'
import PedidoController from "../app/controllers/PedidoController.js";
import multer from "multer";
import ControllerUsuario from "../app/controllers/UsuarioController.js";


const filefilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./uploads/")
    },

    filename: function(req,file,cb){
        cb(
          null,
          new Date().getHours() +
            "_" +
            new Date().getSeconds() +
            "_" +
            new Date().getDay() +
            "_" +
            new Date().getMonth() +
            "_" +
            new Date().getFullYear() +
            file.originalname
        );
    }
})

const upload = multer({ storage: storage, limits:{ fileSize: 1024 * 1024 * 5}, fileFilter:filefilter }); 

const router = Router()

//Rotas dos Produtos
router.get('/produto', ProdutoController.index)
router.get("/produto/:id", ProdutoController.show);
router.post("/produto", upload.single('imagem_produto'), ProdutoController.store);
router.put("/produto/:id", ProdutoController.updade);
router.delete("/produto/:id", ProdutoController.delete);


// Rotas dos pedidos
router.get("/pedido", PedidoController.index);
router.get("/pedido/:id", PedidoController.show);
router.post("/pedido", PedidoController.store);
router.put("/pedido/:id", PedidoController.updade);
router.delete("/pedido/:id", PedidoController.delete);


// Rotas do usuario

router.post('/usuario', ControllerUsuario.store)


export default router