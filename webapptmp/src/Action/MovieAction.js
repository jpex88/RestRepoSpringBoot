import axios from 'axios';

export async function getAllMovie() {
    const URL = `http://127.0.0.1:8080/movie/`;

    try {
        return await axios.get(URL);
    } catch (error) {
        console.log(error);
    }

}

export async function getMovieById(id) {
    const URL = `http://127.0.0.1:8080/movie/${id}`;

    try {
        return await axios.get(URL);
    } catch (error) {
        console.log(error);
    }

}

export async function postMovieByName(movieName) {
    let movie = {moviename: ''};
    movie.moviename = movieName;
    console.log("Moviename: ", movie)
    try {
        return await axios.post('http://127.0.0.1:8080/movie', movie);
    } catch (error) {
        console.log(error);
    }

}

export async function deleteMovieByName(id) {
    const URL = `http://127.0.0.1:8080/movie/${id}`;

    try {
        return await axios.delete(URL);
    } catch (error) {
        console.log(error);
    }
}