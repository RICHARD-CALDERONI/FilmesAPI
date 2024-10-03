const moviesContainer = document.querySelector('.container-filme')

// const movies = [
//     {},
// ]

// window.onload = function() {

// }

// function renderMovie(movie) {

// }

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


let newMovie = document.createElement('div');

newMovie.classList.add = ('container-filme');

newMovie.innerHTML = movie

newMovie.appendChild(moviesContainer)
