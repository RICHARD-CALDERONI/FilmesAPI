import { apiKey } from "./key.js";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;

async function getFilmes() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


/* async function getFilmes() {
    const response = await fetch(url);
    const data = await Response.json();
    return data
} */


export {getFilmes}