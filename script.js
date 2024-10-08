const QuoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader')

let apiQuotes = [];

// show loading
function loading () {
    loader.hidden = false
    QuoteContainer.hidden = true;
}

// Hide Loading
function complete () {
    QuoteContainer.hidden = false
    loader.hidden = true;
}
//Show New quote
function newQuote() {
    loading();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // check if author field is blank and replace it with unknown

  if (!quote.author) {
    authorText.textContent = "unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // Check Quote length to determine styling

  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
  }else{
    quoteText.classList.remove('long-quote')
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  complete()
}

// Get Quotes From API
async function getQuotes() {
    loading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // catch Error here
  }
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click',tweetQuote )

// On load
getQuotes();

// loading();
