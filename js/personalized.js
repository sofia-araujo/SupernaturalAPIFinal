const urlSeason = 'https://supernatural-quotes-api.cyclic.app/episodes'


const loadEp = async (url, value) => {
    try {
        const response = await fetch (`${url}?season=${value}`)
        if(!response){
            throw new Error('Erro ao carregar informações')
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const loadAll = async (season) => {
    try {
        const res = await loadEp(urlSeason, season)
        showEp(res.data)
    } catch (error) {
        console.log(error)
    }
}

const btn = document.querySelector('#ep-button')


btn.addEventListener('click', () => {
    let season = document.querySelector('#season').value
    parseInt(season)
    if(season === isNaN(season) || season === ""){
        alert('Type Valid Season')
        return
    }else if(season >= 16){
        alert('invalid season')
    }
    season.toString()
    loadAll(season)
})

const showEp = (data) => {
    const boxEp = document.querySelector('.ep-box')
    boxEp.innerHTML = ' '
    data.map((element) => {
        boxEp.innerHTML += `
        <span>Ep: ${element.ep}</span>
        <span>Tilte: ${element.title}</span>
        `
    })
}