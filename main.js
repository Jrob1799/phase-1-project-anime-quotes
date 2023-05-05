function randomQuote(event) {
    fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    return data
    })
    .then((data) => {
        let quote = data.quote
        console.log(quote)
        const quoteResult = document.getElementById("quoteResult")
    })
    
    event.preventDefault()
}


const quoteButton = document.getElementById("quoteButton")
    quoteButton.addEventListener('click', randomQuote)


