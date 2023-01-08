# API de Games

Projeto criando API REST com conexão ao banco de dados via sequelize, o front-end está utilizando o axios para consumir e fazer conexão com as API.   

## Back-end: 
arquitetura Api rest, sequelize, postgres, biblioteca cors.
## Front-end: 
Axios, bootstrap, JavaScript, Html.

## Endpoints
### GET /games
Esse endpoint é responsavel por retornar a listagem de todos os games cadastrados no banco de dados.
#### Parametros
Nenhum
#### Respostas
##### Status CODE 200
Caso essa resposta aconteça você vai receber a listagem de todos os games.
##### Exemplo de resposta: 
```
[
    {
        "id": 4,
        "title": "CSGO - Source ",
        "year": 2012,
        "price": 0,
        "createdAt": "\"2023-01-06T02:38:51.147Z\"",
        "updatedAt": "\"2023-01-08T00:18:11.958Z\""
    }
]
```
### POST /game
Esse endpoint é responsavel por cadastrar um game no banco de dados.
#### Parametros
##### Req.Body
title: Titulo do jogo  
year: Ano do jogo  
price: Preço do jogo  
#### Respostas
##### Status CODE 201
Caso essa resposta aconteça significa que o jogo foi cadastrado no banco de dados.
##### Exemplo de resposta: 
```
res.send("Cadastrado com sucesso!")

```
### DELETE /game/:id
Esse endpoint é responsavel por deletar um game cadastrados no banco de dados.
#### Parametros
id: id correspondente ao game cadastrado no banco de dados. Deve ser passado como parametro.
#### Respostas
##### Status CODE 200
Caso essa resposta aconteça significa que o jogo foi excluido do banco de dados.

### PUT /game/:id
Esse endpoint é responsavel por editar um games que está cadastrado no banco de dados.
#### Parametros
##### Req.params
id: id correspondente ao game cadastrado no banco de dados. Deve ser passado como parametro.
##### Req.Body
title: Titulo do jogo  
year: Ano do jogo  
price: Preço do jogo  
#### Respostas
##### Status CODE 201
Caso essa resposta aconteça significa que o game foi atualizado com sucesso.






