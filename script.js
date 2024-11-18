/* ÁREA CONTENDO TODA A PARTE LÓGICA, EXCETO AS FUNÇÕES DE BUSCA NA API (FETCH)*/

const containerFilme = document.querySelector('.filmes')

const filmes = [
    {
      imagem: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      titulo: 'Batman',
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      titulo: 'Avengers',
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      imagem: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      titulo: 'Doctor Strange',
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
];


/*Guardando a estrutura html dentro da variável móvie */
/* const movie = `

    <div class="container-filme">
           <img class="img-filme" src="img/avatarpng.png" alt="">
            <div class="card-1">
                <h4>Avatar</h4>                    
            </div>

            <div class="card-2">{
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo totam facere magnam quibusdam fugiat, error, doloremque voluptatum animi debitis unde. Sed commodi fugiat voluptatibus consequatur quos. Reiciendis, eos in}.
            </div>
        </div>
`; */

window.onload = function () {
  filmes.forEach(filme => renderizaFilme(filme))    
}

function renderizaFilme(filme) {
    const { titulo, imagem, descricao} = filme
    
      const elementoFilme = document.createElement('div');
      elementoFilme.classList.add('container-filme');
      containerFilme.appendChild(elementoFilme);

      const divImg = document.createElement('div');
      divImg.classList.add('img-filme')
      const imagemFilme = document.createElement('img');
      imagemFilme.src = imagem;
      imagemFilme.alt = `${titulo} Poster`;
      divImg.appendChild(imagemFilme);
      elementoFilme.appendChild(divImg);

      
/*       const containerImagemFilme = document.createElement('div')
      containerImagemFilme.classList.add('img-filme')
      const imagemFilme = document.createElement('img')
      imagemFilme.src = imagem
      imagemFilme.alt = `${titulo} Poster`
      containerImagemFilme.appendChild(imagemFilme)
      containerFilme.appendChild(containerImagemFilme)
  
  
      const informacaoFilme = document.createElement('div')
      informacaoFilme.classList.add('card-1')
      const tituloFilme = document.createElement('h4')
      tituloFilme.innerText = titulo
      informacaoFilme.appendChild(tituloFilme)
      containerFilme.appendChild(informacaoFilme)
  
       const sinopseFilme = document.createElement('div')
       sinopseFilme.classList.add('card-2')
       sinopseFilme.innerText = descricao
       containerFilme.appendChild(sinopseFilme)
 */       }