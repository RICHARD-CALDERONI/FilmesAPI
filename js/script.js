import { API } from "./fetchApi.js";

const containerFilme = document.querySelector('.filmes');
const inputFilme = document.getElementById('input-filme');
const botaoProcurar = document.querySelector('.botaoBusca');


botaoProcurar.addEventListener('click', procurarFilme);

window.addEventListener('click', (event) => {
  const elementoClicado = event.target;
  console.log('elemento clicado: ', elementoClicado);
})

async function procurarFilme() {
  const nomeFilme = inputFilme.value;
  console.log('nome do filme: ',nomeFilme);
  
  limparFilmes();
  if (nomeFilme != '') {
    try{
      const filmes = await API.buscaFilme(nomeFilme);
      filmes.forEach(filme => renderizaFilme(filme))
    } catch (error) {
      console.error('Erro ao buscar Filmes: ', error);
    }
  } else {
    todosFilmesPopulares();
  }
}

function limparFilmes() {
  containerFilme.innerHTML = '';
}

window.onload = function () {
  todosFilmesPopulares();
}

async function todosFilmesPopulares() {
  const filmes = await API.filmesPopulares()
  filmes.forEach(filme => renderizaFilme(filme));
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
