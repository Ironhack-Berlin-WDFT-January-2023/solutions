const charactersAPI = new APIHandler('http://localhost:8000')

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', function (event) {
        charactersAPI.getFullList()
        .then(response => {
            const characters = response.data

            let cards = ``
            characters.forEach(character => {
                cards +=
                `
                <div class="character-info">
                    <div class="name">Name: ${character.name}</div>
                    <div class="occupation">Occupation: ${character.occupation}</div>
                    <div class="cartoon">Cartoon: ${character.cartoon ? "Yes" : "No"}</div>
                    <div class="weapon">Weapon: ${character.weapon}</div>
                </div>
                ` 
            })

            document.querySelector(".characters-container").innerHTML = cards
        })
        .catch(err => console.log(err))
    })

    document.getElementById('fetch-one').addEventListener('click', function (event) {
        const characterId = document.querySelector("input[name='character-id']").value

        charactersAPI.getOneRegister(characterId)
        .then(response => {
            const character = response.data

            const card =
            `
            <div class="character-info">
                <div class="name">Name: ${character.name}</div>
                <div class="occupation">Occupation: ${character.occupation}</div>
                <div class="cartoon">Cartoon: ${character.cartoon ? "Yes" : "No"}</div>
                <div class="weapon">Weapon: ${character.weapon}</div>
            </div>
            ` 

            document.querySelector(".characters-container").innerHTML = card
        })
        .catch(err => console.log(err))
    })

    document.getElementById('delete-one').addEventListener('click', function (event) {
        const characterId = document.querySelector("input[name='character-id-delete']").value

        charactersAPI.deleteOneRegister(characterId)
        .then(response => {
            console.log("Deleted: ", response.data)
        })
        .catch(err => console.log(err))
    })

    document.getElementById('edit-character-form').addEventListener('submit', function (event) {
        event.preventDefault()
        
        const characterId = document.querySelector("#edit-character-form input[name='chr-id']").value
        const characterName = document.querySelector("#edit-character-form input[name='name']").value
        const characterOccupation = document.querySelector("#edit-character-form input[name='occupation']").value
        const characterWeapon = document.querySelector("#edit-character-form input[name='weapon']").value
        const characterCartoon = document.querySelector("#edit-character-form input[name='cartoon']").checked

        const character = { name: characterName, occupation: characterOccupation, weapon: characterWeapon, cartoon: characterCartoon }

        charactersAPI.updateOneRegister(characterId, character)
        .then(response => {
            console.log("Updated: ", response.data)
        })
        .catch(err => console.log(err))
    })

    document.getElementById('new-character-form').addEventListener('submit', function (event) {
        event.preventDefault()

        const characterName = document.querySelector("#new-character-form input[name='name']").value
        const characterOccupation = document.querySelector("#new-character-form input[name='occupation']").value
        const characterWeapon = document.querySelector("#new-character-form input[name='weapon']").value
        const characterCartoon = document.querySelector("#new-character-form input[name='cartoon']").checked

        const character = { name: characterName, occupation: characterOccupation, weapon: characterWeapon, cartoon: characterCartoon }

        charactersAPI.createOneRegister(character)
        .then(response => {
            console.log("Created: ", response.data)
        })
        .catch(err => console.log(err))
    })
})
