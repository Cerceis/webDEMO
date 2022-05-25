const url = new URL(window.location.href);
const movieSlug = url.searchParams.get("m");

/**
 * Then you can either
 * - Parse the slug and find the movies.
 * - or just pass the id instead.
 * - etc
 * 
 * In this example i will just simply revert the slug and display it.
 */
const movieHeader = document.querySelector("[data-movieHeader]");
movieHeader.textContent = movieSlug.split("-").map(i => `${i[0].toLocaleUpperCase()}${i.slice(1,i.length)}`).join(" ");