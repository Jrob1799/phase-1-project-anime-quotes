// returns json data from API and inputs that data into the OL by id

function randomQuote(event) {
    fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((data) => {return data})
    .then((data) => {
        let quote = data.quote
        let anime = data.anime
        let character = data.character
        let quoteLine = document.getElementById("animeQuote").textContent = quote;
        let charLine = document.getElementById("animeCharacter").textContent = character;
        let titleLine = document.getElementById("animeTitle").textContent = anime;
    })
}

// adds event listener to quote button and calls the randomQuote function

const quoteButton = document.getElementById("quoteButton")
    quoteButton.addEventListener('click', randomQuote)


