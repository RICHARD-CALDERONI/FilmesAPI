import { API } from "./fetchApi.js";

const containerFilme = document.querySelector('.filmes');
const inputFilme = document.getElementById('input-filme');
const botaoProcurar = document.querySelector('.botaoBusca');

console.log(inputFilme);

botaoProcurar.addEventListener('click', procurarFilme);


async function procurarFilme() {
  const nomeFilme = inputFilme.value;
  limparFilmes();
  if (nomeFilme != '') {
    const filmes = await API.buscaFilme(nomeFilme);
    filmes.forEach(filme => renderizaFilme(filme))
  } else {
    todosFilmesPopulares();
  }
}

function limparFilmes() {
  containerFilme.innerHTML = '';
}

async function todosFilmesPopulares() {
  const filmes = await API.filmesPopulares()
  filmes.forEach(filme => renderizaFilme(filme));
}

window.onload = function () {
  todosFilmesPopulares();
}



function renderizaFilme(filme) {
    const { original_title, poster_path, overview} = filme
    
      const elementoFilme = document.createElement('div');
      elementoFilme.classList.add('container-filme');
      containerFilme.appendChild(elementoFilme);

      const divImg = document.createElement('div');
      divImg.classList.add('img-filme')
      const imagemFilme = document.createElement('img');
      imagemFilme.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
      imagemFilme.alt = `${original_title} Poster`;
      divImg.appendChild(imagemFilme);
      elementoFilme.appendChild(divImg);

      const informacaoFilme = document.createElement('div');
      informacaoFilme.classList.add('card-1');
      const tituloFilme = document.createElement('h4');
      tituloFilme.innerText = original_title;
      informacaoFilme.appendChild(tituloFilme);
      elementoFilme.appendChild(informacaoFilme);
      
      const sinopseFilme = document.createElement('div');
      sinopseFilme.classList.add('card-2');
      sinopseFilme.innerText = overview;
      elementoFilme.appendChild(sinopseFilme)
}
