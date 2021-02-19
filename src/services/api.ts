import axios from 'axios';

const apiKey = process.env.MOVIE_API_KEY;
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;

interface ApiInterface {
  name: string;
  gender_id: number;
  id: string;
  m: string;
  c: string;
  backdrop_path: string;
  known_for_department: string;
  popularith: number;
  profile_path: string;
  popularity: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: string;
}

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'pt_BR',
        page: 1,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m: ApiInterface) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });
    const modifiedData = data['genres'].map((g: ApiInterface) => ({
      id: g['id'],
      name: g['name'],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMovieByGenre = async (genre_id: ApiInterface) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: 'pt_BR',
        page: 1,
        with_genres: genre_id,
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m: ApiInterface) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchPersons = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data['results'].map((p: ApiInterface) => ({
      id: p['id'],
      popularity: p['popularity'],
      name: p['name'],
      profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
      known: p['known_for_department'],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchTopratedMovie = async () => {
  try {
    const { data } = await axios.get(topratedUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m: ApiInterface) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchMovieDetail = async (id: ApiInterface) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: 'en_US',
      },
    });
    return data;
  } catch (error) {}
};

export const fetchMovieVideos = async (id: ApiInterface) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    return data['results'][0];
  } catch (error) {}
};

// export const fetchCasts = async (id: ApiInterface) => {
//   try {
//     const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
//       params: {
//         api_key: apiKey,
//       },
//     });
//     const modifiedData = data['cast'].map((c: ApiInterface) => ({
//       id: c['cast_id'],
//       character: c['character'],
//       name: c['name'],
//       img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
//     }));

//     return modifiedData;
//   } catch (error) {}
// };

// export const fetchSimilarMovie = async (id: ApiInterface) => {
//   try {
//     const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
//       params: {
//         api_key: apiKey,
//         language: 'en_US',
//       },
//     });
//     const posterUrl = 'https://image.tmdb.org/t/p/original/';
//     const modifiedData = data['results'].map((m) => ({
//       id: m['id'],
//       backPoster: posterUrl + m['backdrop_path'],
//       popularity: m['popularith'],
//       title: m['title'],
//       poster: posterUrl + m['poster_path'],
//       overview: m['overview'],
//       rating: m['vote_average'],
//     }));

//     return modifiedData;
//   } catch (error) {}
// };
