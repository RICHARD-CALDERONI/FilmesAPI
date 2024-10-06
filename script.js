const moviesContainer = document.querySelector('.container-filme')

// const movies = [
//     {},
// ]

// window.onload = function() {

// }

// function renderMovie(movie) {

// }
/*Guardando a estrutura html dentro da variável móvie */
const movie = `

    <div class="container-filme">
           <img class="img-filme" src="img/avatarpng.png" alt="">
            <div class="card-1">
                <h4>Avatar</h4>
                <div class="nota-favorito">
                    <div class="nota">
                        <img src="img/Star.svg" alt=""><span>9.5</span>
                    </div>
                    <div class="favorito">
                        <img src="img/heart.svg" alt=""><span>favorito</span>
                    </div>
                </div>
                    
            </div>

            <div class="card-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo totam facere magnam quibusdam fugiat, error, doloremque voluptatum animi debitis unde. Sed commodi fugiat voluptatibus consequatur quos. Reiciendis, eos in.
            </div>
        </div>
`;

/*Criando uma div e armazenando dentro de variável*/
let newMovie = document.createElement('div');

/*Adicionando a classe 'continer-filme' dentro da div criada*/
newMovie.classList.add = ('container-filme');

/*Injetando a variável onde está a estrutura html dentro da div criada*/
newMovie.innerHTML = movie

/*incluindo a variável tratada ao final da fila*/
moviesContainer.appendChild(newMovie)

function renderizaFilme(filme) {
    const { titulo, imagem, pontuacao, ano, descricao} = filme

    const elementoFilme = document.createElement('div')
    elementoFilme.classList.add('input-filme')
    moviesContainer.appendChild(elementoFilme)

    const informacaoFilme = document.createElement('div')
    informacaoFilme.classList.add('card-1')

    const imagemFilme = document.createElement('div')
    imagemFilme.classList.add('img-filme')
}