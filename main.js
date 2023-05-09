// returns json data from API and inputs that data into the div by id

function randomQuote() {
    fetch("https://animechan.vercel.app/api/random")
    .then(r => r.json())
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

// populates anime dropdown with options
function animeList() {
    fetch('https://animechan.vercel.app/api/available/anime')
      .then(r => r.json())
      .then(data => {return data})
      .then((data) => {
        ListHandler(data)
      })
    }

// takes the data from anime list and populates the select dropdown with options
function ListHandler(Array) {
    Array.forEach(element => {
        const animeDropDown = document.getElementById("animeSelect");
        const option = document.createElement("option");
        option.textContent = element
        animeDropDown.appendChild(option);
    });
}

// returns a quote by anime Title
function searchQuote(title) {
    fetch(`https://animechan.vercel.app/api/random/anime?title=${title}`)
          .then(r => r.json())
          .then((data) => console.log(data));
}

// adds event listener to quote button and calls the randomQuote function

const quoteButton = document.getElementById("quoteButton")
    quoteButton.addEventListener('click', randomQuote)

// adds event listener to domcontentloaded and calls the randomQuote function

document.addEventListener("DOMContentLoaded", randomQuote)
document.addEventListener("DOMContentLoaded", animeList)
