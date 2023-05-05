function randomQuote(event) {
    fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    return data
    })
    .then((data) => {
        let quote = data.quote
        let anime = data.anime
        let character = data.character
        console.log(quote)
        console.log(anime)
        console.log(character)
        let quoteLine = document.getElementById("animeQuote").textContent = quote;
        let charLine = document.getElementById("animeCharacter").textContent = character;
        let titleLine = document.getElementById("animeTitle").textContent = anime;
    })
    
    event.preventDefault()
}


const quoteButton = document.getElementById("quoteButton")
    quoteButton.addEventListener('click', randomQuote)


