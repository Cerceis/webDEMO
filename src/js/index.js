/* Your main logic goes here */
/* But i have nothing */

const movies = [
    { "name": "Avengers End Game"},
    { "name": "The Batman"},
    { "name": "Fast & Furious"},
    { "name": "Avatar"},
    { "name": "Top Gun"},
    { "name": "Morbious"}
]

/**
 * What is a slug ? 
 * A slug is url friendly string without any special symbols and characters
 * that will alter/ mess with the url behaviors.
 * Real slug converter will also parse symbols, 
 * but here I will omit it. 
 * Slug also greatly improves SEO and user readability.
 * ex)
 *  Avengers End Game -> avengers-end-game
 */
function createSlug(str){
    return str.toLowerCase().replaceAll(" ", "-");
}

function populateMovies(){
    const movieCon = document.querySelector("[data-movieCon]");
    movies.forEach(m => {
        const el = document.createElement("a");
        const br = document.createElement("br");
        el.href = `/views/download.html?m=${createSlug(m.name)}`
        el.textContent = m.name;
        movieCon.appendChild(el);    
        movieCon.appendChild(br);    
    });
}
populateMovies();