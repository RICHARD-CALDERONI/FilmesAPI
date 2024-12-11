import { apiKey } from "./key";


async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`
    
    const fetchResponse = await fetch (url) 
}


