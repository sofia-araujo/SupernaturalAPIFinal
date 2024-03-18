urlBase = 'https://supernatural-quotes-api.cyclic.app/episodes';

const loadEpisodes = async (url) => {
    try {
        const response = await fetch(url)
        if(!response){
            throw new Error('Não foi possivel carregar')
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const loadAll = async () => {
    const res = await loadEpisodes(urlBase)
    showEpisodes(res.data)
}

const showEpisodes = (data) => {
    const section = document.querySelector('.section-episodes')
    data.map((element) => {
        let episodes = document.createElement('section')
        episodes.innerHTML += `
        <span class="episode-info">Title: ${element.title}</span>
        <span class="episode-info">Season: ${element.season}</span>
        <span class="episode-info">Episode: ${element.ep}</span>
        `
        episodes.classList.add('episodes')
        section.appendChild(episodes)
    })
}

loadAll()