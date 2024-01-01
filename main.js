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

    /*
    while (element.hasChildNodes()) //  This removes the previous text so there aren't multiple duplicate quotes
        element.removeChild(element.firstChild)
    */

    const results = fuse.search(e.target.value)
    console.log(results);
    let numResults = Math.min(results.length, 10)

    /*
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

    */

    if (results[0].item.quote != null) {
        const p1q = document.getElementById("p1q")
        const p1a = document.getElementById("p1a")
        p1q.textContent = '"' + results[0].item.quote + '"' 
        p1a.textContent = "- " + results[0].item.author

        const p2q = document.getElementById("p2q")
        const p2a = document.getElementById("p2a")
        p2q.textContent = '"' + results[1].item.quote + '"' 
        p2a.textContent = "- " + results[1].item.author

        const p3q = document.getElementById("p3q")
        const p3a = document.getElementById("p3a")
        p3q.textContent = '"' + results[2].item.quote + '"' 
        p3a.textContent = "- " + results[2].item.author

        const p4q = document.getElementById("p4q")
        const p4a = document.getElementById("p4a")
        p4q.textContent = '"' + results[3].item.quote + '"' 
        p4a.textContent = "- " + results[3].item.author

        const p5q = document.getElementById("p5q")
        const p5a = document.getElementById("p5a")
        p5q.textContent = '"' + results[4].item.quote + '"' 
        p5a.textContent = "- " + results[4].item.author

        const p6q = document.getElementById("p6q")
        const p6a = document.getElementById("p6a")
        p6q.textContent = '"' + results[5].item.quote + '"' 
        p6a.textContent = "- " + results[5].item.author

        const p7q = document.getElementById("p7q")
        const p7a = document.getElementById("p7a")
        p7q.textContent = '"' + results[6].item.quote + '"' 
        p7a.textContent = "- " + results[6].item.author

        const p8q = document.getElementById("p8q")
        const p8a = document.getElementById("p8a")
        p8q.textContent = '"' + results[7].item.quote + '"' 
        p8a.textContent = "- " + results[7].item.author

        const p9q = document.getElementById("p9q")
        const p9a = document.getElementById("p9a")
        p9q.textContent = '"' + results[8].item.quote + '"' 
        p9a.textContent = "- " + results[8].item.author

        const p10q = document.getElementById("p10q")
        const p10a = document.getElementById("p10a")
        p10q.textContent = '"' + results[9].item.quote + '"' 
        p10a.textContent = "- " + results[9].item.author
    }
    


}
