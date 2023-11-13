function searchMovies() {
    const searchTerm = document.getElementById('search').value.toLowerCase();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                renderMovies(data.results);
            } else {
                renderMovies([]);
            }
        })
        .catch(error => console.error('Fehler beim Abrufen der Daten:', error));
}

function renderMovies(movies) {
    const movieListContainer = document.getElementById('movie-list');
    movieListContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const image = document.createElement('img');
        image.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;  // Anpassung hier
        image.alt = movie.title;

        const title = document.createElement('p');
        title.textContent = movie.title;

        movieCard.appendChild(image);
        movieCard.appendChild(title);

        movieListContainer.appendChild(movieCard);
    });
}