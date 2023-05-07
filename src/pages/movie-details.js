import { useEffect, useState, Suspense } from 'react';
import { apiService } from '../services/api-service';
import { Link, Outlet, useParams } from 'react-router-dom';
import Loader from '../components/loader';

import css from './movie-details.module.css';

const MovieDetails = () => {

  const { movieId } = useParams();

  const [genres, setGenres] = useState([]);
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [posterPath, setPosterPath] = useState('');
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [releaseDate, setReleaseDate] = useState('');
  const [voteAverage, setVoteAverage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    apiService.getMovieDetails(movieId)
      .then(({
        genres,
        vote_average,
        release_date,
        production_countries,
        production_companies,
        poster_path,
        overview,
        title
      }) => {
        setGenres(genres);
        setVoteAverage(vote_average);
        setReleaseDate(release_date);
        setProductionCountries(production_countries);
        setProductionCompanies(production_companies);
        setPosterPath(poster_path);
        setOverview(overview);
        setTitle(title);
    })
    .catch(err => {
      clearState();
      setError(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, [movieId]);

  const clearState = () => {
    setGenres([]);
    setTitle('');
    setOverview('');
    setPosterPath('');
    setProductionCompanies([]);
    setProductionCountries([]);
    setReleaseDate('');
    setVoteAverage('');
  };

  const loader = isLoading && <Loader/>
  const content = error
    ? <h2>{ error.message }</h2>
    : (
      <>
        <div className={ css.box }>
          <div className={ css.view }>
            <img src={ posterPath } alt={ title } />
          </div>
          <div className="data">
            <h1>{ title }<span>{ voteAverage }</span></h1>
            <p className={ css.desc }>{ overview }</p>
            <ul className={ css.dataList }>
              <li><strong>Genres</strong>: { genres.join(', ') }</li>
              <li><strong>Companies</strong>: { productionCompanies.join(', ') }</li>
              <li><strong>Countries</strong>: { productionCountries.join(', ') }</li>
              <li><strong>Release</strong>: { releaseDate }</li>
            </ul>
            <hr/>
            <ul className={ css.details }>
              <li><Link to={ `/movies/${movieId}/cast?id=${movieId}` }>Actors</Link></li>
              <li><Link to={ `/movies/${movieId}/reviews?id=${movieId}` }>Reviews</Link></li>
            </ul>
            <Suspense fallback={ <Loader /> }>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </>
    );

  return (
    <>
      { loader }
      <div>
        { content }
      </div>
    </>
  );
};

export default MovieDetails;
