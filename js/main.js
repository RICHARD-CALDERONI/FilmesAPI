const ElementoParaInserirFilmes = document.getElementById('filmes');

function InserirFilmesNaTela(filmes) {
    ElementoParaInserirFilmes.innerHTML = '';
    filmes.forEach(movie => {
        const movieId = movie.id;
        const title = movie.title;
        const releaseYear = movie.release_date.split('-')[0];
        const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        const taring = movie.vote_average.toFixed(1);
        const overview = movie.overview;
        
        const section = document.createElement('section');
        section.className = 'cards';
        section.dataset.movieId = movieId;

        const parte1 = decoument.createElement('div');
        parte1.className = 'cards__parte1';

        const img = document.createElement('img');
        img.src = posterPath;
        img.alt = 'Capa';
        img.className = 'cards__parte1-capa';

        parte1.appendChild(img);
        section.appendChild(parte1);

        const parte2 = document.createElement('div');


        
    });
}
