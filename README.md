# E-commerce API

  **Esta API simples é um exemplo de como construir um backend para um e-commerce utilizando boas práticas de desenvolvimento.
  A API fornece funcionalidades básicas para gerenciar produtos, pedidos, usuários e controle de acesso**.

## Tecnologias
   - **Linguagem**: JavaScript(Node.JS)
   - **Framework**: Express.js
   - **Banco de dados**: MySql

## Instalação e Execução

 ### Clone o repositório:
 
  **git clone https://github.com/NelsonMuquissi/Api-Rest-Ecommerce.git**

### Instale as dependências:

  **npm install**

### Configure o banco de dados

### Inicie o servidor:

**npm start**

  - A API estará disponível em http://localhost:3000.

## Endpoints

### Produtos

  - GET /produto: Lista todos os produtos.
  - GET /produto/:id: Busca um produto específico pelo ID.
  - POST /produto: Cria um novo produto.
  - PUT /produto/:id: Atualiza um produto específico pelo ID.
  - DELETE /produto/:id: Exclui um produto específico pelo ID.

### Usuários

POST /usuario: Cria um novo usuário.

## Boas práticas implementadas

  1. **Arquitetura de camadas:** A API utiliza uma arquitetura de camadas para separar as responsabilidades em diferentes módulos.
  2. **Testes automatizados:** A API inclui testes unitários para garantir a qualidade do código.
  3. **Tratamento de erros:** A API implementa mecanismos para tratar erros e fornecer respostas informativas.
  4. **Validação de dados:** A API valida os dados de entrada para garantir a integridade dos dados.
  5. **Segurança:** A API implementa medidas de segurança básicas, como autenticação e autorização.

### Contribuições

Contribuições são bem-vindas!
