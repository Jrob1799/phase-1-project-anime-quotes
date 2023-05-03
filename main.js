console.log("IT'S ALIVE")

fetch("https://animechan.vercel.app/api/random")
.then((response) => response.json())
.then((quote) => console.log(quote));