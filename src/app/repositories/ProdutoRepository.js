import conexao, {consulta} from "../database/conexao.js"

class ProdutoRepository{

    create(produto){
        const sql = "INSERT INTO produtos SET ?"
        return consulta(sql, produto, "Não foi possível cadastrar");
    }

    findAll(){
        const sql = "SELECT *FROM produtos"
        return consulta(sql,"Produto não encontrao")
    }

    findById(id){
        const sql = "SELECT *FROM produtos WHERE id_produto = ?"
        return consulta(sql, id, "Não foi possivel localizar o produto");
    }

    update(produto, id){
        const sql = "UPDATE produtos SET ? WHERE id_produto = ?"
        return consulta(sql, [produto, id], "Não foi possível atualizar");
    }

    delete(id){
        const sql = "DELETE FROM produtos WHERE id_produto = ?"
        return consulta(sql,id, "Não foi possível eliminar")
    }

}

export default new ProdutoRepository()