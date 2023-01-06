const express = require("express")

const routes = express.Router()

const GamesController = require("./controllers/GamesController")

routes.get("/games", GamesController.show)

routes.post("/game", GamesController.store)

routes.delete("/game/:id", GamesController.destroy)

routes.put("/game/:id", GamesController.update)

module.exports = routes