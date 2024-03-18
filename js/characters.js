const urlBase = 'https://supernatural-quotes-api.cyclic.app/characters';

const loadCharacter = async (url) => {
    try {
        const response = await fetch(url)
        if(!response){
            throw new Error('Erro ao carregar informações')
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const showCharacter = (data) => {
    const characters = document.querySelector('.characters')
    data.resultCount = 50
    data.map((element) => {
        let character = document.createElement('article')
        character.innerHTML += `
        <img class="img-character" src="${element.img}" alt="image of character">
        <span><span class="title-span">Name: </span> ${element.name}</span>
        <span><span class="title-span">Location: </span>${element.location}</span>
        `
        characters.appendChild(character)
        character.classList.add('character-box')
        character.addEventListener('click', () => {
            characterDetails(element.id)
        })
        })
}

const character = document.querySelector('.character-box')



const loadAll = async () => {
    const res = await loadCharacter(urlBase)
    showCharacter(res.data)
}

const characterDetails = (id) =>{
    window.location.href = `./character.html?id=${id}`
}


loadAll()