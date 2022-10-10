function loadQuote() {
    const fetchUrl = "https://api.kanye.rest/";
    fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => displayQuote(data));
}

function displayQuote(quote) {
    const blockQuote = document.getElementById("quote");
    blockQuote.innerText = quote.quote;
    console.log(quote.quote);
}

// loadQuote();
