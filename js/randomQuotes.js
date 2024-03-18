urlBase = 'https://supernatural-quotes-api.cyclic.app';
endpoint = 'quotes/random';

const loadRandomQuote = async (urlBase, endpoint) => {
    try {
        const response = await fetch(`${urlBase}/${endpoint}`) 
        if(!response){
            throw new Error
        }
        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const randomQuote = document.querySelector('.random-quote')
const button = document.querySelector('#button-generate-quote')

const innerQuote = (data) => {
    
        let quote = document.querySelector('#quote')
        quote.innerHTML = `${data.line_0.quote}`
        let name = document.querySelector('#name')
        name.innerHTML = `Character: ${data.line_0.character.name}`
} 

const loadAll = async () => {
    const data = await loadRandomQuote(urlBase, endpoint)
    innerQuote(data)
}

button.addEventListener('click', () => {
    loadAll()
})
