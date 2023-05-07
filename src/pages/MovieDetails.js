import { useEffect, useState, Suspense, useRef } from 'react';
import { apiService } from '../services/api-service';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Loader from '../components/Loader';

import css from './MovieDetails.module.css';
import Error from '../components/Error';

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

  const location = useLocation();

  const backDetailsLocationRef = useRef(location.state?.from ?? '/');

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

  const DetailsBody = () => (
    <div className={ css.box }>
      <div className={ css.view }>
        <img src={ posterPath } alt={ title } />
      </div>
      <div className="data">
        <Link to={ backDetailsLocationRef.current } className={ css.linkBack }>&lt; Go back</Link>
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
          <li><Link to={ `cast?id=${movieId}` }>Actors</Link></li>
          <li><Link to={ `reviews?id=${movieId}` }>Reviews</Link></li>
        </ul>
        <Suspense fallback={ <Loader /> }>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );

  return (
    <>
      { isLoading && <Loader/> }
      <div>
        { error ? <Error>I'm sorry. Something happened wrong</Error> : <DetailsBody /> }
      </div>
    </>
  );
};

export default MovieDetails;
