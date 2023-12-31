const fuseOptions = {
	// isCaseSensitive: false,
	// includeScore: false,
	// shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	// threshold: 0.6,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"title",
		"author",
        "category"
	]
};

/*
const list = [
    {
        "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard...",
        "author": "Marilyn Monroe",
        "category": "attributed-no-source, best, life, love, mistakes, out-of-control, truth, worst"
    },
    {
        "quote": "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nob...",
        "author": "William W. Purkey",
        "category": "dance, heaven, hurt, inspirational, life, love, sing"
    },
    {
        "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dream...",
        "author": "Dr. Seuss",
        "category": "attributed-no-source, dreams, love, reality, sleep"
    },
    {
        "quote": "A friend is someone who knows all about you and still loves you.",
        "author": "Elbert Hubbard",
        "category": "friend, friendship, knowledge, love"
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love ca...",
        "author": "Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",
        "category": "darkness, drive-out, hate, inspirational, light, love, peace"
    },
    {
        "quote": "We accept the love we think we deserve.",
        "author": "Stephen Chbosky, The Perks of Being a Wallflower",
        "category": "inspirational, love"
    }
]
*/
let fuse = null


fetch('./list.json')
    .then((response) => response.json())
    .then((json) => {
        fuse = new Fuse(json, fuseOptions);
        const input = document.querySelector("input");
        input.addEventListener("input", updateValue);
    })

function updateValue(e) { //  This function is called each time there is change to input (letter, delete, etc.)
    const element = document.getElementById("paragraph"); 

    while (element.hasChildNodes()) //  This removes the previous text so there aren't multiple duplicate quotes
        element.removeChild(element.firstChild)

    const results = fuse.search(e.target.value)
    console.log(results);
    let numResults = Math.min(results.length, 10)

    for (let i = 0; i < numResults; i++) {
        const div = document.createElement("div"); //  New div for each quote and author

        const quote_text = document.createElement("p"); //  Adds the quote text part of the item
        quote_text.textContent = (results[i]).item.quote
     
        const author_text = document.createElement("p"); //  Adds the author text part of the item
        author_text.textContent = (results[i]).item.author


        //  Appends both the quote and author texts to div, then adds it to element
        div.appendChild(quote_text) 
        div.appendChild(author_text)
        element.appendChild(div);
    }
   
    
}


