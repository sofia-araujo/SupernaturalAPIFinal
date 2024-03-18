
async function loadCharacter(urlBase, id){
    try {
        const response = await fetch(`${urlBase}/${id}`)
        if(!response){
            throw new  Error('Erro ao carregar informações')
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

async function loadAll() {
    const urlParam = new URLSearchParams(window.location.search)
    const idParam = urlParam.get('id')

    if(!idParam){
        console.log('ID não encontrado na URL')
        return
    }

    const url = 'https://supernatural-quotes-api.cyclic.app/characters'


    try {
        const character = await loadCharacter(url, idParam)
        showCharacter(character)
    } catch (error) {
        console.log(error)
    }
}

loadAll()

async function showCharacter(character){
    const characterBox = document.querySelector('.specific-character')
        characterBox.innerHTML += `
        <img class="img-character" src="${character.img}" alt="image of character">
        <span><span class="title-span">Name: </span>${character.name}</span>
        <span><span class="title-span">Location: </span>${character.location}</span>
        `
        
        character.actor.forEach(function (actors) {
            characterBox.innerHTML += `<span><span class="title-span">Actor:</span> ${actors}</span>`
        })
        characterBox.innerHTML += `<span class="title-span"> Episodes </span>`
        character.episodes.forEach(function (episode) {
            characterBox.innerHTML += `<span><span  class="title-span">Title:</span> ${episode.title} </span>`;
        })
        characterBox.innerHTML += `<span class="title-span"> Ocuppations: </span>`
        character.occupation.forEach(function (occupations){
            characterBox.innerHTML += `<span> ${occupations} </span>`
        })
        characterBox.classList.add('character-box')
}