import { apiKey } from "./key.js";

async function filmesPopulares() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
    const fetchResponse = await fetch(url)
    const { results } = await fetchResponse.json();
    return results;
}

async function buscaFilme(nomeFilme) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${nomeFilme}&language=pt-BR&page=1`
    const fetchResponse = await fetch(url)
    const { results } = await fetchResponse.json()
    return results
}



export const API = {
    filmesPopulares,
    buscaFilme
}