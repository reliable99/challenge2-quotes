// Get Quotes From API
let apiQuotes = []
async function getQuotes() {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json"

    try{
        const response = await fetch(apiUrl)

        apiQuotes = await response.json()
        newQuote();
    }catch(error){
        // catch Error here 

    };
    
}

// On load

getQuotes()