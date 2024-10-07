const moviesContainer = document.querySelector('.container-filme')

const movies = [
    {
      imagem: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      titulo: 'Batman',
      pontuacao: 9.2,
      ano: 2022,
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      titulo: 'Avengers',
      pontuacao: 9.2,
      ano: 2019,
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      imagem: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      titulo: 'Doctor Strange',
      pontuacao: 9.2,
      ano: 2022,
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
];


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
    elementoFilme.classList.add('container-filme')
    moviesContainer.appendChild(elementoFilme)
    
    const containerImagemFilme = document.createElement('div')
    containerImagemFilme.classList.add('img-filme')
    const imagemFilme = document.createElement('img')
    imagemFilme.src = imagem
    imagemFilme.alt = `${titulo} Poster`
    containerImagemFilme.appendChild(imagemFilme)



    const informacaoFilme = document.createElement('div')
    informacaoFilme.classList.add('card-1')
    const tituloFilme = document.createElement('h4')
    tituloFilme


}