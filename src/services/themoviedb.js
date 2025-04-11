import axios from "axios";

const options = {
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGI4YWJmNmZjZWU3NWM0NTUwOGZjODkyNDY5NmU0MSIsIm5iZiI6MTczNjQwOTU0OC44OTYsInN1YiI6IjY3N2Y4MWNjMTQzMWUwNTkxYWJhZjdjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RqCVHKE5gyscoklcvaccbOiseY8wlw0l-kSqMOXvIrc",
    },
};

export const getTrendingMovies = async (page) => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&&page=${page}`,
        options
    );
    return data;
};

export const getInfoMovie = async (movieID) => {
    const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
        options
    );

    return data;
};

export const getCastMovie = async (movieID) => {
    const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
        options
    );

    return data;
};

export const getReviewsMovie = async (movieID) => {
    const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}/reviews?language=en-US`,
        options
    );

    return data;
};

export const searchMovie = async (query) => {
    const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
    );

    return data;
};
