function createGame(){
    const titleInput = document.getElementById("title")
    const yearInput = document.getElementById("year")
    const priceInput = document.getElementById("price")

    const newGame = {
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value
    }

    axios.post("http://localhost:8080/game", newGame).then(response => {
        if(response.status == 200){
            alert("Game Cadastrado")
            location.reload()
        }
    }).catch((error) => {
        console.log(error)
    })
}

document.querySelector("#BtnCreateGame").addEventListener('click', createGame)

function deleteGame(itemList){
    const id = itemList.getAttribute("data-id")
    axios.delete("http://localhost:8080/game/" + id).then(()=>{
        alert("Game Deletado!")
        location.reload()
    }).catch((error) => {
        console.log(error)
    })
}

function editGame(listItem){
    const id = listItem.getAttribute("data-id")
    const title = listItem.getAttribute("data-title")
    const year = listItem.getAttribute("data-year")
    const price = listItem.getAttribute("data-price")

    document.getElementById("idEdit").value = id
    document.getElementById("titleEdit").value = title
    document.getElementById("yearEdit").value = year
    document.getElementById("priceEdit").value = price
}

function updateGame(){
    const titleEdit = document.getElementById("titleEdit")
    const yearEdit = document.getElementById("yearEdit")
    const priceEdit = document.getElementById("priceEdit")

    const updateGame = {
        title: titleEdit.value,
        year: yearEdit.value,
        price: priceEdit.value
    }

    const id = document.getElementById("idEdit").value

    axios.put("http://localhost:8080/game/" + id, updateGame).then(response => {
        if(response.status == 200){
            alert("Game Alterado!")
            location.reload()
        }
    }).catch((error) => {
        console.log(error)
    })
}

document.querySelector("#BtnEditGame").addEventListener('click', updateGame)

axios.get("http://localhost:8080/games").then(response => {
    const gamesList = document.querySelector("#gamesList")
    const games = response.data
    
    games.forEach(game => {
        const item = document.createElement("li")

        item.setAttribute("data-id", game.id)
        item.setAttribute("data-title", game.title)
        item.setAttribute("data-year", game.year)
        item.setAttribute("data-price", game.price)

        item.innerText = `${game.id} - ${game.title} - $${game.price} `

        const btnDelete = document.createElement("button")
        btnDelete.innerText = "Deletar"
        btnDelete.classList.add("btn", "btn-danger")
        btnDelete.style.marginRight = "5px"
        btnDelete.addEventListener("click", function(){
            deleteGame(item)
        })

        const btnEdit = document.createElement("button")
        btnEdit.innerText = "Editar"
        btnEdit.classList.add("btn", "btn-warning")
        btnEdit.addEventListener('click', function() {
            editGame(item)
        })

        item.append(btnDelete, btnEdit)
        gamesList.appendChild(item)
    });
}).catch((error) =>{
    console.log(error)
})