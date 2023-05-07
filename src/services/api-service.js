const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = '221af12348c3ca060963c8b12f5995d3';


const formatDate = (dateString) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date(dateString);

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

class ApiService {
  getResource = async (url) => {
    const res = await fetch(`${BASE_URL}${url}api_key=${KEY_API}`);
    return res.json();
  }

  getTrending = async (page=1) => {
    const res = await this.getResource(`/trending/movie/day?page=${page}&`);
    return this.#transformTrending(res);
  }

  #transformTrending({ results, total_results }) {
    const transformedResults = results.map(({ id, title, poster_path, vote_average }) => ({
      movieId: id,
      title,
      poster_path: poster_path ? 'https://image.tmdb.org/t/p/w500' + poster_path : '/goit-react-hw-05-movies/img/noimage.jpg',
      vote_average: vote_average.toFixed(2),
    }));

    return {
      results: transformedResults,
      total_results
    };
  }

  searchMovies = async (query, page=1) => {
    const res = await this.getResource(`/search/movie?query=${query}&page=${page}&`);
    return this.#transformTrending(res);
  };

  getMovieDetails = async (movieId) => {
    const res = await this.getResource(`/movie/${movieId}?`);
    return this.#transformMovieDetails(res);
  };

  #transformMovieDetails({
    genres,
    overview,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    title,
    vote_average
  }) {
    return {
      genres: genres.map(({name}) => name),
      overview,
      poster_path: poster_path ? 'https://image.tmdb.org/t/p/w500' + poster_path : 'goit-react-hw-05-movies/img/noimage.jpg',
      production_companies: production_companies.map(({name}) => name),
      production_countries: production_countries.map(({name}) => name),
      release_date: formatDate(release_date),
      title,
      vote_average: vote_average.toFixed(2),
    };
  }

  getMovieCredits = async (movieId) => {
    const res = await this.getResource(`/movie/${movieId}/credits?`);
    return this.#transformCredits(res);
  }

  #transformCredits({ cast }) {
    return cast.map(({ character, name, profile_path, id }) => ({
      id,
      character,
      name,
      profile_path: profile_path
        ? 'https://image.tmdb.org/t/p/w500' + profile_path
        : '/goit-react-hw-05-movies/img/noimage.jpg',
    }));
  }

  getMovieReviews = async (movieId, page=1) => {
    const res = await this.getResource(`/movie/${movieId}/reviews?page=${page}&`);
    return this.#transformMovieReviews(res);
  }

  #transformMovieReviews({ results }) {
    return results.map(({ author, author_details: { avatar_path }, content, created_at, updated_at, url, id }) => {

      const avatar = avatar_path
        ? avatar_path.includes('http')
          ? avatar_path.slice(1)
          : 'https://image.tmdb.org/t/p/w500' + avatar_path
        : '/goit-react-hw-05-movies/img/noimage.jpg';

      return {
        author,
        avatar_path: avatar,
        content,
        created_at: formatDate(created_at),
        updated_at: formatDate(updated_at),
        url,
        id
      };
    });
  }
}

export const apiService = new ApiService();
