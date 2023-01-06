const Games = require("../models/Games")

module.exports = {
    async store (req, res) {
        const { title, year, price } = req.body

        const game = await Games.create({title, year, price})

        res.send("Cadastrado com sucesso!").status(201)
    },

    async show (req, res){
        const games = await Games.findAll({raw: true})

        res.json(games).status(200)
    },

    async destroy (req, res){
        const id = req.params.id
        
        const game = await Games.destroy({where: { id: id}})

        res.json(game).status(200)
    }, 

    async update (req, res){
        const id = req.params.id

        const { title, year, price } = req.body

        const game = await Games.update({title, year, price}, {where: {id:id}})

        res.json(game).status(201)
    }
}   