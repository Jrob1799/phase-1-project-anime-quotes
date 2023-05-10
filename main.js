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
// function searchQuote(title) {
//     fetch(`https://animechan.vercel.app/api/random/anime?title=${title}`)
//           .then(r => r.json())
//           .then((data) => () {
//             let quote = data.quote
//             let anime = data.anime
//             let character = data.character
//             let quoteLine = document.getElementById("animeQuote").textContent = quote;
//             let charLine = document.getElementById("animeCharacter").textContent = character;
//             let titleLine = document.getElementById("animeTitle").textContent = anime;
//           });
// }

// uses searchQuote to return a quote from the anime selected in the dropdown menu
function animeSelector(title) {
    const searchButton = document.getElementById("searchButton")
    searchButton.addEventListener("click", () => {
        searchQuote(title);
    });
}


// adds event listener to quote button and calls the randomQuote function

const quoteButton = document.getElementById("quoteButton")
    quoteButton.addEventListener('click', randomQuote)

// adds event listener to domcontentloaded and calls the randomQuote and animeList function

document.addEventListener("DOMContentLoaded", randomQuote);
document.addEventListener("DOMContentLoaded", animeList);

//adds event listener to the drop down menu and returns the target value to animeSelector

const selectElement = document.getElementById("animeSelect")
    selectElement.addEventListener("change", (event) =>{
        let dropDownTarget = event.target.value;
        animeSelector(dropDownTarget);
    })