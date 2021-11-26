# Beeleads API

# Sobre o projeto

O projeto foi criado perante um desafio proposto, sendo os seguintes requisitos:

- Criar uma API para um cadastro de usuário em NodeJS
- Campos Nome, email, telefone, data de nascimento, sexo
- Não precisa ter frontend(mas é um diferencial)
- Preferência Banco Mysql
- API precisa ser autenticada.
- Instruções de como executar.

## Como executar o projeto

 - ### clonar repositório
    https://github.com/rofbasso/api-beeleads.git
 
 - ### entrar na pasta do projeto e baixar os pacotes
    yarn

 - ### criar o banco de dados com as informações do ormconfig.json
  - ### o projeto foi criado com postgres mas o pacote do mysql está disponível no projeto basta alterar o type para mysql no ormconfig.json
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "beeleads",
    "password": "eupassei",
    "database": "api_beeleads",

 - ### após criar o banco executar as migrations
    yarn typeorm migration:run

 - ### executar o projeto
    yarn dev

## Testando a aplicação

    Você pode testar a aplicação utilizando uma API Client ou utilizar a documentação

 - ### Para acessar a documentação
    http://localhost:3333/api-docs/

 - ### Para testar as rotas, abra a rota desejada e clique no botão Try it out

 - ### Primeiro é necessário criar um usuário, utilizando a rota post de User
 - ### Após criar um usuário é preciso fazer a autenticação pela rota post de Session
 - ### Copie o token, clique no botão AUTHORIZE e cole o token no campo Value
 - ### As outras rotas de User serão liberadas para serem testadas
 - ### Nessas rotas é possível listar, alterar e excluir