import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIE_API_KEY}`,
});

export default api;
