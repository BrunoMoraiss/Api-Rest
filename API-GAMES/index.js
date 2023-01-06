const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const routes = require("./routes")
const connection = require("./database/index")
const Games = require("./models/Games")

connection.authenticate().then(()=>{
    console.log("Servidor Conectado")
}).catch((error) => {
    console.log(error)
})

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(routes)

app.listen(8080, console.log("Servidor Iniciado!"))