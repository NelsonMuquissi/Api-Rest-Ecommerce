import conexao, {consulta} from "../database/conexao.js"

class ProdutoRepository{

    create(produto,imagem){
        const sql = "INSERT INTO produtos (nome, preco, imagem_produto) values (?,?,?)"
      
        return consulta(sql, [produto.nome,produto.preco,imagem], "Não foi possível cadastrar");
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